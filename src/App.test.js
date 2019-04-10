import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import reducer from './modules/products';

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
      products: productData,
      requestError: '',
      cart: [{id: '123', title: 'my prod'}]
    };
    expect(reducer({}, {type: 'products/PRODUCT', product: productData, cart: [productData] })).toEqual(state);
  });
})