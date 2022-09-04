import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="navbar bg-base-100 sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden px-2">
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
              <Link to="/">Home</Link>
            </li>

            {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="btn btn-ghost normal-case text-sm lg:text-xl px-0">
          <div className="lg:w-12 w-10">
            <img src={logo} alt="" />
          </div>
          <a href="/" className="uppercase">
            Mars Techn<span className="text-[#F59B30]">o</span>l
            <span className="text-[#F59B30]">o</span>gy
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="text-secondary">
            <Link to="/">HOME</Link>
          </li>

          {user ? (
            <li className="text-secondary">
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
          ) : (
            ""
          )}
          <li className="text-secondary">
            <Link to="/blog">BLOG</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <Link to="/login">
            <button className="relative lg:inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 hidden">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-[#F59B30] hover:text-white">
                LOGIN
              </span>
            </button>
          </Link>
        )}
        {user && (
          <button
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("accessToken");
              navigate("/");
            }}
            className="relative lg:inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 hidden"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-[#F59B30] hover:text-white">
              LOGOUT
            </span>
          </button>
        )}
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  user?.photoURL ||
                  "https://p.kindpng.com/picc/s/134-1341738_contacts-icon-contact-icon-png-red-transparent-png.png"
                }
                alt=""
              />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <span>{user?.displayName}</span>
            </li>
            <li>
              <span>{user?.email}</span>
            </li>
            <li>
              <Link to="/dashboard/myProfile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li className="lg:hidden">
              <span
                onClick={() => {
                  signOut(auth);
                  localStorage.removeItem("accessToken");
                  navigate("/login");
                }}
              >
                Login
              </span>
            </li>
            <li className="lg:hidden">
              <span
                onClick={() => {
                  signOut(auth);
                  localStorage.removeItem("accessToken");
                  navigate("/");
                }}
              >
                LogOut
              </span>
            </li>
          </ul>
        </div>
        <div>
          <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden px-2">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
