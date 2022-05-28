import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col ">
          <h2 className="text-3xl my-2 text-green-400 font-bold">
            Welcome to Dashboard
          </h2>

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addReview">Add Review</Link>
                </li>
              </>
            )}

            {admin && (
              <>
                <li>
                  <Link to="/dashboard/makeAdmin">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProducts">Manage Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageOrders">Manage Orders</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
