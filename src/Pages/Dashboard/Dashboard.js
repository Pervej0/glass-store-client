import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import {
  faCartPlus,
  faCog,
  faHistory,
  faShoppingBasket,
  faSignOutAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProduct from "./Compo/AddProduct/AddProduct";
import Checkout from "./Compo/Checkout/Checkout";
import DashboardBanner from "./Compo/DashboardBanner";
import DashboardNav from "./Compo/DashboardNav";
import MakeAdmin from "./Compo/MakeAddmin/MakeAdmin";
import ManageOrders from "./Compo/ManageOrders/ManageOrders";
import ManageProducts from "./Compo/ManageProducts/ManageProducts";
import MyOrders from "./Compo/MyOrders/MyOrders";
import OrderReview from "./Compo/OrderReview/OrderReview";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { logOut, isAdmin } = useAuth();

  return (
    <>
      <section>
        <DashboardNav url={url} />
        <div className="dashboard-container border-b border-t">
          <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <div className="flex md:flex-row-reverse flex-wrap">
              <div className="w-full md:w-4/5 bg-gray-100">
                <div className="container bg-gray-100 py-14 px-6 mx-auto">
                  <Switch>
                    {!isAdmin ? (
                      <>
                        <Route
                          exact
                          path={`${path}`}
                          component={DashboardBanner}
                        />
                        <Route path={`${path}/myOrders`} component={MyOrders} />
                        <Route
                          path={`${path}/orderReview`}
                          component={OrderReview}
                        />
                        <Route path={`${path}/checkout`}>
                          <Checkout />
                        </Route>
                      </>
                    ) : (
                      <>
                        <Route
                          exact
                          path={`${path}`}
                          component={DashboardBanner}
                        />
                        <AdminRoute path={`${path}/manageOrders`}>
                          <ManageOrders />
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                          <ManageProducts />
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                          <AddProduct />
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                          <MakeAdmin />
                        </AdminRoute>
                      </>
                    )}
                  </Switch>
                </div>
              </div>
              <div className="w-full dashboard-sidebar hidden sm:block md:w-1/5 bg-gray-900 md:bg-gray-900 relative px-2 text-center md:pt-8 md:left-0 absolute lg:relative ">
                <div className="mx-auto lg:float-right lg:px-10">
                  <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                    {!isAdmin ? (
                      <>
                        <Link to={`${url}`}>
                          <h2 className="text-2xl text-white mb-14">
                            Dashboard
                          </h2>
                        </Link>
                        <li className="mr-3 flex-1 flex items-baseline">
                          <FontAwesomeIcon
                            className="text-white mr-2"
                            icon={faCartPlus}
                            size="1x"
                          />
                          <Link
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400 "
                            to={`${url}/myOrders`}
                          >
                            My Orders
                          </Link>
                        </li>
                        <li className="mr-3 flex-1 flex items-baseline">
                          <FontAwesomeIcon
                            className="text-white mr-2"
                            icon={faHistory}
                            size="1x"
                          />
                          <Link
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400 "
                            to={`${url}/orderReview`}
                          >
                            Order Review
                          </Link>
                        </li>
                        <li className="mr-3 flex-1 flex items-baseline">
                          <FontAwesomeIcon
                            className="text-white mr-2"
                            icon={faPaypal}
                            size="1x"
                          />
                          <Link
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400 "
                            to={`${url}/checkout`}
                          >
                            My Checkout
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <Link to={`${url}`}>
                          <h2 className="text-2xl text-white mb-14">
                            Admin panel
                          </h2>
                        </Link>
                        <li className="mr-3 flex-1 flex items-baseline">
                          <FontAwesomeIcon
                            className="text-white mr-2"
                            icon={faShoppingBasket}
                            size="1x"
                          />
                          <Link
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                            to={`${url}/manageProducts`}
                          >
                            Manage Products
                          </Link>
                        </li>
                        <li className="mr-3 flex-1 flex items-baseline">
                          <FontAwesomeIcon
                            className="text-white mr-2"
                            icon={faCog}
                            size="1x"
                          />
                          <Link
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                            to={`${url}/manageOrders`}
                          >
                            Manage Orders
                          </Link>
                        </li>
                        <li className="mr-3 flex-1 flex items-baseline">
                          <FontAwesomeIcon
                            className="text-white mr-2"
                            icon={faShoppingBasket}
                            size="1x"
                          />
                          <Link
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                            to={`${url}/addProduct`}
                          >
                            Add Product
                          </Link>
                        </li>
                        <li className="mr-3 flex-1 flex items-baseline">
                          <FontAwesomeIcon
                            className="text-white mr-2"
                            icon={faUserShield}
                            size="1x"
                          />
                          <Link
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                            to={`${url}/makeAdmin`}
                          >
                            Make Admin
                          </Link>
                        </li>
                      </>
                    )}
                    <li className="flex-1 mt-24 mb-4 absolute bottom-8 left-16">
                      <Link
                        to="/login"
                        onClick={logOut}
                        title="Sign out"
                        className="block text-white py-1 text-center pl-1 align-middle no-underlinehover:text-gray-400"
                      >
                        <FontAwesomeIcon
                          className="transform rotate-180"
                          icon={faSignOutAlt}
                          size="2x"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
