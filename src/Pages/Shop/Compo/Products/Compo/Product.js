import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, img, description, price, _id } = product;
  return (
    <div className="border">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="px-3 py-4">
        <h1 className="text-xl font-semibold mb-2 text-black font-mono">
          {name}
        </h1>
        <p className="font-arial text-sm">{description}</p>
        <h5 className="text-xl font-semibold my-2 font-mono">
          $<span className="text-lg">{price}</span>
        </h5>
        <Link to={`/product/${_id}`}>
          <button className="inline-block py-1 px-3 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
