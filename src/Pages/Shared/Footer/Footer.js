import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleUp,
  faChevronCircleUp,
  faChevronUp,
  faEnvelope,
  faLongArrowAltUp,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import PaymentBrand from "../../../images/brand/pay-with_1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-14 text-white md:p-12 px-4 font-serif">
      <div className="fixed bottom-0 sm:right-14 right-2">
        <a href="#">
          <button className="px-4 py-3 bg-red-600">
            <FontAwesomeIcon icon={faLongArrowAltUp} size="1x" />
          </button>
        </a>
      </div>
      <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between md:px-4 md:gap-6 items-baseline pb-10">
        <div>
          <h4 className="mb-4 text-xl font-semibold text-white">Find us</h4>
          <FontAwesomeIcon icon={faEnvelope} />
          <span> sales@glassshop.com.bd</span>
          <div className="flex gap-2 items-center my-3">
            <FontAwesomeIcon icon={faPhoneVolume} />
            <div>
              <p> +880 179****</p>
              <p> +880 179****</p>
            </div>
          </div>
          <div>
            <i className="mr-3 cursor-pointer">
              <FontAwesomeIcon icon={faFacebook} />
            </i>
            <i className="mr-3 cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} />
            </i>
            <i className="mr-3 cursor-pointer">
              <FontAwesomeIcon icon={faYoutube} />
            </i>
            <i className="mr-3 cursor-pointer">
              <FontAwesomeIcon icon={faPinterest} />
            </i>
          </div>
        </div>
        <div className="col-span-2 flex flex-wrap items-baseline md:justify-around justify-between">
          <div>
            <h4 className="mb-4 text-xl font-semibold text-white">
              Categories
            </h4>
            <ul className="ps-0 list-unstyled">
              <li>Men</li>
              <li>Women</li>
              <li>New Arrivals</li>
              <li>Sale</li>
            </ul>
          </div>
          <div className="information">
            <h4 className="text-xl font-semibold text-white mb-2">
              Information
            </h4>
            <ul className="ps-0 list-unstyled">
              <li>Privacy Policy</li>
              <li>Latest News</li>
              <li>Supports</li>
              <li>Career</li>
              <li>Events</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="helpfulLinks">
            <h4 className="text-xl font-semibold text-white mb-2">
              Quick Links
            </h4>
            <ul className="ps-0 list-unstyled">
              <li>Services</li>
              <li>Latest News</li>
              <li>Supports</li>
              <li>Tearm & Condition</li>
              <li>Events</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
        <div>
          <img src={PaymentBrand} alt="payment-brand" />
        </div>
      </div>
      <div className="border-t border-dashed pt-2 text-center">
        <small>
          2019 &copy; corportaionLtd All Right reserved ; Design by{" "}
          <span className="text-red-400 cursor-pointer">Pervej</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
