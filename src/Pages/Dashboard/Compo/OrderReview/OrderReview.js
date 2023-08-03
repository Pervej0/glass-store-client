import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import ReactStars from "react-rating-stars-component";

const OrderReview = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [isAllCollect, setIsAllCollect] = useState(false);
  const [stars, setStars] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  console.log(user);
  const onSubmit = (data) => {
    data.stars = stars;
    if (user.photoURL) {
      data.photoURL = user.photoURL;
    } else {
      data.photoURL = "https://i.ibb.co/gTbPDB5/user.jpg";
    }
    console.log(data);
    if (!isSuccess) {
      if (isAllCollect) {
        fetch("https://glass-store-hhti.onrender.com/reviews", {
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
        alert("please rate us");
      }
    }
  };

  // ratings handle
  const ratingChanged = (newRating) => {
    setIsAllCollect(true);
    setStars(newRating);
    console.log(newRating);
  };

  return (
    <section>
      {isSuccess && (
        <div
          className="bg-gren-100 mb-2 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Thank you!</strong>
          <span className="block sm:inline"> To share your opinion 👍</span>
        </div>
      )}
      <div className="mb-8">
        <h6 className="text-xl text-black font-bold mb-4 uppercase">
          Share your exprience
        </h6>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-left text-gray-400 text-md my-2">
          Your name
        </label>
        <input
          placeholder="Name.."
          className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-30bg-transparent focus:outline-none border border-gray-300"
          defaultValue={user.displayName}
          {...register("name")}
        />
        <label className="block text-left text-gray-400 text-md my-2">
          Your profession
        </label>
        <input
          placeholder="Profession.."
          className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border border-gray-30bg-transparent focus:outline-none border border-gray-300"
          {...register("profession", { required: true })}
        />
        <label className="block text-left text-gray-400 text-md my-2">
          Your exprience
        </label>
        <textarea
          placeholder="Details.."
          className="w-full px-2 block mb-4 focus:outline-none border border-gray-30bg-transparent focus:outline-none border border-gray-300"
          rows="4"
          {...register("extraDetails")}
        />
        <div className="mb-3">
          <label className="block text-left text-gray-400 text-md">
            Rate us
          </label>
          <ReactStars
            count={5}
            isHalf={true}
            onChange={ratingChanged}
            size={42}
            activeColor="#ffaa4a"
          />
        </div>
        <input
          className="inline-block py-1 px-3 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase"
          type="submit"
        />
      </form>
    </section>
  );
};

export default OrderReview;
