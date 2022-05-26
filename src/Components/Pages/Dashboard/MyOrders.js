import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import Row from "./Row";
import { useQuery } from "react-query";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);

  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery(["myOrders", user], () =>
    fetch(
      `https://ancient-wave-77953.herokuapp.com/myOrder/${user?.email}`
    ).then((res) => res.json())
  );

  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
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
            {myOrders.map((order, index) => (
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
