import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import computer from "../assets/computer.json";
import Offer from "../components/Offer";
import robot from "../assets/robot.mp4";
import robotreverse from "../assets/robotReverse.mp4";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import { IoLogoHtml5 } from "react-icons/io5";
import TechBox from "../components/TechBox";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";


const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleButton = () => {
    setShowForm(true);
  };

  // fetching user

  const { user } = useSelector((state) => state.user);
  console.log(typeof (user))

  const [text, setText] = useState("");
  const phrase = "LunarEdge";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= phrase.length) {
        setText(phrase.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust typing speed here (200ms per character)

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div className="w-full h-auto">

      {showForm && <ContactForm onClose={closeForm} />}
      
      {/* first-part */}
      {/* <div className="w-full h-[1000px]  md:flex justify-around items-center bg-blue-100">  */}
      <div className="w-full h-[700px] md:h-[1000px] p-6 md:p-0 flex justify-center md:justify-around items-center bg-blue-100">
        {/* left content */}
        <div className="flex flex-col  gap-6 md:w-96 md:ml-72 text-center">

          <p className=" text-5xl md:text-7xl font-serif ">{text}</p>

          <p className=" text-md text-[#424141]">
            Welcome to Lunaredge Private Limited, your partner in digital transformation. We specialize in delivering customized IT solutions that drive business growth and efficiency.we combine cutting-edge technology with deep industry expertise to meet your unique needs
          </p>

          {/* displaying button if user doesn't exist  */}

          {(<div className=" mt-10 md:mt-24">
            <button
              className="bg-black rounded-full p-3 text-white md:text-md text-sm hover:bg-gray-600 transition-all duration-300"
              onClick={handleButton}
            >
              Get connect with us
            </button>
          </div>)}
          
        </div>

        {/* right gif */}
        <div className="hidden md:flex justify-end items-end ml-40 mt-20">
          <Lottie animationData={computer} />
        </div>
      </div>

      {/* second-part */}
      <div className="w-full h-full">  
        <div className="w-full text-center pt-28">
          <div className="flex justify-between">
            <video
              className="main-video resource-retina hidden md:block"
              src={robotreverse}
              type="video/mp4"
              width="408"
              height="408"
              loop={true}
              autoPlay={true}
              muted={true}
              playsInline={true}
            ></video>
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl font-medium">Services We Offer</h1>
              <p className="text-lg text-slate-500 my-3 py-2">
                LunarEdge is the perfect choice for any buisness looking to
                digitize its operations. We offers a wide range of on time{" "}
                <br></br> and cost effective services that will help solve your
                complex problems with IT solutions.
              </p>
            </div>
            <video
              className="main-video resource-retina hidden md:block"
              src={robot}
              type="video/mp4"
              width="408"
              height="408"
              loop={true}
              autoPlay={true}
              muted={true}
              playsInline={true}
            ></video>
          </div>
        </div>

        {/* what we offers boxes */}
         <div className="  md:flex justify-center items-center">
          <div className="grid grid-cols-1 grid-col-9 md:grid-cols-3 md:grid-rows-3 gap-4 p-3 md:p-0">
            <Offer
              service={"Mobile App Development"}
              content={
                "Creating intuitive mobile applications for iOS and Android platforms that deliver seamless user experiences."
              }
            />
            <Offer
              service={"Web Development"}
              content={
                "Crafting engaging and user-friendly websites that enhance your online presence and drive customer engagement."
              }
            />
            <Offer
              service={"Game Development"}
              content={
                "Immerse your audience in captivating virtual worlds with Lunaredge Pvt. Ltd. game development expertise."
              }
            />
            <Offer
              service={"IT Consulting"}
              content={
                "Expert guidance and strategic advice to optimize your IT infrastructure and achieve operational excellence."
              }
            />
            <Offer
              service={"Cloud Solutions"}
              content={
                "Harnessing the power of cloud technology to improve scalability, security, and efficiency in your business operations."
              }
            />
            <Offer
              service={"Cybersecurity Services"}
              content={
                "Protecting your digital assets with robust cybersecurity measures and proactive threat detection."
              }
            />
            <Offer
              service={"Banking and Financial Services"}
              content={
                "Providing tailored IT solutions for banking and financial institutions, including core banking systems, loan management system, mobile banking apps."
              }
            />
            <Offer
              service={"Ai and Machine Learning Solutions"}
              content={
                "Harness the power of artificial intelligence and machine learning with Lunaredge Pvt. Ltd. Our advanced AI solutions are designed to revolutionize."
              }
            />
            <Offer
              service={"Agriculture Technology Solutions"}
              content={
                "Innovating agriculture processes with smart technology solutions such as precision farming, crop monitoring systems, and agricultural data analytics."
              }
            />
          </div>
        </div>
      </div> 

       {/* third part   */}

      <div className="flex-col p-5 md:p-0">
      <p className=" font-medium text-center text-2xl md:text-5xl mt-14 md:mt-[150px]">
            Empowering Technologies We Use
          </p>
        <div>
          <p className=" text-sm md:text-xl text-center mt-7 mg:mt-11 text-[#424141]">
            Explore the cutting-edge technologies driving our solutions. From AI
            and cloud computing to cybersecurity,<br></br> we harness the latest tools to
            deliver exceptional results.
          </p>
        </div>
      </div>

      <div className="md:flex justify-between items-center p-4">
        <div className=" shadow-2xl rounded-xl border-black bg-[#195269] md:ml-[10%] md:mt-[8%] md:w-[30%] grid grid-rows-4 gap-2 md:gap-5 grid-cols-3 p-3 md:p-6">
          <TechBox
            name={"HTML"}
            logo={<IoLogoHtml5 className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"CSS"}
            logo={<FaCss3Alt className=" h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"JS"}
            logo={<RiJavascriptFill className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"JAVA"}
            logo={<FaJava className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"REACT"}
            logo={<FaReact className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"NODE JS"}
            logo={<FaNodeJs className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"PYTHON"}
            logo={<FaPython className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"ANDROID"}
            logo={<IoLogoAndroid className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"APPLE"}
            logo={<FaApple className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"EXPRESS"}
            logo={<SiExpress className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"MONGODB"}
            logo={<SiMongodb className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
          <TechBox
            name={"AWS"}
            logo={<FaAws className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />}
          />
        </div>

        <div className="w-[32%] h-[32%] mr-[8%] hidden md:block">
          <Lottie animationData={computer} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
