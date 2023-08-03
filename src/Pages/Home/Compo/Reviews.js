import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SingleReview from "./SingleReview/SingleReview";

let settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://glass-store-hhti.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="md:px-14 p-3 review my-14">
      <div className="text-center mb-20">
        <h2 className="text-3xl pb-2 font-semibold font-mono">
          Customer Review
        </h2>
        <hr className="w-1/4 mx-auto border-black" />
      </div>
      <Slider {...settings}>
        {reviews.map((item) => (
          <SingleReview key={item._id} review={item} />
        ))}
      </Slider>
    </section>
  );
};

export default Reviews;
