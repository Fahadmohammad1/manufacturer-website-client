import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Row = ({ order, index, refetch }) => {
  const navigate = useNavigate();
  const { product, price, quantity, address, _id, paid } = order;

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once Canceled, you will not be able to recover this Order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://ancient-wave-77953.herokuapp.com/myOrder/${id}`, {
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
      <td>{product}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{address}</td>
      <td>
        {price && !paid && (
          <button
            onClick={() => navigate(`/dashboard/payment/${_id}`)}
            className="btn btn-xs"
          >
            Pay
          </button>
        )}
        {price && paid && <button className="btn btn-xs">Paid</button>}
      </td>
      <td>
        {!paid && (
          <button onClick={() => handleDelete(_id)} className="btn btn-xs">
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
};

export default Row;
