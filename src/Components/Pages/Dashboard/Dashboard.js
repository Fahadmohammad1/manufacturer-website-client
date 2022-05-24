import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <nav>
        <Link to="/dashboard">Orders</Link>
        <Link to="/dashboard/addReview">Review</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
