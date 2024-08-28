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
import { AboutusPart } from "../components/AboutusPart.jsx";
import hawaMahal from "../assets/hawaMahal.png";
import ourJourney from "../assets/ourJourney.png";
import ourValues from "../assets/ourValues.png";

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

          <button
            class=" mx-auto bg-purple-950 text-white hover:bg-purple-800 md:p-4 p-2 rounded-xl"
            onClick={handleButton}
          >
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

      {/* First part About LunarEdge  */}

      <div className="border-2 border-[#dbd5ff]  rounded-3xl w-[95%] mx-auto">
        <AboutusPart
          title="WELCOME TO LUNAREDGE"
          headline="About LunarEdge"
          content1="Welcome to LunarEdge IT Services Private Limited At LunarEdge, we believe 
                  in transforming innovative ideas into reality. Founded with a vision to drive
                  smart innovation, our mission is to bridge the gap between technology and human potential,
                  empowering businesses to reach new heights."
          content2="Our tagline, “Smart Innovation Meets Infinity,” reflects our commitment to 
        endless possibilities and our pursuit of excellence in every project we undertake. Whether 
        it’s developing cutting-edge software solutions or providing strategic IT consulting, we 
        are dedicated to delivering results that exceed expectations."
          sideImage={hawaMahal}
        />
      </div>

      <div className="flex w-full h-[400px]">
        <div className="relative h-full w-[25%] mx-auto my-8 ">
          {" "}
          {/* Centering the component */}
          <img
            src={ourJourney}
            alt="Our Journey"
            className="w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-white z-20 p-8  mt-[25%]  rounded-3xl border-4 border-[#dbd5ff]">
            <p className="text-justify text-md mx-4">
              LunarEdge was founded with a clear mission: to generate value
              through technology. Our vision is to evolve into a dynamic IT
              services provider with proficiency spanning multiple industries.
              Our team consists of skilled professionals with diverse abilities
              and extensive experience, allowing us to deliver a broad spectrum
              of services customized to meet your business requirements.
            </p>
          </div>
        </div>

        <div className="relative h-[400px] w-[60%] mx-auto my-8 ">
          {" "}
          {/* Centering the component */}
          <img
            src={ourValues}
            alt="Our Journey"
            className="h-[65%] w-full z-10"
          />
          <div className="absolute inset-0 bg-white z-20 p-8  mt-[10%]  rounded-3xl border-4 border-[#dbd5ff]">
            <p className="text-justify text-md mx-4">
              Innovation: We are constantly exploring new ways to solve problems
              and create value. Integrity: We conduct our business with the
              highest level of ethics and transparency. Excellence: We strive
              for perfection in every project, delivering quality results.
              Collaboration: We work closely with our clients, fostering
              partnerships that drive success. Sustainability: We are committed
              to sustainable practices that benefit our community and the
              environment.
            </p>
          </div>
        </div>
      </div>

      {/* our vision part  */}
      <AboutusPart
        title="Our Mission"
        headline="Innovating for Success: Our Technology Mission"
        content1="LunarEdge is dedicated to revolutionizing the digital realm by
                offering state-of-the-art IT solutions that boost growth,
                streamline operations, and support sustainability for our
                clients. Our goal is to become the trusted ally for businesses
                navigating the complexities of the digital sphere."
        content2="Our focus at LunarEdge is to empower businesses through
                technology. By embracing innovation and harnessing advanced
                technologies such as HTML, CSS, JavaScript, Java, React,
                Node.js, Python, Android, iOS, Express, MongoDB, and AWS, we
                drive progress, efficiency, and sustainability for our clients.
                Through our tailor-made IT solutions and unwavering pursuit of
                excellence, we strive to be the driving force for positive
                transformations in the digital landscape."
        sideImage={ourVision}
      />

      {/* our mission part   */}
      <div className="xl:h-[700px] h-[600px] md:h-[400px] md:flex md:items-center">
        <div className="md:h-[450px] h-[600px] w-full md:flex md:justify-around  items-center px-3 md:px-0  ">
          <img
            src={ourMission}
            alt=""
            className="md:block hidden w-[26%] md:w-[28%] xl:h-full md:h-[75%]"
          />
          <div className="lg:w-[40%]  md:w-[46%] h-auto  flex flex-col md:gap-3 gap-2 lg:text-base md:text-sm text-xs">
            <span className="text-[#2b1999] flex gap-1 ">Our Vision </span>
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
