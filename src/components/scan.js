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
          <Link to="/order-success" className="checkoutLink">
            Pay Now
          </Link>
      </div>
    </div>
  );
};

export default Scan;
