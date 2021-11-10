import React from "react";
import Slider from "react-slick";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const Reviews = () => {
  return (
    <section className="md:px-14 p-3 review my-14">
      <div className="text-center mb-20">
        <h2 className="text-3xl pb-2 font-semibold font-mono">
          Customer Review
        </h2>
        <hr className="w-1/4 mx-auto border-black" />
      </div>
      <Slider {...settings}>
        <div className="review-item">
          <div>
            <img
              src="https://i.ibb.co/0JVSn3y/photo-1497551060073-4c5ab6435f12-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-NXx8b-WFu-JTIw-Z2xhc3-Nlc3xlbnw.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Jhon Dow</h4>
            <p>
              Send Me Flowers Prom dress for a family lunch. First one since
              July. Such a great day seeing my parents, siblings, nephew and
              niece.
            </p>
            <small>General Manager</small>
          </div>
        </div>
        <div className="review-item">
          <div>
            <img
              src="https://i.ibb.co/0JVSn3y/photo-1497551060073-4c5ab6435f12-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-NXx8b-WFu-JTIw-Z2xhc3-Nlc3xlbnw.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Jhon Dow</h4>
            <p>
              Send Me Flowers Prom dress for a family lunch. First one since
              July. Such a great day seeing my parents, siblings, nephew and
              niece.
            </p>
            <small>General Manager</small>
          </div>
        </div>
        <div className="review-item">
          <div>
            <img
              src="https://i.ibb.co/0JVSn3y/photo-1497551060073-4c5ab6435f12-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-NXx8b-WFu-JTIw-Z2xhc3-Nlc3xlbnw.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Jhon Dow</h4>
            <p>
              Send Me Flowers Prom dress for a family lunch. First one since
              July. Such a great day seeing my parents, siblings, nephew and
              niece.
            </p>
            <small>General Manager</small>
          </div>
        </div>
        <div className="review-item">
          <div>
            <img
              src="https://i.ibb.co/0JVSn3y/photo-1497551060073-4c5ab6435f12-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-NXx8b-WFu-JTIw-Z2xhc3-Nlc3xlbnw.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Jhon Dow</h4>
            <p>
              Send Me Flowers Prom dress for a family lunch. First one since
              July. Such a great day seeing my parents, siblings, nephew and
              niece.
            </p>
            <small>General Manager</small>
          </div>
        </div>
        <div className="review-item">
          <div>
            <img
              src="https://i.ibb.co/0JVSn3y/photo-1497551060073-4c5ab6435f12-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-NXx8b-WFu-JTIw-Z2xhc3-Nlc3xlbnw.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Jhon Dow</h4>
            <p>
              Send Me Flowers Prom dress for a family lunch. First one since
              July. Such a great day seeing my parents, siblings, nephew and
              niece.
            </p>
            <small>General Manager</small>
          </div>
        </div>
        <div className="review-item">
          <div>
            <img
              src="https://i.ibb.co/0JVSn3y/photo-1497551060073-4c5ab6435f12-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-NXx8b-WFu-JTIw-Z2xhc3-Nlc3xlbnw.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Jhon Dow</h4>
            <p>
              Send Me Flowers Prom dress for a family lunch. First one since
              July. Such a great day seeing my parents, siblings, nephew and
              niece.
            </p>
            <small>General Manager</small>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Reviews;
