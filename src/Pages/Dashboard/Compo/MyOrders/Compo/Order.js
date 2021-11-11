import React from "react";

const Order = ({ order, handleRemove, serial }) => {
  const { status, img, productTitle, _id } = order;
  console.log(order);
  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3 border capitalize">{serial}</td>
      <td className="px-4 py-3 border text-lg text-md font-semibold">
        {productTitle}
      </td>
      <td className="px-4 py-3 border text-md font-semibold">
        <img width="70px" src={img} alt="" />
      </td>
      <td className="px-4 py-3 border text-xs">
        <p className="px-2 py-1 font-semibold leading-tight rounded-sm">
          <span
            className={
              status === "pending"
                ? "text-yellow-700 bg-yellow-400 px-2"
                : "text-green-700 bg-green-100 px-2"
            }
          >
            {status}
          </span>
        </p>
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

export default Order;
