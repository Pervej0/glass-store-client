import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="md:px-14 p-3 py-10">
        <div className="text-center">
          <span className="text-white font-bold uppercase text-sm">
            Secret Reveals
          </span>
          <h1 className="md:text-7xl sm:text-4xl text-3xl text-white font-bold italic my-3 font-mono">
            Looks Good <span className="text-red-400">Feel Good</span>
          </h1>
          <p className="my-4 text-white">
            Life is too short make it long with your fashion. We are showcasing
            <br />
            here your good choice. So just grave it 😉.
          </p>
          <Link to="/shop">
            <button className="inline-block py-2 px-5 transition duration-500 ease-in-out bg-transparent rounded hover:bg-black border hover:border-white text-white uppercase">
              Shop Now
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HomeBanner;
