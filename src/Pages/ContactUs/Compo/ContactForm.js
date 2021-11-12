import React from "react";

const ContactForm = () => {
  return (
    <section className="md:14 p-3 mb-14 mt-6">
      <div className="my-12 text-center">
        <h3 className="text-2xl text-black font-bold mb-2 uppercase">
          Get in Touch
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-5 items-center gap-10 md:grid-cols-3">
        <div>
          <img
            src="https://image.freepik.com/free-vector/flat-design-call-center-concept_52683-13036.jpg"
            alt=""
          />
        </div>
        <div className="col-span-2 p-6">
          <div className="mb-2">
            <label className="block text-left font-semibold mb-2">
              Full Name:
            </label>
            <input
              className="py-3 px-2 w-full border-b focus:outline-none border-black"
              type="text"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-2">
            <label className="block text-left font-semibold mb-2">Email:</label>
            <input
              className="py-3 px-2 w-full border-b focus:outline-none border-black"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-2">
            <label className="block text-left font-semibold mb-2">Phone:</label>
            <input
              className="py-3 px-2 w-full border-b focus:outline-none border-black"
              type="number"
              placeholder="Enter phone no."
            />
          </div>
          <div className="mb-2">
            <label className="block text-left font-semibold  mb-2">
              Message:
            </label>
            <textarea
              className="w-full border-b focus:outline-none border-black px-2"
              rows="5"
              placeholder="here.."
            ></textarea>
          </div>
          <button className="inline-block py-2 px-5 transition duration-500 ease-in-out bg-gray-700 rounded hover:bg-black border hover:border-white text-white uppercase">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
