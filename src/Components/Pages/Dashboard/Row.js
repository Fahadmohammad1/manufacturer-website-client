import React from "react";

const Row = ({ order, index }) => {
  const { name, price, quantity, address } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{address}</td>
      <td>
        <button className="btn btn-xs">Pay</button>
      </td>
      <td>
        <button className="btn btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default Row;
