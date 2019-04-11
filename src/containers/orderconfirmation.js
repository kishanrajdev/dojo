import React, { Component }  from 'react';
import { Link } from 'react-router-dom'

class Orderconfirmation extends Component {
  
  componentDidMount() {
    if(window) {
      window.localStorage.clear();
    }
  }

  render() {
    return (
      <div className=" container p-10">
        <div className="p-1">
          <h2>Thank you for shopping with us.</h2>
        </div>
        <div className="p-1">
          <Link to="/" className="checkoutLink">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
}

export default Orderconfirmation;
