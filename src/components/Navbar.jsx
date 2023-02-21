import React from "react";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="flex justify-between text-primary h-100 items-center shadow px-4">
      <Link to="/" className="w-10">
        <img src="./logo192.png" alt="logo" className="w-full" />
      </Link>
      <ul className="flex w-1/3 justify-evenly font-semibold max-lg:hidden">
        <li>
                  <Link className="text-white py-1 px-3 bg-primary rounded-md border border-primary hover:bg-white hover:text-primary ease-in-out duration-300" to="/">Home</Link>
        </li>
        <li className="hover:text-secondary">
          <Link>About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/create-account">Create Account</Link>
        </li>
          </ul>
          <FaBars className="hidden max-lg:block text-primary"/>
    </nav>
  );
};

export default Navbar;
