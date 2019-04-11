import React from 'react';
import { Link } from 'react-router-dom';

const Billing = ({cart}) => {
    let orderTotal = 0
    const items = cart.map((item, i) => {
    orderTotal += item['MRP'] * item['Quantity'];
      return (
      <tr key={`cart${i}`}>
        <td>{item['Name']}</td>
        <td>{item['Description']}</td>
        <td>{item['Quantity']}</td>
        <td>{item['MRP'] * item['Quantity']}</td>
      </tr>)
    });

    return (
    <div>
      <table className="table table-borderless rounded">
        <thead>
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total Price</th>
        </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
      <div className="row">
      <div className="col-md-6">
          <span className="order-total">Order Total</span>: {orderTotal}
      </div>
      <div className="col-md-6 checkout-link">
        <Link to="/order-success" className="checkoutLink">
            Make Payment
        </Link>
      </div>
      </div>
      </div>
    )
};

export default Billing;
