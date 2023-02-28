import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useAuth from "../useAuth";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [collapse, setCollapse] = useState(true);
  const data = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {}
  };
  return (
    <nav className="flex justify-between text-primary h-100 items-center shadow px-4 relative">
      <Link to="/" className="w-10">
        <img src="./logo192.png" alt="logo" className="w-full" />
      </Link>
      <ul
        className={`flex w-1/3 justify-evenly font-semibold max-lg:absolute max-lg:flex-col max-lg:top-[10vh] max-lg:left-0 max-lg:w-full max-lg:justify-between max-lg:items-center max-lg:h-[50vh] max-lg:bg-white max-lg:py-4 z-50 ${
          collapse ? "max-lg:hidden" : ""
        }`}
      >
        <li>
          <Link
            className="text-white py-1 px-3 bg-primary rounded-md border border-primary hover:bg-white hover:text-primary ease-in-out duration-300"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="hover:text-secondary">
          <Link>About</Link>
        </li>
        {data ? (
          <li>
            <button
              className="text-white py-1 px-3 bg-primary rounded-md border border-primary hover:bg-white hover:text-primary ease-in-out duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/create-account">Create Account</Link>
            </li>
          </>
        )}
      </ul>
      <button
        onClick={() => setCollapse(!collapse)}
        className="hidden max-lg:block"
      >
        <FaBars className="hidden max-lg:block text-primary" />
      </button>
    </nav>
  );
};

export default Navbar;
