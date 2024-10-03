import React from "react";
import callContactPage from "../assets/callContactPage.png";
import mailContactPage from "../assets/mailContactPage.png";
import locContactPage from "../assets/locContactPage.png";
import styles from "./ContactPage.module.css"; // Import CSS module
import MoonImage from "../assets/bgLandingPage.png";
import BgConTactUs from "../assets/BgContactUs.png";

const ContactCard = ({ image, children }) => (
  <div
    className="md:w-[25%] w-[90%] mx-auto bg-gradient-to-r from-[#a6a6a6] to-[#ffffff] rounded-lg flex flex-row md:flex-col items-center justify-between
   md:justify-evenly px-5 py-4 md:py-0  shadow-lg"
  >
    <img
      src={image}
      alt=""
      className="md:h-[90px] md:w-[90px] h-[45px] w-[45px]"
    />
    <div className="text-gray-800 md:w-auto w-[75%]">{children}</div>
  </div>
);

function ContactPage() {
  return (
    <div className="h-full w-full">
      <div
        className="w-full h-[700px] md:h-[780px] pt-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${MoonImage})`,
          zIndex: -1,
        }}
      >
        {/* Your other content goes here */}

        <div className="container z-10 mx-auto text-center mt-[5%] h-[90%] md:h-[100%] flex flex-col justify-evenly gap-5">
          <h2 className=" md:text-3xl text-2l font-lg mb-[1px] md:mb-4">
            How we can help you?
          </h2>
          <h3 className=" md:text-6xl text-2xl font-semibold mb-0 md:mb-12">
            CONTACT US
          </h3>

          <div className=" h-[300px]    flex-col  flex md:flex-row justify-center gap-8 md:gap-9 text-sm ">
            <ContactCard image={callContactPage}>
              <p className="md:mb-5 text-left md:text-center text-xs md:text-lg">
                0141-4512611 (Office)
              </p>
              <p className="text-left md:text-center text-xs md:text-[14px] whitespace-nowrap">
                +91-9829011076 (Sandeep Katariya)
              </p>
              <p className="text-left md:text-center text-xs md:text-[14px] pt-2">
                +91-7760701155 (Sanjeev Ola)
              </p>
            </ContactCard>

            <ContactCard image={locContactPage}>
              <p className="text-left md:text-center text-xs md:text-[14px]">
                203, Manglam, Signature Tower, Lal Kothi, Gandhi Nagar, Jaipur,
                Rajasthan - 302015
              </p>
            </ContactCard>

            <ContactCard image={mailContactPage}>
              <p className="text-left md:text-center text-xs md:text-lg">
                info@lunaredge.in
              </p>
            </ContactCard>
          </div>
        </div>
      </div>

      <div className=" h-full w-full bg-white z-10 mt-[10%] pb-[3%]">
        <h1 className=" text-lg text-black  text-center md:text-2xl lg:text-5xl uppercase font-normal pb-8">
          corporate office Address
        </h1>

        {/* Google Map Section */}

        <div className="z-10 w-full md:h-[300px] h-[300px] lg:h-[600px]  flex justify-center mb-5 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241201.8443352571!2d75.74948445094843!3d26.882945649020046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50072a7f755%3A0x19a18bdba8efd3cf!2sLunarEdge%20IT%20Services%20Private%20Limited!5e0!3m2!1sen!2sus!4v1630929534187!5m2!1sen!2sus"
            style={{
              width:
                window.innerWidth >= 1024
                  ? "75%"
                  : window.innerWidth >= 768
                  ? "80%"
                  : window.innerWidth >= 425
                  ? "50%"
                  : "70%",
              height:
                window.innerWidth >= 1024
                  ? "600px"
                  : window.innerWidth >= 768
                  ? "350px"
                  : window.innerWidth >= 425
                  ? "300px"
                  : "250px",
            }}
            loading="lazy"
            allowFullScreen
            // title="Company Location"
            className="rounded-lg shadow-md mx-4 "
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div
          className="  flex flex-col items-center"
          style={{
            backgroundImage: `url(${BgConTactUs})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-2 md:gap-5">
            {" "}
            <h1 className="hidden md:block text-xs w-[65%] mx-auto md:text-xl  text-center font-medium  text-black  p-4 lg:p-10 ">
              Thank you for your interest in LunarEdge’s services. Please fill
              the form below. This will enable us to route your request to the
              appropriate person to serve you better. Expected time of response
              should be within 24 hours.
            </h1>
            <h2 className="text-xl  md:text-3xl text-center text-black mb-8 tracking-wider font-bold">
              CONTACT US
            </h2>
            <div className="bg-gradient-to-r mb-4 from-[#ffffff] to-[#a6a6a6]  border-black border-2  rounded-[50px] p-5 h-auto md:h-[60%] w-[90%]  md:w-[50%] lg:w-[40%] mx-auto">
              <form className="space-y-[17px] md:space-y-4 mx-auto max-w-[100%] md:max-w-[85%] lg:max-w-[78%] ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500  placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-2 md:p-2  text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500  placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="p-2 text-sm md:p-2 border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 h:[100px] md:h-[150px] placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                ></textarea>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-center text-sm items-center bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white py-2 md:py-3 px-4 md:px-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
