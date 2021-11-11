import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  console.log(watch("example"));
  return (
    <section>
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
