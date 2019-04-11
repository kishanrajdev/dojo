import React from 'react';
import { Link } from 'react-router-dom'

const Scan = (props) => {
  return (
    <div className="scan-wrap">
      <div>
          <form onSubmit={props.scanProduct}>
            <button type="submit" className="scanButton">
              <i className="fas fa-barcode"></i>
            </button>
          </form>
      </div>
      <div>
          <button onClick={props.showBilling} className="checkoutLink">
            Checkout
          </button>
      </div>
    </div>
  );
};

export default Scan;
