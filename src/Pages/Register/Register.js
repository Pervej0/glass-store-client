import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Register = () => {
  const [userError, setUserError] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { user, manuallySignUp, signInGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "password" && value.length < 6) {
      setUserError("Password atleast have 6 Length!");
      return;
    }
  };

  const registerSubmit = () => {
    if (userInfo.name === "") {
      setUserError("Please enter your name!");
      return;
    }
    if (userInfo.email === "") {
      setUserError("Please enter your email!");
      return;
    }
    if (userInfo.password === "") {
      setUserError("Please enter your password!");
      return;
    }

    if (userInfo.password !== userInfo.confirmPassword) {
      setUserError("Password dosen't matched!");
      return;
    }

    manuallySignUp(userInfo?.email, userInfo?.confirmPassword, userInfo?.name);
    setUserError("");
    history.push(from);
  };

  return (
    <>
      <NavigationBar />
      <section className="md:px-14 p-3">
        <div className="w-2/4 mx-auto border p-10">
          <div className="mb-8">
            <h6 className="text-xl text-black font-bold mb-4 uppercase">
              Create your Account
            </h6>
          </div>
          <div className="mb-3">
            <label className="block text-left text-gray-400 text-md my-2">
              Full Name:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
              onBlur={handleUserInput}
              name="name"
              type="text"
              required
              placeholder="Enter name"
            />
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
          <div className="mb-4">
            <label className="block text-left text-gray-400 text-md my-2">
              Confirm Password:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
              onBlur={handleUserInput}
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm password"
            />
          </div>
          <p className="text-red-300 text-xl my-4">{userError}</p>
          <button
            type="button"
            onClick={registerSubmit}
            className="inline-block py-2 px-5 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase"
          >
            Sign up
          </button>
          <div className="text-center">
            <div className="text-black text-center my-4 text-lg">
              ---------------- or ------------------
            </div>
            <div className="text-center">
              <button
                onClick={() => signInGoogle(from, history)}
                className="px-4 py-2 border border-black flex items-center justify-center mx-auto my-6"
              >
                <FontAwesomeIcon icon={faGoogle} size="2x" />
                &nbsp; Sign In With Google
              </button>
            </div>
            <div>
              <h4>
                Already have an account?&nbsp;
                <Link to="/login" className="text-red-400 font-semibold">
                  Just log in
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
