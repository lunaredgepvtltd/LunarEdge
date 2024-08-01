import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";

const ContactForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  // usestate for error message 
  const [msg, setMsg] = useState("");


  // handle button click
  const handleClick = async (data) => {
    try {
      // making API request
      const res = await fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const resData = await res.json();

      if (resData.success) {
        setMsg('Query Sent Successfully!')
        reset()
      } else {
        setMsg('Error Occured.Sent Query again!')
      }

    } catch (error) {
      setMsg('Error Occured.Sent Query again!')
    }
  };

  return (
    <div className="fixed top-10 md:top-0 m-2 inset-0 z-50 flex  h-auto md:h-full justify-center items-center bg-gray-500 bg-opacity-50 overflow-auto rounded-lg">
      <div className=" mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-[#585aa1] rounded-lg pr-7 pt-6">
        <div className="grid lg:grid-cols-2 items-center gap-8 md:gap-14 p-3 md:p-8 font-[sans-serif]">
          {/* left side of form */}
          <div>

            <div className="hidden md:block">
              <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
              <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                Have some big idea or brand to develop and need help? Then reach
                out we'd love to hear about your project and provide help.
              </p>
            </div>

            <ul className=" md:mt-12 space-y-3 md:space-y-8 mt-4">
              <li className="flex items-center">
                <AiOutlineMail className="h-[16px] w-[16px] text-white" />
                <a href="mailto:info@lunaredge.input" className="text-white text-sm ml-4">
                  info@lunaredge.input
                </a>
              </li>

              <li className="flex items-center">
                <FiPhoneCall className="h-[16px] w-[16px] text-white" />
                <a href="tel:9829011076" className="text-white text-sm ml-4">
                  <p> 9829011076 (Sandeep Katariya)</p>
                </a>
              </li>

              <li className="flex items-center">
                <FiPhoneCall className="h-[16px] w-[16px] text-white" />
                <a href="tel:7760701155" className="text-white text-sm ml-4">
                  <p> 7760701155 (Sanjeev Ola)</p>
                </a>
              </li>

              <li className="flex items-center">
                <CiLocationOn className="h-[20px] w-[20px] text-white" />
                <a href="#" className="text-white text-sm ml-4">
                  address-203, Manglam, Signature Tower, Lal Kothi, Gandhi Nagar, jaipur, Rajasthan
                </a>
              </li>
            </ul>
          </div>

          {/* right side of form */}
          <div className="relative">
            {/* close icon */}
            <div
              className="absolute -right-9 -top-10 text-2xl font-black cursor-pointer"
              onClick={onClose}
            >
              <RxCross1 />
            </div>

            {/* form container */}
            <div className="bg-gray-100 p-3 md:p-6 rounded-lg">
              <form
                className="mt-2 md:mt-8 space-y-4"
                onSubmit={handleSubmit(handleClick)}
              >
                {/* name */}
                <TextInput
                  name="name"
                  placeholder="Your Name"
                  type="text"
                  register={register("name", {
                    required: "name is required",
                    validate: {
                      maxLetters: value => {
                        const letterCount = value.trim().length;
                        return letterCount <= 50 || "Subject cannot exceed 50 letters";
                      },
                    },
                    
                  })}
                  error={errors?.name ? errors?.name?.message : ""}
                />

                {/* Mobile Number */}
                <TextInput
                  name="phoneNumber"
                  placeholder="Contact Number"
                  type="number"
                  register={register("phoneNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: "[0-9]{5}[-][0-9]{7}[-][0-9]{1}",
                      message: "Enter a valid number",
                    },
                  })}
                  error={errors?.phoneNumber ? errors?.phoneNumber?.message : ""}
                />

                {/* email */}
                <TextInput
                  name="email"
                  placeholder="email@example.com"
                  type="email"
                  register={register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email address. Please enter a valid email.",
                    }
                  })}
                  error={errors?.email ? errors?.email?.message : ""}
                />

                {/* subject */}
                <TextInput
                  name="subject"
                  placeholder="Subject"
                  type="text"
                  register={register("subject", {
                    validate: {
                      maxLetters: value => {
                        const letterCount = value.trim().length;
                        return letterCount <= 75 || "Subject cannot exceed 25 letters";
                      },
                    },
                  })}
                  error={errors?.subject ? errors?.subject?.message : ""}
                />

                {/* message content */}
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full rounded-lg px-2 md:px-4 text-gray-800 text-sm outline-[#06425f]"
                  {...register("message", {
                    validate: {
                      maxLetters: value => {
                        const letterCount = value.trim().length;
                        return letterCount <= 1000 || "Message cannot exceed 1000 letters";
                      },
                    },
                  })}
                ></textarea>
                {errors.message && <span style={{ color: 'red' }}>{errors.message.message}</span>}


                {/* submit button */}
                <button
                  type="submit"
                  className="text-white bg-[#585aa1] hover:bg-[#2b5c77e2] tracking-wide rounded-lg text-sm px-4 py-2 md:py-3 flex items-center justify-center w-full md:mt-6"
                >
                  Send Message
                </button>

                {/* close button */}
                <div className="text-right">
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-[#1c4f6e] hover:underline"
                  >
                    Close
                  </button>
                </div>

                {/* displaying  message */}
                {msg && (
                  <span className={`text-sm mt-0.5 ${msg === 'Error Occured.Sent Query again!' ? 'text-[#f64949fe]' : 'text-green-500'}`}>
                    {msg}
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
