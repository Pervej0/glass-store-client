import React from "react";

const ManageProduct = ({ product, handleRemove, serial }) => {
  const { img, name, _id } = product;
  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3 border capitalize">{serial}</td>
      <td className="px-4 py-3 border text-lg text-md font-semibold">{name}</td>
      <td className="px-4 py-3 border text-md font-semibold">
        <img width="70px" src={img} alt="" />
      </td>
      <td className="px-4 py-3 border text-sm">
        <button
          onClick={() => handleRemove(_id)}
          className="text-white bg-red-600 px-2"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ManageProduct;
