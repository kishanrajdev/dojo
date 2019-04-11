import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import reducer, { resetCart, getProduct } from './modules/products';

describe('rendering the app ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


describe('Products reducer ', () => {
  it('should return the initial state', () => {
    const initialState = {
      isWaiting: false,
      product: {},
      requestError: '',
      cart: []
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_SENT', () => {
    const state = {
      isWaiting: true,
      product: {},
      requestError: '',
      cart: []
    };
    expect(reducer({}, {type: 'products/REQUEST_SENT'})).toEqual(state);
  });

  it('should set product data', () => {
    const productData = {id: '123', title: 'my prod'};
    const state = {
      isWaiting: false,
      product: productData,
      requestError: '',
      cart: [{id: '123', title: 'my prod'}]
    };
    expect(reducer({}, {type: 'products/PRODUCT', product: productData, cart: [productData] })).toEqual(state);
  });

  it('should set product data', () => {
    const state = {
      isWaiting: false,
      product: {},
      requestError: '',
      cart: []
    };
    expect(reducer({}, {type: 'products/CART', product: {}, cart: [] })).toEqual(state);
  });
});

describe('reset cart ', () => {
  it('should clear the cart and product data', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await resetCart()(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: 'products/CART', cart: [] });
  })
});

describe('add product to cart', () => {
  it('should dispatch request sent', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await getProduct()(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: 'products/REQUEST_SENT' });
  });

  it('should add product to cart', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await getProduct()(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: 'products/PRODUCT', product: {id: 1, name: 'test'}, cart: [{id: 1, name: 'test'}] });
  })
});