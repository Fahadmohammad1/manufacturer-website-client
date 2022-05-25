import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const { data } = axios
    .get(`http://localhost:5000/myOrder/${user.email}`)
    .then((res) => res.json());

  if (loading) {
    return <Loading />;
  }
  console.log(data);
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
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default AddReview;
