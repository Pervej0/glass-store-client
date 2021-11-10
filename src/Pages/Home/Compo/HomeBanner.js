import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="md:px-14 p-3 py-10">
        <div>
          <span className="text-red-400 font-bold uppercase text-sm">
            Secret Reveals
          </span>
          <h1 className="text-3xl md:text-5xl text-black font-bold my-3 font-mono">
            Looks Good <span className="text-red-400">Feel Good</span>
          </h1>
          <p className="my-4 text-black">
            Life is too short make it long with your fashion. We are showcasing
            <br />
            here your good choice. So just grave it 😉.
          </p>
          <Link to="/shop">
            <button className="inline-block py-2 px-3 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase">
              Explore Now
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HomeBanner;
