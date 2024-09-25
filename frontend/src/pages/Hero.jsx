import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import { IoLogoHtml5 } from "react-icons/io5";
import TechBox from "../components/TechBox";
import {
  FaCss3Alt,
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython,
  FaApple,
  FaAws,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoAndroid } from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";
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
import { AboutUs } from "./AboutUs";
import upArrow from "../assets/upArrow.png";
import Services from "./Services";
import NewLandingPage from "../components/NewLandingPage";
import CoreValues from "../components/CoreValues";
import ContactCard from "../components/ContactPage";
import ContactPage from "../components/ContactPage";
import TransformingBusinessSection from "../components/TransformingBusinessSection";

const Hero = () => {
  const isSmallDevice = useMediaQuery({ minWidth: 300, maxWidth: 600 });

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
      service: "Website Development",
      content:
        "Transform your online presence with our custom web development solutions. From visually stunning designs to seamless functionality, we create websites that engage users and drive results. Our focus is on delivering responsive, high-performance sites tailored to your unique business needs.",
    },
    {
      bgimg: bgApp,
      service: "Software App Development",
      content:
        "Elevate your business with intuitive mobile and web applications that enhance user experiences and streamline operations. Our application development services cover everything from concept and design to deployment and maintenance, ensuring your app stands out in a competitive market.",
    },
    {
      bgimg: bgGame,
      service: "Next-Gen Game Creation",
      content:
        "Engage and entertain with interactive games crafted by our expert developers. Whether you're looking for mobile, console, or PC games, we offer end-to-end game development services that bring your vision to life with compelling gameplay and immersive experiences.",
    },
    {
      bgimg: bgConsulting,
      service: "IT Consulting",
      content:
        "Optimize your IT strategy with our consulting services. We provide expert advice on technology planning, infrastructure management, and digital transformation, helping you align IT initiatives with your business goals and achieve sustainable growth.",
    },
    {
      bgimg: bgCloud,
      service: "Cloud Solutions",
      content:
        "Embrace the power of the cloud with our comprehensive cloud solutions. We offer scalable, secure, and cost-effective cloud services that enhance flexibility, improve collaboration, and drive operational efficiency, allowing your business to thrive in a digital-first environment.",
    },
    {
      bgimg: bgCyber,
      service: "Security Services",
      content:
        "Protect your valuable data with our robust security services. We implement cutting-edge security measures to safeguard your IT assets from cyber threats and vulnerabilities, ensuring your business remains secure and compliant.",
    },
    {
      bgimg: bgBank,
      service: "FinTech Solutions",
      content:
        "Enhance your banking operations with our specialized solutions designed to streamline processes and improve customer experiences. From digital banking platforms to transaction processing systems, we offer innovative solutions that drive efficiency and customer satisfaction.",
    },
    {
      bgimg: bgAi,
      service: "AI & ML Solutions",
      content:
        "Unlock the potential of artificial intelligence and machine learning with our advanced solutions. We develop AI-driven tools and ML models that provide actionable insights, automate processes, and drive innovation, giving your business a competitive edge..",
    },
    {
      bgimg: bgHardware,
      service: "Hardware Supply & Solutions",
      content:
        "Equip your business with high-quality hardware solutions tailored to your needs. From laptops and desktops to specialized equipment, we offer reliable hardware products and support to ensure your technology infrastructure runs smoothly.",
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
  const [isScrollbarVisible, setIsScrollbarVisible] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleButton = () => {
    setShowForm(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollbar = () => {
    if (window.scrollY > 100) {
      setIsScrollbarVisible(true);
    } else {
      setIsScrollbarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollbar);
    return () => {
      window.removeEventListener("scroll", checkScrollbar);
    };
  }, []);

  return (
    <div className="w-full h-auto relative">
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
        {/* text image for big devices --- left-side */}
        <div className="hidden lg:block md:w-[40%] relative">
          <img src={textimage} />
          <div className="hidden md:block absolute top-[42%] left-[31%] h-full w-full">
            <img src={moon} className="w-[12%] h-[16%] rotate-continuous" />
          </div>
        </div>

        {/* right-side for small and medium devices */}
        <div className="w-[80%] h-[65%] md:w-[50%] items-center relative">
          {/* for small device */}
          <div className="h-auto lg:hidden flex flex-col gap-10 justify-around items-center md:mt-[20px]">
            <div className="w-[80%] relative">
              <img src={textimage} />
              <div className="md:hidden absolute top-[42%] left-[31%] h-auto w-auto">
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
              className="rounded-full py-4 px-8 text-md bg-[#703299] border border-[#703299] text-white hover:shadow-md bg-gradient-to-r from-[#386bb7] to-[#e24c4a] transition-all duration-100"
              onClick={handleButton}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="md:pt-[180px] pt-[0px]">
        <AboutUs />
      </div>

      {/* second-part */}
      <div
        className="w-full h-full md:mt-12 mt-0"
        style={{
          backgroundImage: `url(${bgServicePart})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full text-center">
          {isSmallDevice ? (
            <div className="flex flex-col gap-4 justify-center p-4 items-center h-[230px] backdrop-blur-xl bg-black/70">
              <h1 className="text-xl lg:text-5xl font-semibold text-[#EBB840]">
              EXPLORE OUR COMPREHENSIVE RANGE OF SERVICE
              </h1>
              <p className="text-sm md:text-lg text-white my-3 py-2">
              At LunarEdge, we are dedicated to helping businesses navigate
                the digital landscape with a suite of innovative services
                designed to meet the evolving demands of the modern world. 
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-[300px] backdrop-blur-xl bg-black/70">
              <h1 className="text-3xl lg:text-5xl font-semibold text-[#EBB840]">
               EXPLORE OUR COMPREHENSIVE RANGE OF SERVICE 
              </h1>
              <p className="text-sm text-justify lg:text-lg text-white my-3 py-2 2xl:w-[63%] xl:w-[70%] md:w-[80%]">
                At LunarEdge, we are dedicated to helping businesses navigate
                the digital landscape with a suite of innovative services
                designed to meet the evolving demands of the modern world. Our
                expert team delivers solutions that are not only effective but
                also scalable and future-ready.
              </p>
            </div>
          )}
        </div>

        {/* what we offers boxes */}
        <div className="lg:py-20 py-10 w-full">
          {isSmallDevice ? (
            <div className="w-full container px-4 mx-auto">
              <Slider {...sliderSetting}>
                {offers.map((offer, index) => (
                  <div key={index} className="px-1">
                    <ServiceBox
                      service={offer.service}
                      content={offer.content}
                      bgimg={offer.bgimg}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="2xl:mx-[0%] mx-[5%]">
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

      {/* third part */}
      {/* technical-skill content */}
      <div
        data-aos-duration="300"
        className="flex-col p-5 md:p-1 bg-[#6a96e7] border border-none md:mt-30"
      >
        <p className="font-medium md:font-semibold text-center text-2xl md:text-4xl lg:text-5xl mt-14 md:mt-[100px]">
          Empowering Technologies We Use
        </p>
        <div>
          <p className="text-sm md:text-xl text-center mt-7 mg:mt-11 text-[#3a3939] md:pb-10">
            Explore the cutting-edge technologies driving our solutions. From AI
            and cloud computing to cybersecurity, <br />
            we harness the latest tools to deliver exceptional results.
          </p>
        </div>
      </div>

      {/* rendering technical skill-box */}
      <div
        className="md:flex justify-between xl:justify-around items-center p-4 md:pb-40 border border-none w-auto"
        style={{
          backgroundImage: `url(${maleImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* left side */}
        <div
          
          className="shadow-2xl rounded-xl border-black bg-gray-800/50 grid grid-rows-4 grid-cols-3 p-3 backdrop-blur-xl w-full md:w-[60%] xl:w-[40%] h-auto mx-auto"
        >
          {techStack.map((tech, index) => (
            <TechBox key={index} name={tech.name} logo={tech.logo} />
          ))}
        </div>

        {/* right-side */}
        <div
          data-aos={isSmallDevice ? undefined : "fade-up"}
          className="hidden md:block w-auto h-full text-center"
        >
          <p className="lg:text-4xl text-3xl xl:text-7xl bebas-neue-regular space-x-2 drop-shadow-md xl:mr-5">
            <span className="text-[#6a96e7]">Transforming Business</span>
            <br />
            <span className="text-white">With Advance Technology</span>
          </p>
        </div>
      </div>

      {/* Animated Bounce Icon */}
      {isScrollbarVisible && (
        <div className="fixed bottom-4 right-4 text-white z-50">
          <img
            src={upArrow}
            className="animate-bounce w-8 h-8 cursor-pointer"
            onClick={handleScrollToTop}
            alt="Scroll to top"
          />
        </div>
      )}
      <Services/>
      <NewLandingPage/>
      <CoreValues/>
      <ContactPage/>
      <TransformingBusinessSection/>
    </div>
  );
};

export default Hero;
