import React from "react";
import swal from "sweetalert";

const Row = ({ order, index, refetch }) => {
  const { name, price, quantity, address, _id } = order;

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once Canceled, you will not be able to recover this Order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/myOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              refetch();
            }
          });
        swal("Your Order has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Order is safe!");
      }
    });
  };

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
        <button onClick={() => handleDelete(_id)} className="btn btn-xs">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Row;
