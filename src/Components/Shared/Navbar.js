import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 container mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
        <div class="btn btn-ghost normal-case text-xl">
          <div className="w-12">
            <img src={logo} alt="" />
          </div>
          <a href="*" className="uppercase">
            Mars Technology
          </a>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
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
      <div class="navbar-end hidden lg:flex">
        <Link to="/" class="btn">
          Login
        </Link>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" class="justify-between">
                Profile
                <span class="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/">Settings</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
