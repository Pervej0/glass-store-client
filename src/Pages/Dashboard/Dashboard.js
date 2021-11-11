import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Checkout from "./Compo/Checkout/Checkout";
import DashboardNav from "./Compo/DashboardNav";
import ManageOrders from "./Compo/ManageOrders/ManageOrders";
import MyOrders from "./Compo/MyOrders/MyOrders";
import OrderReview from "./Compo/OrderReview/OrderReview";

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <section>
      <DashboardNav url={url} />
      <div className="order-container border-b">
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
          <div className="flex md:flex-row-reverse flex-wrap">
            <div className="w-full md:w-4/5 bg-gray-100">
              <div className="container bg-gray-100 py-24 px-6 mx-auto">
                <Switch>
                  <Route exact path={path} component={MyOrders} />
                  <Route path={`${path}/orderReview`} component={OrderReview} />
                  <Route path={`${path}/checkout`} component={Checkout} />
                  <Route
                    path={`${path}/manageOrders`}
                    component={ManageOrders}
                  />
                </Switch>
              </div>
            </div>

            <div className="w-full  md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center   md:pt-8  md:left-0 absolute lg:relative ">
              <div className=" mx-auto lg:float-right lg:px-16">
                <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                  <li className="mr-3 flex-1">
                    <Link
                      className="block py-1 md:py-3 pl-1 align-middle text-white no-underline  border-b-2 border-gray-800 md:border-gray-900 "
                      to={`${url}`}
                    >
                      My Orders
                    </Link>
                  </li>
                  <li className="mr-3 flex-1">
                    <Link
                      className="block py-1 md:py-3 pl-1 align-middle text-white no-underline  border-b-2 border-gray-800 md:border-gray-900 "
                      to={`${url}/orderReview`}
                    >
                      Order Review
                    </Link>
                  </li>
                  <li className="mr-3 flex-1">
                    <Link
                      className="block py-1 md:py-3 pl-1 align-middle text-white no-underline  border-b-2 border-gray-800 md:border-gray-900 "
                      to={`${url}/checkout`}
                    >
                      My Checkout
                    </Link>
                  </li>
                  <li className="mr-3 flex-1">
                    <Link
                      className="block py-1 md:py-3 pl-1 align-middle text-white no-underline  border-b-2 border-gray-800 md:border-gray-900"
                      to={`${url}/manageOrders`}
                    >
                      Manage Orders
                    </Link>
                  </li>
                  <li className="flex-1 mt-24">
                    <button
                      title="Sign out"
                      className="block text-white py-1 px-5 text-center pl-1 align-middle no-underline border-b-2 border-gray-800 md:border-gray-900"
                    >
                      <FontAwesomeIcon
                        className="transform rotate-180"
                        icon={faSignOutAlt}
                        size="2x"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
