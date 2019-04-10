import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Scan from '../components/scan';
import CartItems from '../components/cartItems';
import { getProduct } from '../modules/products';


class Home extends Component {
  constructor(props) {
    super(props);
    this.scanProduct = this.scanProduct.bind(this);
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

  render() {
    const products = this.props.products;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row p-4">
            <div className="col-md-8">
              <CartItems cart={products.cart} />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3"><Scan scanProduct={this.scanProduct} /></div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { getProduct })(Home);