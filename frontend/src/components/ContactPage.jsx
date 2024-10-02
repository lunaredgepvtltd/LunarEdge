import React from "react";
import callContactPage from "../assets/callContactPage.png";
import mailContactPage from "../assets/mailContactPage.png";
import locContactPage from "../assets/locContactPage.png";
import styles from "./ContactPage.module.css"; // Import CSS module
import MoonImage from "../assets/BgServices1.png";
import BgConTactUs from "../assets/BgContactUs.png";

const ContactCard = ({ image, children }) => (
  <div className="md:w-[25%] w-[95%] mx-auto bg-gradient-to-r from-[#a6a6a6] to-[#ffffff] rounded-lg flex flex-row md:flex-col items-center justify-between md:justify-evenly px-5 py-4 md:py-0  shadow-lg">
    <img src={image} alt="" className="md:h-[90px] md:w-[90px] h-[45px] w-[45px]" />
    <div className="text-gray-800 md:w-auto w-[70%]">{children}</div>
  </div>
);

function ContactPage() {
  return (
    <>
      <div className=" w-full h-screen py-16 ">
        <img
          src={MoonImage}
          alt="Half Moon"
          className="absolute top-0 left-0 w-full h-auto mx-auto"
          style={{
            zIndex: -1,
          }}
        />
        <div className="container mx-auto text-center mt-[5%] flex flex-col gap-5">
          
          <h2 className="text-xl md:text-3xl font-normal mb-8">How we can help you?</h2>
          <h3 className="text-xl md:text-5xl font-normal mb-12">CONTACT US</h3>

          <div className=" h-[300px]   flex-col  flex md:flex-row justify-center gap-8 md:gap-12 text-sm ">
            <ContactCard image={callContactPage}>
              <p className="md:mb-5 text-left md:text-center text-xs">0141-4512611 (Office)</p>
              <p className="text-left md:text-center text-xs">+91-9829011076 (Sandeep Katariya)</p>
              <p className="text-left md:text-center text-xs">+91-7760701155 (Sanjeev Ola)</p>
            </ContactCard>

            <ContactCard image={locContactPage}>
              <p className="text-left md:text-center text-xs">
                203, Manglam, Signature Tower, Lal Kothi, Gandhi Nagar, Jaipur,
                Rajasthan - 302015
              </p>
            </ContactCard>

            <ContactCard image={mailContactPage}>
              <p className="text-left md:text-center text-xs">info@lunaredge.in</p>
            </ContactCard>
          </div>
        </div>
        {/* Section with gradient background and heading */}
      </div>

      <div className="bg-white py-8">
        <div className=" text-black p-10 text-center ">
          <h1 className="text-6xl uppercase font-normal tracking-wide">
            corporate office Address
          </h1>
        </div>

        {/* Google Map Section */}

        <div className="w-full h-[600px] mb-[200px] flex justify-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241201.8443352571!2d75.74948445094843!3d26.882945649020046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50072a7f755%3A0x19a18bdba8efd3cf!2sLunarEdge%20IT%20Services%20Private%20Limited!5e0!3m2!1sen!2sus!4v1630929534187!5m2!1sen!2sus"
            width="70%"
            height="600"
            loading="lazy"
            allowFullScreen
            // title="Company Location"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col items-center " 
        
        style={{
          backgroundImage: `url(${BgConTactUs})`, // Set background image here
          backgroundSize: "cover", // Adjust background size
          backgroundPosition: "center", // Center the background
        }}>
          <h1 className="text-3xl text-center font-normal text-black mb-5 p-10 ">
            Thank you for your interest in LunarEdge’s services. Please fill the
            form below. This will enable us to route your request to the
            appropriate person to serve you better. Expected time of response
            should be within 24 hours.
          </h1>
          <h2 className="text-3xl text-black mb-8 tracking-wider font-normal">
            CONTACT US
          </h2>

          <div className="bg-gradient-to-r from-[#ffffff] to-[#a6a6a6] border border-black border-4  rounded-[50px] p-[40px] h-[60%] w-[50%]">
            <form className="space-y-[50px] mx-auto max-w-[78%] mt-10">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded-3xl w-full placeholder:text-black  placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded-3xl w-full placeholder:text-black  placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 border rounded-3xl w-full placeholder:text-black  placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  className="p-3 border rounded-3xl w-full placeholder:text-black  placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Organization Name"
                  className="p-3 border rounded-3xl w-full placeholder:text-black placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 border rounded-3xl w-full placeholder:text-black  placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="p-3 border rounded-3xl w-full placeholder:text-black  h-[150px] placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-center  items-center bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
