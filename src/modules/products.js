import productsAPI from '../services/products';

const PRODUCT = 'products/PRODUCT';
const REQUEST_SENT = 'products/REQUEST_SENT';
const REQUEST_ERROR = 'products/REQUEST_ERROR';
const RESET_STATE = 'products/RESET_STATE';
const CART = 'products/CART';
let cartData = [];

if(window) {
  let cartItems = window.localStorage.getItem('cart')
  cartData = cartItems ? JSON.parse(cartItems) : [];
}
const initialState = {
  isWaiting: false,
  product: {},
  requestError: '',
  cart: cartData
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SENT:
      return { ...initialState, isWaiting: true }
    case REQUEST_ERROR:
      return { ...initialState, requestError: action.error }
    case PRODUCT:
      return {...initialState, isWaiting: false, product: action.product, cart: action.cart }
    case CART:
      return {...initialState, cart: action.cart }
    case RESET_STATE:
      return { ...initialState }
    default: 
      return state
  }
}

const requestSent = () => ({ type: REQUEST_SENT });

const requestError = error => ({type: REQUEST_ERROR, error});

const product = (product, cart) => ({ type: PRODUCT, product, cart });

const cartState = (cart) => ({ type: CART, cart })

/**
 * Action - get book
 */
export const getProduct = (id = '') => {
  return async (dispatch) => {
    dispatch(requestSent());
    try {
      const { data } = await productsAPI().getProduct(id);
      let cart = [];
      if(window) {
        cart = window.localStorage.getItem('cart');
        cart = cart ? JSON.parse(cart) : [];
        cart = [...cart, data];
        window.localStorage.setItem('cart', JSON.stringify(cart));
      }
      return dispatch(product(data, cart));
    } catch (e) {
      return dispatch(requestError(e.message));
    }
  }
}

export const resetCart = () => {
  return async (dispatch) => {
      let cart = [];
      if (window) {
        cart = window.localStorage.getItem('cart');
        cart = cart ? JSON.parse(cart) : [];
        window.localStorage.setItem('cart', JSON.stringify(cart));
      }
      return dispatch(cartState(cart));
  }
}

