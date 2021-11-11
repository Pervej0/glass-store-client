import {
  faBars,
  faCarAlt,
  faCartPlus,
  faHome,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const DashboardNav = ({ url }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { logOut, isAdmin } = useAuth();

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            to="/"
          >
            Glass Shop
          </Link>
          <button
            className="text-black bg-white border cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li>
              <Link
                to="/"
                title="Go to Home"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                <FontAwesomeIcon icon={faHome} size="2x" />
              </Link>
            </li>
            {!isAdmin ? (
              <>
                <li className="nav-item ">
                  <Link
                    className="px-3 sm:hidden py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={`${url}`}
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">My Orders</span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="px-3 sm:hidden py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={`${url}/orderReview`}
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Order Review</span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="px-3 py-2 sm:hidden flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={`${url}/checkout`}
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Checkout</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ">
                  <Link
                    className="px-3 sm:hidden py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={`${url}/manageOrders`}
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Manage Orders</span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="px-3 sm:hidden py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={`${url}/addProduct`}
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Add Product</span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="px-3 sm:hidden py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={`${url}/makeAdmin`}
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Make Admin</span>
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                to="/login"
                className="px-3 sm:hidden py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                onClick={logOut}
              >
                <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
