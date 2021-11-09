import React from "react";

const HomeBanner = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-14 p-3 items-center py-10">
        <div>
          <span className="text-red-500 uppercase text-sm">Secret Reveals</span>
          <h1 className="text-3xl md:text-5xl font-bold my-3 font-mono">
            Looks Good <span className="text-red-500">Feel Good</span>
          </h1>
          <p className="my-3">
            Life is too short make it long with your fashion. We are showcasing
            here your good choice. So just grave it 😉.
          </p>
          <button className="py-2 px-5 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase">
            Explore
          </button>
        </div>
        <div>
          <img src="https://i.ibb.co/PjK7hYX/home-banner.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
