import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://glass-store-hhti.onrender.com/products", {
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

    setTimeout(() => {
      setIsSuccess(false);
    }, 6000);
  };

  console.log(watch("example"));
  return (
    <section>
      {isSuccess && (
        <div
          className="bg-gren-100 mb-2 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Awesome!</strong>
          <span className="block sm:inline"> We received your order 👍</span>
        </div>
      )}
      <h6 className="text-2xl text-black font-bold mb-4 uppercase">
        Add a new product
      </h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-left text-gray-400 text-md my-2">
          Product Title
        </label>
        <input
          className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
          placeholder="title here.."
          {...register("name", { required: true })}
        />
        <label className="block text-left text-gray-400 text-md my-2">
          Price
        </label>
        <input
          placeholder="price here.."
          type="number"
          className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
          {...register("price", { required: true })}
        />
        <label className="block text-left text-gray-400 text-md my-2">
          Img Url
        </label>
        <input
          placeholder="url here.."
          className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
          {...register("img", { required: true })}
        />
        <label className="block text-left text-gray-400 text-md my-2">
          Product Description
        </label>
        <textarea
          placeholder="description.."
          className="w-full px-2 block mb-4 focus:outline-none border border-gray-30bg-transparent focus:outline-none border border-gray-300"
          rows="3"
          {...register("description", { required: true })}
        />

        <input
          className="inline-block py-1 px-6 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase"
          type="submit"
          value="upload"
        />
      </form>
    </section>
  );
};

export default AddProduct;
