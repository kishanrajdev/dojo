import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Scan from '../components/scan';
import CartItems from '../components/cartItems';
import { getProduct, resetCart } from '../modules/products';
import Billing from '../components/billing';

class Home extends Component {
  constructor(props) {
    super(props);
    this.scanProduct = this.scanProduct.bind(this);
    this.showBilling = this.showBilling.bind(this);
  }

  componentDidMount() {
    this.props.resetCart();
  }

  scanProduct(e) {
    e.preventDefault();
    if(window) {
      let pc = parseInt(window.localStorage.getItem('productCounter')) || 0;
      if (pc < 16) {
        window.localStorage.setItem('productCounter', pc + 1);
      } else {
        window.localStorage.setItem('productCounter', 0);
      }
      this.props.getProduct(pc);
    } 
  }

  showBilling(e) {
    e.preventDefault();
    if(document) {
      document.getElementById('billing-details').classList.remove('d-none');
      document.getElementById("cart-items").classList.add("d-none");
    } 
  }

  render() {
    const products = this.props.products;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row p-4 " id="cart-items">
            <div className="col-md-8">
              <h3>SHOPPING CART</h3>
              <CartItems cart={products.cart} />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3"><Scan scanProduct={this.scanProduct} showBilling={this.showBilling} /></div>

          </div>
          <div className="row p-4  d-none" id="billing-details">            
              <div className="col-md-12"><div><h3>BILLING DETAILS</h3></div></div>
            
              <div className="col-md-8"><div>
              <Billing cart={products.cart} />
            </div></div>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { getProduct, resetCart })(Home);