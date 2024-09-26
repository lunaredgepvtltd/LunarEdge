import React from "react";
import callContactPage from "../assets/callContactPage.png";
import mailContactPage from "../assets/mailContactPage.png";
import locContactPage from "../assets/locContactPage.png";
import styles from "./ContactPage.module.css"; // Import CSS module


const ContactCard = ({ image, children }) => (
  <div className="w-[25%] bg-gradient-to-r from-pink-400 to-yellow-300 rounded-lg flex flex-col items-center justify-evenly px-5 shadow-lg">
    <img src={image} alt="" className="h-[90px] w-[90px]" />
    <div className="text-gray-800">{children}</div>
  </div>
);

function ContactUs() {
  return (
    <div className="bg-custom-gradient py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-normal mb-8">How we can help you?</h2>
        <h3 className="text-5xl font-normal mb-12">CONTACT US</h3>
        <div className=" h-[300px] flex flex-wrap justify-center gap-8 mx-auto ">
          <ContactCard image={callContactPage}>
            <p className="mb-5 text-center">0141-4512611 (Office)</p>
            <p className="text-center">+91-9829011076 (Sandeep Katariya)</p>
            <p className="text-center">+91-7760701155 (Sanjeev Ola)</p>
          </ContactCard>

          <ContactCard image={locContactPage}>
            <p className="text-center">
              203, Manglam, Signature Tower, Lal Kothi, Gandhi Nagar, Jaipur,
              Rajasthan - 302015
            </p>
          </ContactCard>

          <ContactCard image={mailContactPage}>
            <p className="text-center">info@lunaredge.in</p>
          </ContactCard>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
