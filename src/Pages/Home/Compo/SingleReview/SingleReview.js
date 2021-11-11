import React from "react";
import ReactStars from "react-rating-stars-component";
import "./SingleReview.css";

const SingleReview = ({ review }) => {
  const { name, profession, extraDetails, photoURL, stars } = review;

  return (
    <div className="review-item">
      <div>
        <img src={photoURL} alt="" />
      </div>
      <div>
        <h4 className="text-xl my-3 font-semibold">{name}</h4>
        <p className="text-gray-500 font-mono my-2">{extraDetails}</p>
        <small className="font-bold">{profession}</small>
        <div className="flex justify-center">
          <ReactStars
            count={5}
            value={stars}
            edit={false}
            activeColor="#ffaa4a"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
