import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { auth, db } from "../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      if (user) {
     await addDoc(collection(db, "users"), {
          username: usernameRef.current.value,
          email: emailRef.current.value,
        });
          toast.success("🦄 Signup sucessful!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
      }
    } catch (error) {
      console.log("error=>", error);
    }
  };

  return (
    <>
      <div className="w-full h-900 flex bg-gray-200 justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-3/4 md:w-2/4 lg:w-1/3 bg-white shadow-md rounded-md py-6"
        >
          <h2 className="text-center text-primary text-2xl font-bold font-mono">
            Signup
          </h2>
          <div className="w-3/4 mx-auto rounded-sm my-8">
            <input
              type="text"
              placeholder="Username"
              className="relative block rounded-none w-full text-sm border border-grey-300 p-1 text-gray-900 placeholder-gray-300 focus:z-10 focus:outline-none focus:border-primary hover:border-primary rounded-t-sm"
              ref={usernameRef}
            />
            <input
              type="email"
              placeholder="Enter your email address here"
              className="relative block rounded-none w-full text-sm border border-grey-300 p-1 text-gray-900 placeholder-gray-300 focus:z-10 focus:outline-none focus:border-primary hover:border-primary"
              ref={emailRef}
            />
            <input
              type="password"
              placeholder="Password"
              className="relative block rounded-none w-full text-sm border border-grey-300  rounded-b-sm p-1 text-gray-900 placeholder-gray-300 focus:z-10 focus:outline-none focus:border-primary hover:border-primary"
              ref={passwordRef}
            />
          </div>
          <button className="bg-primary text-lg text-white w-3/4 block mx-auto rounded-sm border border-primary ease-in-out duration-300 hover:bg-white hover:text-primary">
            Create account
          </button>
          <p className="text-center py-3 text-sm ">
            Already have an account?
            <Link
              to="/login"
              className="text-primary hover:text-secondary ease-in-out duration-300"
            >
              Log in
            </Link>
          </p>
        </form>
          </div>
          <ToastContainer/>
    </>
  );
};

export default Signup;
