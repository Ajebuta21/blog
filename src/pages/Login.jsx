import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full h-900 flex bg-gray-200 justify-center items-center">
        <div className="w-3/4 md:w-2/4 lg:w-1/3 bg-white shadow-md rounded-md py-6">
          <h2 className="text-center text-primary text-2xl font-bold font-mono">
            LOGIN
          </h2>
          <div className="w-3/4 mx-auto rounded-sm my-8">
            <input
              type="email"
              placeholder="Enter your email address here"
              className="relative block rounded-none w-full text-sm border border-grey-300 rounded-t-sm p-1 text-gray-900 placeholder-gray-300 focus:z-10 focus:outline-none focus:border-primary hover:border-primary"
            />
            <input
              type="password"
              placeholder="Password"
              className="relative block rounded-none w-full text-sm border border-grey-300 rounded-b-sm p-1 text-gray-900 placeholder-gray-300 focus:z-10 focus:outline-none focus:border-primary hover:border-primary"
            />
          </div>
          <button className="bg-primary text-lg text-white w-3/4 block mx-auto rounded-sm border border-primary ease-in-out duration-300 hover:bg-white hover:text-primary">
            Log in
          </button>
          <p className="text-center py-3 text-sm ">
            Don't have an account yet?{" "}
            <Link
              to="/create-account"
              className="text-primary hover:text-secondary ease-in-out duration-300"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
