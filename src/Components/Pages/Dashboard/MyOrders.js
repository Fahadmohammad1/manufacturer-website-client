import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import Row from "./Row";
import { useQuery } from "react-query";
// import { useEffect, useState } from "react";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  // const [myOrders, setMyOrders] = useState([]);
  // console.log(myOrders);

  // useEffect(() => {
  //   if (user) {
  //     fetch(`http://localhost:5000/myOrder/${user?.email}`, {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => {
  //         console.log(res);
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setMyOrders(data);
  //       });
  //   }
  // }, [user]);

  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery(["myOrders", user], () =>
    fetch(`http://localhost:5000/myOrder/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log(res);
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
              <th></th>
              <th></th>
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
