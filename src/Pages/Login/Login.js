import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState("");
  const { signInGoogle, manuallySignIn } = useFirebase();

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signInSubmit = () => {
    if (userInfo.email === "") {
      setUserError("Please enter your email!");
      return;
    }
    if (userInfo.password === "") {
      setUserError("Please enter your password!");
      return;
    }
    console.log(userInfo);
    manuallySignIn(userInfo.email, userInfo.password);
    setUserError("");
  };

  return (
    <section className="md:px-14 p-3">
      <div className="p-6 my-8 grid md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <div className="mb-8">
            <h6 className="text-xl text-black font-bold mb-4">
              REGISTERED CUSTOMERS
            </h6>
            <p>If you have an account, sign in with your email address.</p>
          </div>
          <div className="mb-3">
            <label className="block text-left text-gray-400 text-md my-2">
              Your Email:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
              onBlur={handleUserInput}
              name="email"
              type="email"
              required
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-400 text-md my-2">
              Your Password:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
              onBlur={handleUserInput}
              name="password"
              type="password"
              required
              placeholder="Enter password"
            />
          </div>
          <p className="text-red-300 text-xl my-4">{userError}</p>
          <button
            type="button"
            onClick={signInSubmit}
            className="inline-block py-2 px-5 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase"
          >
            Log in
          </button>
          <div className="text-center">
            <div className="text-black text-center my-4 text-lg">
              ---------------- or ------------------
            </div>
            <div className="text-center">
              <button
                onClick={signInGoogle}
                className="px-4 py-2 border flex items-center justify-center mx-auto my-6"
              >
                <FontAwesomeIcon icon={faGoogle} size="2x" />
                &nbsp; Sign In With Google
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h6 className="text-xl text-black font-bold mb-4">NEW CUSTOMERS</h6>
            <p className="text-md">
              By creating an account with our store, you will be able to move
              through the checkout process faster, store multiple shipping
              addresses, view and track your orders in your account and more.
            </p>
          </div>
          <h4 className="mt-10">
            <button className="inline-block py-2 px-5 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white">
              <Link to="/register" className="font-semibold">
                Create an account
              </Link>
            </button>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Login;
