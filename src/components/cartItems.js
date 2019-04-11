import React from 'react';

const CartItems = ({cart}) => {
    const items = cart.map((item, i) => {
      return (
      <tr key={`cart${i}`}>
        <td>{item['Name']}</td>
        <td>{item['Description']}</td>
        <td>{item['Quantity']}</td>
        <td>{item['MRP'] * item['Quantity']}</td>
        <td><i className="fa fa-trash" aria-hidden="true"></i></td>
      </tr>)
    });

    return (
      <table className="table table-borderless rounded">
        <thead>
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total Price</th>
        <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    )
};

export default CartItems;
