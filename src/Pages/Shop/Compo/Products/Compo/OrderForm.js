import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";

const OrderForm = ({ product }) => {
  const { register, handleSubmit, watch, reset } = useForm();
  const { user } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    data.img = product.img;
    data.price = product.price;
    data.status = "pending";
    data.productTitle = product.name;
    console.log(data);
    if (!isSuccess) {
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            setIsSuccess(true);
            reset();
          }
        });
    } else {
      alert("user already added");
    }
  };
  console.log(watch("example"));
  return (
    <div>
      {/* alert field */}
      {isSuccess && (
        <div
          className="bg-gren-100 mb-2 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Awesome!</strong>
          <span className="block sm:inline"> We received your order 👍</span>
        </div>
      )}

      <h6 className="text-xl text-black font-bold mb-4 uppercase">
        Receive your product
      </h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-left text-gray-400 text-md my-2">
          Full Name
        </label>
        <input
          className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
          defaultValue={user?.displayName}
          placeholder="name here.."
          {...register("name")}
        />
        <label className="block text-left text-gray-400 text-md my-2">
          Your Email
        </label>
        <input
          className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
          defaultValue={user?.email}
          placeholder="email here.."
          {...register("email")}
        />
        <label className="block text-left text-gray-400 text-md my-2">
          Product Title
        </label>
        <input
          placeholder="title here.."
          defaultValue={product.name}
          className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
          {...register("productTitle")}
        />
        <label className="block text-left text-gray-400 text-md my-2">
          Phone
        </label>
        <input
          placeholder="phone no here.."
          className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
          type="number"
          {...register("phone", { required: true })}
        />
        <label className="block text-left text-gray-400 text-md my-2">
          Address
        </label>
        <input
          placeholder="Address here.."
          className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-30bg-transparent focus:outline-none border border-gray-300"
          {...register("address", { required: true })}
        />
        <label className="block text-left text-gray-400 text-md my-2">
          Details
        </label>
        <textarea
          placeholder="extra details.."
          className="w-full px-2 block mb-4 focus:outline-none border border-gray-30bg-transparent focus:outline-none border border-gray-300"
          rows="4"
          {...register("extraDetails")}
        />

        <button
          type="submit"
          className="inline-block py-1 px-3 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
