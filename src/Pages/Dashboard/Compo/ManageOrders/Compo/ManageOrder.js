import { faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ManageOrder = ({ order, serial, handleRemove, statusHandle }) => {
  const { name, status, email, productTitle, _id } = order;
  return (
    <tr className="text-gray-600">
      <td className="px-4 py-3 border">{serial}</td>
      <td className="px-4 py-3 border text-lg text-md font-semibold">{name}</td>
      <td className="px-4 py-3 border text-md font-semibold">{productTitle}</td>
      <td className="px-4 py-3 border text-md font-semibold">{email}</td>
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
          &nbsp;
        </p>
      </td>
      <td className="text-center border">
        {" "}
        <button className="p-1" onClick={() => statusHandle(_id)}>
          <FontAwesomeIcon
            className="cursor-pointer"
            title="edit status"
            icon={faVoteYea}
            size="lg"
          />
        </button>
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

export default ManageOrder;
