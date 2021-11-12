import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import ContactForm from "./Compo/ContactForm";
import ContactInfo from "./Compo/ContactInfo";

const ContactUs = () => {
  return (
    <>
      <NavigationBar />
      <section className="md:px-14 p-3 text-center my-4">
        <h4 className="text-2xl text-black font-bold mb-2 uppercase">
          Contact Us
        </h4>
        <p className="text-gray-600">
          If you need any help, please contact us or send us an email or message
          us at Messenger, WhatsApp . We are sure that you can receive our reply
          as soon as possible.
        </p>
      </section>
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUs;
