import React, { useEffect, useState } from "react";
import Offer from "../components/Offer";
import service_box from '../assets/service_box.gif'
import service_boxr from '../assets/service_boxr.gif'
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
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import maleImg from '../assets/male.png'
import employmoon from '../assets/employmoon.png'
import textimage from '../assets/textimage.png'
import moon from '../assets/moon.png'

import '../App.css'

const Hero = () => {

  const isSmallDevice = useMediaQuery({ maxWidth: 767 })

  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  }

  // offers Object 
  const offers = [
    {
      service: "Mobile App Development",
      content: "Creating intuitive mobile applications for iOS and Android platforms that deliver seamless user experiences."
    },
    {
      service: "Web Development",
      content: "Crafting engaging and user-friendly websites that enhance your online presence and drive customer engagement."
    },
    {
      service: "Game Development",
      content: "Immerse your audience in captivating virtual worlds with Lunaredge game development expertise."
    },
    {
      service: "IT Consulting",
      content: "Expert guidance and strategic advice to optimize your IT infrastructure and achieve operational excellence."
    },
    {
      service: "Cloud Solutions",
      content: "Harnessing the power of cloud technology to improve scalability, security, and efficiency in your business operations."
    },
    {
      service: "Cybersecurity Services",
      content: "Protecting your digital assets with robust cybersecurity measures and proactive threat detection."
    },
    {
      service: "Banking and Financial Services",
      content: "Providing tailored IT solutions for banking and financial institutions, including core banking systems, loan management system, mobile banking apps."
    },
    {
      service: "AI and Machine Learning Solutions",
      content: "Harness the power of artificial intelligence and machine learning with Lunaredge Our advanced AI solutions are designed to revolutionize."
    },
    {
      service: "Agriculture Technology Solutions",
      content: "Innovating agriculture processes with smart technology solutions such as precision farming, crop monitoring systems, and agricultural data analytics."
    }
  ];

  // technical skill stack 

  const techStack = [
    { name: "HTML", logo: <IoLogoHtml5 className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "CSS", logo: <FaCss3Alt className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "JS", logo: <RiJavascriptFill className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "JAVA", logo: <FaJava className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "REACT", logo: <FaReact className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "NODE JS", logo: <FaNodeJs className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "PYTHON", logo: <FaPython className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "ANDROID", logo: <IoLogoAndroid className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "IOS", logo: <FaApple className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "EXPRESS", logo: <SiExpress className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "MONGODB", logo: <SiMongodb className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "AWS", logo: <FaAws className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> }
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
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* text image for big devices --- left-side  */}
        <div className="hidden lg:block md:w-[40%] relative">
          <img src={textimage} />
          <div className=" hidden xl:block absolute top-[42%] left-[31%]  h-full w-full">
          <img src={moon} className="w-[12%] h-[16%] rotate-continuous"/>
          </div>
          </div>

         {/* right-side for small and medium devices */}
        <div className=" w-[80%] h-[65%] md:w-[50%] items-center relative">
         
           {/* swipe-down button  */}
          <div className="mouse hidden md:block  top-[50%] bottom-4 left-[0%]">
          
          </div>
            {/* for small device          */}
          <div className="h-auto lg:hidden flex flex-col gap-6 justify-around items-center md:mt-[20px]">
           <div className="w-[80%] relative">
          <img src={textimage} />
          <div className=" md:hidden absolute top-[42%] left-[31%]  h-auto w-auto">
          <img src={moon} className="w-[18%] lg:w-[12%] h-[16%] rotate-continuous"/>
          </div>
          </div>
              {/* Contact Us */}
          
              <h2 className="text-md mb-4">Welcome to Lunaredge Private Limited, your partner in digital transformation. We specialize in delivering customized IT solutions that drive business growth and efficiency.</h2>
            
          
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
      <div className="w-full h-full ">
        <div className="w-full text-center  md:pt-12">
          {isSmallDevice ?
            <div className="flex flex-col gap-4 justify-center items-center ">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-2xl lg:text-5xl font-semibold gradient-text">SERVICES WE OFFER </h1>
                <p className="text-sm md:text-lg text-slate-500 my-3 py-2">
                  LunarEdge is the perfect choice for any buisness looking to
                  digitize its operations. We offers a wide range of on time{" "}
                  <br></br> and cost effective services that will help solve your
                  complex problems with IT solutions.
                </p>
              </div>
              <div>
                <img src={service_box} className="md:hidden block h-[150px] w-[200px]" />
              </div>
            </div>
            :
            // for larger-devices 
            <div className="flex justify-between items-center">
              {/* left-computer-gif  */}
              <div>
                <img src={service_box} className=" xl:h-[300px] xl:w-[400px] lg:h-[350px] lg:w-[650px] 
                md:h-[300px] md:w-[600px]" />
              </div>

              {/* center-content  */}
              <div data-aos="fade-up" data-aos-duration="300" className="flex flex-col gap-5 p-8">
                <h1 className="text-3xl lg:text-5xl font-semibold gradient-text">SERVICES WE OFFER</h1>
                <p className="text-sm lg:text-lg text-slate-500 my-3 py-2">
                  LunarEdge is the perfect choice for any buisness looking to
                  digitize its operations. We offers a wide range of on time{" "}
                  <br></br> and cost effective services that will help solve your
                  complex problems with IT solutions.
                </p>
              </div>
              {/* center-content-ends  */}

              {/* right-computer-gif  */}
              <div className="xl:block hidden">
                <img src={service_boxr} className=" h-[300px] w-[400px]" />
              </div>
            </div>}
        </div>

        {/* what we offers boxes */}
        <div className="lg:py-20 py-10"  >
          {isSmallDevice ? (
            // rendering slider for small devices 
            <div className="w-full container mx-auto">
              <Slider {...sliderSetting}>
                {offers.map((offer, index) => (
                  <div key={index}>
                    <Offer service={offer.service} content={offer.content} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            // rendering grid-boxex for large-devices 
            <div className='flex flex-wrap justify-center items-stretch lg:px-3'>
            {offers.map((offer, index) => (
              <div className='w-full md:w-1/3 px-1 py-3 xl:px-5'>
                <Offer key={index} service={offer.service} content={offer.content} />
              </div>
            ))}
          </div>
          )}
        </div>
      </div>

      {/* third part   */}


      {/* technical-skill content  */}
      <div data-aos-duration="300" className="flex-col p-5 md:p-1  bg-[#6a96e7] border border-none mt-24 md:mt-36">
        <p className=" font-medium md:font-semibold text-center text-2xl md:text-5xl mt-14 md:mt-[100px]">
          Empowering Technologies We Use
        </p>
        <div>
          <p className=" text-sm md:text-xl text-center mt-7 mg:mt-11 text-[#3a3939] md:pb-10">
            Explore the cutting-edge technologies driving our solutions. From AI
            and cloud computing to cybersecurity,<br></br> we harness the latest tools to
            deliver exceptional results.
          </p>
        </div>
      </div>

      {/* rendering technical skill-box  */}
      <div className="md:flex justify-between xl:justify-around
       items-center p-4 md:pb-40 border border-none w-auto" style={{
          backgroundImage: `url(${maleImg})`, // Correct syntax
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>

        {/* left side  */}
        <div data-aos={isSmallDevice ? undefined : "fade-up"} data-aos-delay="500" className="shadow-2xl rounded-xl border-black bg-gray-800/50   grid grid-rows-4  grid-cols-3 p-3 backdrop-blur-xl w-full md:w-[60%] xl:w-[40%] h-auto mx-auto" >

          {techStack.map((tech, index) => (
            <TechBox key={index} name={tech.name} logo={tech.logo} />
          ))}
        </div>

        {/* right-side  */}

        <div data-aos={isSmallDevice ? undefined : "fade-up"} className="hidden md:block w-auto h-full text-center">
          <p className="text-4xl lg:text-7xl  bebas-neue-regular space-x-2 drop-shadow-md xl:mr-5"><span className="text-[#6a96e7]">Transforming Business</span>{<br></br>} <span className="text-white">With Advance Technology</span></p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
