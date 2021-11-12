import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/notFound.jpg";

const NotFound = () => {
  return (
    <section>
      <div className="relative h-screen flex justify-center items-center flex-col">
        <img className="h-full" src={notFound} alt="" />
        <div className="absolute top-10">
          <Link to="/">
            <button className="inline-block py-1 px-3 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase">
              <FontAwesomeIcon icon={faLongArrowAltLeft} /> &nbsp; Go Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
