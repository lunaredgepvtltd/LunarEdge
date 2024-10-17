import React, { useState, useEffect} from "react";
import BgCareerContactPage from "../assets/BgCareerContactPage.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { API } from "../helper";

const PopupCareer = ({ togglePopup,jobId }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cv: null,
  });

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const [data, setData] = useState([]);

  const fetchVacancyDetails = async () => {
    try {
      const response = await fetch(API.getParticularVacancy.url, {
        method: API.getParticularVacancy.method,
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify({jobId})
      });
      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVacancyDetails();
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center z-50"
      data-aos="fade-down" // Apply AOS fade-in animation to the popup
    >
      {/* {console.log(data)} */}
      <div className="bg-white dark:bg-black shadow-lg w-[90%] md:w-[80%] lg:w-[90%] p-8 rounded-xl relative">
        {/* Close Button */}
        <button
          className="absolute text-red-500 top-2 right-4 text-3xl font-bold"
          onClick={togglePopup}
        >
          &times;
        </button>

        {/* Job Details */}
        <div className="md:flex justify-between">
          <div className="mb-8 md:w-[50%]">
            <h2 className="text-lg text-[#2e2e30] dark:text-white font-semibold">ON SITE</h2>

            {/* Rendering HTML content */}
            <h1
              className="text-3xl font-bold text-[#160962] dark:text-purple-400 mt-2"
              dangerouslySetInnerHTML={{ __html: data?.jobTitle }}
            />

            <div className="flex items-center mt-4 text-gray-600 dark:text-white">
              <span className="mr-2">&#x1F4BC;</span>
              <span dangerouslySetInnerHTML={{ __html: data?.experience }} />
              <span className="ml-4 mr-2">&#x1F4CD;</span>
              <span dangerouslySetInnerHTML={{ __html: data?.location }} />
            </div>

            <div className="mt-4 text-sm text-gray-700 dark:text-white">
              <p className="py-2">
                <strong>Key Responsibilities:</strong>
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.qualificationAndSkills,
                }}
              />
            </div>

            <div className="mt-4 text-sm text-gray-700 dark:text-white">
              <p className="py-2">
                <strong>Preferred Qualifications:</strong>
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.preferredQualifications,
                }}
              />
            </div>

            <div className="mt-4 text-sm text-gray-700 dark:text-white">
              <p className="py-2">
                <strong>What We Offer:</strong>
              </p>
              <div dangerouslySetInnerHTML={{ __html: data?.whatWeOffer }} />
            </div>
          </div>

          {/* Form */}
          <div className="md:w-[40%] bg-black dark:bg-white text-white p-6 rounded-xl">
            <div className="text-center mb-6">
              <img
                src={BgCareerContactPage}
                alt="Team"
                className="w-full mb-4"
              />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/2 p-3 bg-gray-900 dark:bg-white  border border-gray-500 rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-1/2 p-3 bg-gray-900 border dark:bg-white border-gray-500 rounded-lg focus:outline-none"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 border dark:bg-white border-gray-500 rounded-lg focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 border dark:bg-white border-gray-500 rounded-lg focus:outline-none"
              />
              <div className="p-4 md:py-8 border-dashed border-2 border-gray-500 dark:text-gray-700 rounded-lg text-center">
                <label htmlFor="cv" className="cursor-pointer block ">
                  <span className="text-gray-500  ">&#x1F4C4;</span> Upload your
                  CV
                </label>
                <input
                  type="file"
                  name="cv"
                  id="cv"
                  onChange={handleChange}
                  className="hidden"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCareer;
