import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import Row from "./Row";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery(["myOrders", user], () =>
    fetch(
      `http://localhost:5000/myOrder/${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        navigate("/");
      }
      return res.json();
    })
  );
  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myOrders?.map((order, index) => (
              <Row
                order={order}
                key={order._id}
                index={index}
                refetch={refetch}
              ></Row>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
