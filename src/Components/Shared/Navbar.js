import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="navbar bg-base-100 sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Item 1</Link>
            </li>
            <li>
              <Link to="/">Item 2</Link>
            </li>
            <li>
              <Link to="/">Item 3</Link>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost normal-case text-xl">
          <div className="w-12">
            <img src={logo} alt="" />
          </div>
          <a href="*" className="uppercase">
            Mars Technology
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Item 1</Link>
          </li>
          <li>
            <Link to="/">Item 2</Link>
          </li>

          <li>
            <Link to="/">Item 3</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link
          to="/login"
          className="btn bg-gradient-to-r text-white from-[#F8941E] to-[#EDAC60]"
        >
          Login
        </Link>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/">Settings</Link>
            </li>
            <li>
              <button onClick={() => signOut(auth)}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
