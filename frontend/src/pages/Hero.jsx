import React, { useEffect, useState } from "react";
import service_box from "../assets/service_box.gif";
import service_boxr from "../assets/service_boxr.gif";
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
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import maleImg from "../assets/male.png";
import employmoon from "../assets/employmoon.png";
import textimage from "../assets/textimage.png";
import moon from "../assets/moon.png";
import "../App.css";
import { ServiceBox } from "../components/ServiceBox";
import bgCyber from "../assets/bgCyber.png";
import bgServicePart from "../assets/bgServicePart.png";
import bgCloud from "../assets/bgCloud.png";
import bgHardware from "../assets/bgHardware.png";
import bgApp from "../assets/bgApp.png";
import bgGame from "../assets/bgGame.png";
import bgConsulting from "../assets/bgConsulting.png";
import bgAi from "../assets/bgAi.png";
import bgWeb from "../assets/bgWeb.png";
import bgBank from "../assets/bgBank.png";

const Hero = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767 });

  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // offers Object
  const offers = [
    {
      bgimg: bgWeb,
      service: "Web Development",
      content:
        "Our web development services focus on creating engaging, user-friendly websites that enhance your online presence. We design and develop responsive sites that drive customer engagement and deliver a seamless user experience.",
    },
    {
      bgimg: bgApp,
      service: "App Development",
      content:
        "Our app development services are designed to create intuitive, high-performance applications that meet your specific requirements. We handle the entire development lifecycle, from design and coding to testing and deployment.",
    },
    {
      bgimg: bgGame,
      service: "Game Development",
      content:
        "Our game development services encompass the entire process from ideation to launch. We create immersive, interactive experiences that captivate players and provide exceptional gameplay, tailored to meet your vision and market demands.",
    },
    {
      bgimg: bgConsulting,
      service: "IT Consulting",
      content:
        "Our IT consulting services provide expert guidance on optimizing your technology strategy. We analyze your current systems, identify opportunities for improvement, and offer strategic recommendations to enhance efficiency and drive growth.",
    },
    {
      bgimg: bgCloud,
      service: "Cloud Solutions",
      content:
        "We specialize in delivering robust cloud solutions that enhance your business’s scalability and flexibility. Our services include cloud migration, infrastructure management, and optimization, ensuring your systems are secure, reliable, and cost-effective.",
    },
    {
      bgimg: bgCyber,
      service: "Security Services",
      content:
        "Our cybersecurity services are designed to protect your digital assets from evolving threats. We provide comprehensive security assessments, threat monitoring, and incident response strategies to safeguard your organization’s data and maintain compliance.",
    },
    {
      bgimg: bgBank,
      service: " Banking Solutions",
      content:
        "We deliver specialized solutions for the banking and financial sectors, focusing on enhancing operational efficiency and regulatory compliance. Our services include software development, system integration, and data management tailored to the unique needs of the financial industry.",
    },
    {
      bgimg: bgAi,
      service: "AI & ML Solutions",
      content:
        "Our AI and machine learning solutions leverage advanced technologies to drive innovation and optimize business processes. We develop custom algorithms and models that provide actionable insights, automate tasks, and enhance decision-making capabilities.",
    },
    {
      bgimg: bgHardware,
      service: "Hardware Solutions",
      content:
        "Our hardware services focus on delivering reliable and high-performance equipment tailored to your business needs. We provide a range of hardware options, networking devices, and peripherals. Our experts ensure seamless integration and ongoing support to optimize your technology infrastructure.",
    },
  ];
  // technical skill stack

  const techStack = [
    {
      name: "HTML",
      logo: (
        <IoLogoHtml5 className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />
      ),
    },
    {
      name: "CSS",
      logo: (
        <FaCss3Alt className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />
      ),
    },
    {
      name: "JS",
      logo: (
        <RiJavascriptFill className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />
      ),
    },
    {
      name: "JAVA",
      logo: <FaJava className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />,
    },
    {
      name: "REACT",
      logo: <FaReact className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />,
    },
    {
      name: "NODE JS",
      logo: (
        <FaNodeJs className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />
      ),
    },
    {
      name: "PYTHON",
      logo: (
        <FaPython className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />
      ),
    },
    {
      name: "ANDROID",
      logo: (
        <IoLogoAndroid className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />
      ),
    },
    {
      name: "IOS",
      logo: <FaApple className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />,
    },
    {
      name: "EXPRESS",
      logo: (
        <SiExpress className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />
      ),
    },
    {
      name: "MONGODB",
      logo: (
        <SiMongodb className="h-[70px] w-[60px]  md:w-[130px] md:h-[100px]" />
      ),
    },
    {
      name: "AWS",
      logo: <FaAws className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" />,
    },
  ];

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

  return (
    <div className="w-full h-auto">
      {showForm && <ContactForm onClose={closeForm} />}

      {/* first-part */}

      <div
        className="w-full 2xl:h-[910px] xl:h-[750px] h-[680px] md:p-0 flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${employmoon})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* text image for big devices --- left-side  */}
        <div className="hidden lg:block md:w-[40%] relative">
          <img src={textimage} />
          <div className=" hidden md:block absolute top-[42%] left-[31%]  h-full w-full">
            <img src={moon} className="w-[12%] h-[16%] rotate-continuous" />
          </div>
        </div>

        {/* right-side for small and medium devices */}
        <div className=" w-[80%] h-[65%] md:w-[50%] items-center relative">
          {/* swipe-down button 
          <div className="mouse hidden md:block  top-[50%] bottom-4 left-[0%]">
          
          </div> */}
          {/* for small device          */}
          <div className="h-auto lg:hidden flex flex-col gap-6 justify-around items-center md:mt-[20px]">
            <div className="w-[80%] relative">
              <img src={textimage} />
              <div className=" md:hidden absolute top-[42%] left-[31%]  h-auto w-auto">
                <img
                  src={moon}
                  className="w-[18%] lg:w-[12%] h-[16%] rotate-continuous"
                />
              </div>
            </div>
            {/* Contact Us */}

            <h2 className="text-justify text-md mb-4">
              Welcome to LunarEdge, your partner in digital transformation. We
              specialize in delivering customized IT solutions that drive
              business growth and efficiency.
            </h2>

            <button
              className="  rounded-full  py-4 px-8 text-md bg-[#703299] border border-[#703299] text-white hover:shadow-md bg-gradient-to-r from-[#386bb7] to-[#e24c4a] transition-all duration-100"
              onClick={handleButton}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* second-part */}
      <div
        className="w-full h-full bg-[#edeafa] md:mt-12 mt-0"
        style={{
          backgroundImage: `url(${bgServicePart})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full text-center  ">
          {isSmallDevice ? (
            <div className="flex flex-col gap-4 justify-center p-4 items-center h-[230px] backdrop-blur-xl  bg-black/70 ">
              
                <h1 className="text-2xl lg:text-5xl font-semibold text-[#EBB840]">
                  SERVICES WE OFFER{" "}
                </h1>
                <p className="text-sm md:text-lg text-white my-3 py-2">
                  LunarEdge is the perfect choice for any buisness looking to
                  digitize its operations. We offers a wide range of on time and
                  cost effective services that will help solve your complex
                  problems with IT solutions.
                </p>
              
            
            </div>
          ) : (
            // for larger-devices
            <div className="flex flex-col justify-center items-center h-[300px] backdrop-blur-xl  bg-black/70 ">
              {/* center-content  */}

              <h1 className="text-3xl lg:text-5xl font-semibold text-[#EBB840] ">
                SERVICES WE OFFER
              </h1>
              <p className="text-sm text-justify lg:text-lg text-white my-3 py-2 2xl:w-[65%] md:w-[80%]">
                LunarEdge is the perfect choice for any business looking to
                digitize its operations and stay ahead in the digital age. We
                offer a wide range of on-time and cost-effective services that
                will help solve your complex problems with IT solutions. Our
                team of experts is dedicated to delivering innovative and
                scalable solutions. 
              </p>

              {/* center-content-ends  */}
            </div>
          )}
        </div>

        {/* what we offers boxes */}
        <div className="lg:py-20 py-10 w-full">
          {isSmallDevice ? (
            // rendering slider for small devices
            <div className="w-full container px-4 mx-auto">
              <Slider {...sliderSetting}>
                {offers.map((offer, index) => (
                  <div>
                    <ServiceBox
                      key={index}
                      service={offer.service}
                      content={offer.content}
                      bgimg={offer.bgimg}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            // rendering grid-boxex for large-devices
            <div className="mx-[5%]">
              <div className="flex flex-wrap gap-7 2xl:px-36 xl:px-30 w-full">
                {offers.map((offer, index) => (
                  <ServiceBox
                    key={index}
                    bgimg={offer.bgimg}
                    service={offer.service}
                    content={offer.content}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* third part   */}

      {/* technical-skill content  */}
      <div
        data-aos-duration="300"
        className="flex-col p-5 md:p-1  bg-[#6a96e7] border border-none  md:mt-30"
      >
        <p className=" font-medium md:font-semibold text-center text-2xl md:text-4xl lg:text-5xl mt-14 md:mt-[100px]">
          Empowering Technologies We Use
        </p>
        <div>
          <p className=" text-sm md:text-xl text-center mt-7 mg:mt-11 text-[#3a3939] md:pb-10">
            Explore the cutting-edge technologies driving our solutions. From AI
            and cloud computing to cybersecurity,<br></br> we harness the latest
            tools to deliver exceptional results.
          </p>
        </div>
      </div>

      {/* rendering technical skill-box  */}
      <div
        className="md:flex justify-between xl:justify-around
       items-center p-4 md:pb-40 border border-none w-auto"
        style={{
          backgroundImage: `url(${maleImg})`, // Correct syntax
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* left side  */}
        <div
          data-aos={isSmallDevice ? undefined : "fade-up"}
          data-aos-delay="500"
          className="shadow-2xl rounded-xl border-black bg-gray-800/50   grid grid-rows-4  grid-cols-3 p-3 backdrop-blur-xl w-full md:w-[60%] xl:w-[40%] h-auto mx-auto"
        >
          {techStack.map((tech, index) => (
            <TechBox key={index} name={tech.name} logo={tech.logo} />
          ))}
        </div>

        {/* right-side  */}

        <div
          data-aos={isSmallDevice ? undefined : "fade-up"}
          className="hidden md:block w-auto h-full text-center"
        >
          <p className="lg:text-4xl text-3xl  xl:text-7xl  bebas-neue-regular space-x-2 drop-shadow-md xl:mr-5">
            <span className="text-[#6a96e7]">Transforming Business</span>
            {<br></br>}{" "}
            <span className="text-white">With Advance Technology</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
