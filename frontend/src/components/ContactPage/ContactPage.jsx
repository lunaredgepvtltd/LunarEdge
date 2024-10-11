import React, { useState } from "react";
import callContactPage from "./callContactPage.png";
import mailContactPage from "./mailContactPage.png";
import locContactPage from "./locContactPage.png";
import styles from "./ContactPage.module.css"; // Import CSS module
import { useForm } from "react-hook-form";
import { API } from "../../helper";
import { toast } from "react-toastify";
import MoonImage from "./bgLandingPage.png";

import BgConTactUs from "./BgContactUs.png";



const ContactCard = ({ image, children }) => (
  <div className="md:w-[24%] w-[90%] mx-auto bg-gradient-to-r from-[#a6a6a6] to-[#ffffff] dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#737373]  rounded-3xl flex flex-row md:flex-col items-center justify-between md:justify-evenly px-5 py-4 md:py-0  shadow-lg">
    <img
      src={image}
      alt=""
      className="md:h-[90px] md:w-[90px] h-[45px] w-[45px] filter dark:invert "
    />
    <div className="text-gray-800 dark:text-white  md:w-auto w-[75%]">
      {children}
    </div>
  </div>
);

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [msg, setMsg] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await fetch(API.register.url, {
        method: API.register.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (resData.success) {
        toast.success(
          "Your query is sent successfully. W'll soon reach out to you!"
        );
        reset();
      }

      if (resData.error) {
        console.log(resData.message);
        toast.error("Error occured! please try again.");
      }
    } catch (error) {
      console.log(error);
      setMsg("Error Occurred. Please try again!");
    }

    setTimeout(() => {
      setMsg("");
    }, 3000);
  };

  return (
    
    <div className="h-full w-full dark:bg-black">
      <div
        className="w-full h-[700px] md:h-[780px] pt-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${MoonImage})`,
          zIndex: -1,
        }}
      >
        <div className="container z-10 mx-auto text-center mt-[5%] h-[90%] md:h-[100%] flex flex-col justify-evenly gap-5">
          <h2 className=" md:text-3xl text-2l font-lg mb-[1px] md:mb-4">
            How we can help you?
          </h2>
          <h3 className=" md:text-6xl text-2xl font-normal mb-0 md:mb-12">
            CONTACT US
          </h3>

          <div className=" h-[350px] flex-col  flex md:flex-row justify-center gap-8 md:gap-9 text-sm  ">
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

      <div className=" h-full w-full bg-white dark:bg-black z-10 mt-[10%] pb-[3%]">
        <h1 className=" text-lg text-black  dark:text-white  text-center md:text-2xl lg:text-5xl uppercase font-normal pb-8">
          corporate office Address
        </h1>

        <div className="z-10 w-full md:h-[300px] h-[300px] lg:h-[600px] flex justify-center mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241201.8443352571!2d75.74948445094843!3d26.882945649020046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50072a7f755%3A0x19a18bdba8efd3cf!2sLunarEdge%20IT%20Services%20Private%20Limited!5e0!3m2!1sen!2sus!4v1630929534187!5m2!1sen!2sus"
            style={{
              width:
                window.innerWidth >= 1024
                  ? "75%"
                  : window.innerWidth >= 768
                  ? "80%"
                  : "70%",
              height: window.innerWidth >= 1024 ? "600px" : "300px",
            }}
            loading="lazy"
            allowFullScreen
            className="rounded-lg shadow-md mx-4"
          ></iframe>
        </div>

        <div className="w-full h-full ">
          <div
            className="flex flex-col items-center  w-full h-full min-h-[80vh] "
            style={{
              backgroundImage: `url(${BgConTactUs})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // height:"80%"
            }}
          >
            <div className="text-center flex flex-col items-center justify-center px-4">
              <p className="text-center text-sm md:text-2xl font-normal mb-[3%] pt-[5%] dark:text-white w-[80%] mx-auto">
                Thank you for your interest in LunarEdge’s services. Please fill
                the form below. This will enable us to route your request to the
                approriate person to serve you better. Expected time of response
                should be within 24 hours.{" "}
              </p>
              {/* <h3 className="text-2xl md:text-4xl font-normal mb-6 dark:text-white">
                {" "}
                Contact us
              </h3> */}
            </div>

            <div className="bg-gradient-to-r mb-4 from-[#ffffff] to-[#a6a6a6] dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#737373] border-black border-2 rounded-[50px] p-10 h-auto md:h-[60%] w-[90%] md:w-[50%] lg:w-[40%] mx-auto">
              <form
                className="space-y-[17px] md:space-y-4 mx-auto max-w-[100%] md:max-w-[85%] lg:max-w-[78%]"
                onSubmit={handleSubmit(onSubmit)}
              >
                 <h3 className="text-2xl md:text-4xl font-normal uppercase text-center mb-10 dark:text-white">
                {" "}
                Contact us
              </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.firstName && (
                      <span className="text-sm text-red-500">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 items-center justify-center">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && (
                      <span className="text-sm text-red-500">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 items-center justify-center">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phoneNumber && (
                      <span className="text-sm text-red-500">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1 items-center justify-center">
                  <textarea
                    placeholder="Your Message"
                    className="p-2 text-sm md:p-4 border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
                    rows={4}
                    {...register("message", {
                      required: "Please leave a message!",
                    })}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <div className="text-center mt-5">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white py-2 px-8 rounded-2xl md:rounded-3xl text-sm md:text-lg transition duration-300 hover:bg-gray-700"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {msg && (
                <div className="text-center text-red-500 mt-3">{msg}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
