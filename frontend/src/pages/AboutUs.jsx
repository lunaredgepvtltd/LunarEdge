import React, { useState } from "react";
import bgAboutus from "../assets/bgAboutus.png";
import "../App.css";
import ourVision from "../assets/ourVision.png";
import ourMission from "../assets/ourMission.png";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import "../dynamic.scss";
import "../pages/Header.jsx";
import ContactForm from "./ContactForm.jsx";

export const AboutUs = () => {
  const [showForm, setShowForm] = useState(false);
  const handleButton = () => {
    setShowForm(!showForm);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <div className="h-full w-full bg-gray-100">
      <div className="md:h-[1050px] h-[740px] flex flex-col items-center justify-evenly  ">
        {/* center text content container    */}
        <div className="flex flex-col gap-6 opacity-70 xl:pt-10 2xl:pt-20">
          <span className="md:text-xl text-sm mx-auto bg-gray-700 p-1 rounded-md text-white">
            LUNAREDGE
          </span>
          <div className="xl:text-3xl md:text-2xl sm:text-xl flex flex-col items-center md:gap-3 gap-0">
            <span className="hidden md:block ">
              <h1>
                “Dedicated To Transforming Your Digital <br />
              </h1>
              <h1 className="text-center"> Vision Into Reality.”</h1>
            </span>
            <span className="block md:hidden">
              <h1>
                “Dedicated To Transforming Your
                <br />
              </h1>
              <h1 className="text-center">Digital Vision Into Reality.”</h1>
            </span>
          </div>

          <button class=" mx-auto bg-purple-950 text-white hover:bg-purple-800 md:p-4 p-2 rounded-xl" onClick={handleButton}>
            Get Connect
          </button>
        </div>

        {/* circular images div */}
        <div className="md:h-[35%] h-[20%] md:w-[69%] w-[80%] ">
          <img
            src={bgAboutus}
            alt=""
            className=" xl:h-[86%] 2xl:h-[100%] w-[100%]"
          />
        </div>
      </div>

      {/* our vision part  */}
      <div className="2xl:h-[600px] lg:h-[500px] md:h-[400px] lg:flex items-center">
        <div className="md:h-[450px] h-[530px] w-full md:flex md:justify-around px-3 md:px-0 ">
          <div className="lg:w-[40%] md:w-[46%] flex flex-col md:gap-4 gap-2 lg:text-base md:text-sm text-xs">
            <span className="text-[#2b1999]   flex items-center gap-1  ">
              Our Mission 
            </span>
            <h3 className="xl:text-3xl md:text-2xl text-sm xl:font-semibold">
              Innovating for Success: Our Technology Mission
            </h3>
            <div className="flex flex-col gap-6 pr-4 h-[91%] text-justify ">
              {" "}
              <p>
                LunarEdge is dedicated to revolutionizing the digital realm by
                offering state-of-the-art IT solutions that boost growth,
                streamline operations, and support sustainability for our
                clients. Our goal is to become the trusted ally for businesses
                navigating the complexities of the digital sphere.
              </p>
              <p className="hidden xl:block">
                Our focus at LunarEdge is to empower businesses through
                technology. By embracing innovation and harnessing advanced
                technologies such as HTML, CSS, JavaScript, Java, React,
                Node.js, Python, Android, iOS, Express, MongoDB, and AWS, we
                drive progress, efficiency, and sustainability for our clients.
                Through our tailor-made IT solutions and unwavering pursuit of
                excellence, we strive to be the driving force for positive
                transformations in the digital landscape.
              </p>
            </div>
          </div>
          <img
            src={ourVision}
            alt=""
            className="sm:w-[26%] md:h-[75%] w-[75%] md:w-[28%] xl:h-auto mx-auto md:mx-0 md:mt-0 mt-8"
          />
        </div>
      </div>
      {/* our mission part   */}
      <div className="xl:h-[700px] h-[600px] md:h-[400px] md:flex md:items-center">
        <div className="md:h-[450px] h-[600px] w-full md:flex md:justify-around  items-center px-3 md:px-0  ">
          <img
            src={ourMission}
            alt=""
            className="md:block hidden w-[26%] md:w-[28%] xl:h-full md:h-[75%]"
          />
          <div className="lg:w-[40%]  md:w-[46%] h-auto  flex flex-col md:gap-3 gap-2 lg:text-base md:text-sm text-xs">
            <span className="text-[#2b1999] flex gap-1 ">Our Vision   </span>
            <p className="xl:text-3xl md:text-2xl text-sm xl:font-semibold">
              Driving Innovation: Our Vision
            </p>
            <p className="w-[90%] hidden xl:block text-justify">
              At LunarEdge, we aspire to lead the way in digital transformation
              and innovation worldwide. Our goal is to create a future where
              businesses, regardless of their size, can access the tools and
              knowledge needed to succeed in an ever-evolving digital landscape.
            </p>
            <div className="h-[200px] 2xl:w-[70%] xl:w-[82%] w-[100%] flex flex-col gap-3 md:p-3 p-0 lg:text-sm text-xs text-justify">
              <div className="flex gap-5  h-[41%] p-2">
                <img src={m1} alt=" " />
                <p>
                  Network Infrastructure Solutions Build a reliable and secure
                  network infrastructure that supports your business operations
                  enables seamless.
                </p>
              </div>
              <div className="flex  gap-5 h-[41%] p-2">
                <img src={m2} alt=" " />
                <p>
                  Managed It Services Focus on your core business activities
                  while we take care of your IT needs with our managed IT
                  services.
                </p>
              </div>
            </div>
          </div>
          <img
            src={ourMission}
            alt=""
            className="block md:hidden w-[75%] md:w-[28%] xl:h-full md:h-[75%] mx-auto md:mx-0 md:mt-0 mt-6"
          />
        </div>
      </div>
      {showForm && <ContactForm onClose={closeForm} />}
    </div>
  );
};
