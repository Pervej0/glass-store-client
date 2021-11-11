import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, watch } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/admin/${data.email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  console.log(watch("example"));
  return (
    <section className="md:px-14">
      {isSuccess && (
        <div
          className="bg-gren-100 mb-2 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Awesome!</strong>
          <span className="block sm:inline"> We received your order 👍</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:w-2/3 w-full mx-auto border p-4">
          <h6 className="text-2xl text-black font-bold mb-4 uppercase">
            Give an one admin role
          </h6>
          <input
            className="w-full my-4 py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-300"
            placeholder="Enter email here.."
            type="email"
            {...register("email", { required: true })}
          />
          <input
            className="inline-block py-1 px-6 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase"
            type="submit"
            value="Create"
          />
        </div>
      </form>
    </section>
  );
};

export default MakeAdmin;
