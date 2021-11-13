import React from "react";

const ContactInfo = () => {
  return (
    <section className="md:px-14 p-3">
      <div className="grid sm:grid-cols-2 gap-5 my-2 items-baseline md:grid-cols-3 grid-cols-1">
        <div className="border px-5">
          <div className="my-3 my-4">
            <span className="text-black font-bold text-sm">Phone:</span>
            <h2 className="text-3xl font-light">+88 0155*******</h2>
          </div>
          <div className="my-5">
            <span className="pb-4 inline-block text-black font-bold text-sm">
              Whatsapp (Call):
            </span>
            <h2 className="text-sm">+88 0155*******</h2>
            <h2 className="text-sm">+88 0155*******</h2>
          </div>
          <div className="my-5">
            <span className="pb-4 inline-block text-black font-bold text-sm">
              Whatsapp (Text):
            </span>
            <h2 className="text-sm">+88 0155*******</h2>
          </div>
        </div>
        <div className="border p-4">
          <span className="pb-4 inline-block text-black font-bold text-sm">
            Address
          </span>
          <p className="pb-2 text-sm text-gray-500">
            Sadek Tower, 111th floor, 16-17, Chiriakhana Main Road, Mirpur 21,
            Dhaka-1216
          </p>
        </div>
        <div className="border p-4">
          <span className="pb-4 inline-block text-black font-bold text-sm">
            Email
          </span>
          <p className="text-gray-500 text-sm pb-8">glassinfo@shop.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
