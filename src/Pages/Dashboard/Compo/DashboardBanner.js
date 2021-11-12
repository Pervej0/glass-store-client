import {
  faBlog,
  faCartPlus,
  faHistory,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useProducts from "../../../Hooks/useProducts";
import dashboardImg from "../../../images/dashboard/dashboard.png";

const DashboardBanner = () => {
  const [products] = useProducts();
  /*  const loadData = (route) => {
    useEffect(`https://guarded-oasis-87785.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => console.log(object));
  }; */
  console.log(products);
  return (
    <section className="md:px-14 p-3">
      <h1 className="md:text-4xl text-2xl mb-8 uppercase text-black text-center font-semibold mb-4">
        Welcome to Dashboard
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-14">
        <div className="grid grid-cols-3 gap-2 p-3 text-center">
          <div>
            <div className="border p-4">
              <div>
                <button className="py-2 px-3 rounded-full bg-blue-300 text-white">
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
              <div className="my-4">
                <h1 className="text-4xl">1.4k</h1>
                <p className="text-sm text-gray-400">Total Users</p>
              </div>
            </div>
          </div>
          <div>
            <div className="border p-4">
              <div>
                <button className="py-2 px-3 rounded-full bg-green-300 text-white">
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
              <div className="my-4">
                <h1 className="text-4xl">{products?.length}</h1>
                <p className="text-sm text-gray-400">Total Products</p>
              </div>
            </div>
          </div>
          <div>
            <div className="border p-4">
              <div>
                <button className="py-2 px-3 rounded-full bg-yellow-300 text-white">
                  <FontAwesomeIcon icon={faHistory} />
                </button>
              </div>
              <div className="my-4">
                <h1 className="text-4xl">1k</h1>
                <p className="text-sm text-gray-400">Total Reviews</p>
              </div>
            </div>
          </div>
          <div>
            <div className="border p-4">
              <div>
                <button className="py-2 px-3 rounded-full bg-red-300 text-white">
                  <FontAwesomeIcon icon={faBlog} />
                </button>
              </div>
              <div className="my-4">
                <h1 className="text-4xl">10</h1>
                <p className="text-sm text-gray-400">Total Blog</p>
              </div>
            </div>
          </div>
          <div>
            <div className="border p-4">
              <div>
                <button className="py-2 px-3 rounded-full bg-pink-300 text-white">
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
              <div className="my-4">
                <h1 className="text-4xl">1.2k</h1>
                <p className="text-sm text-gray-400">Order shippted</p>
              </div>
            </div>
          </div>
          <div>
            <div className="border p-4">
              <div>
                <button className="py-2 px-3 rounded-full bg-indigo-300 text-white">
                  <FontAwesomeIcon icon={faStar} />
                </button>
              </div>
              <div className="my-4">
                <h1 className="text-4xl">2k</h1>
                <p className="text-sm text-gray-400">Ratings</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={dashboardImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default DashboardBanner;
