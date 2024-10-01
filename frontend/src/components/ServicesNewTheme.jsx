import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MoonImage from "../assets/BgServices1.png";
import BgServices2 from "../assets/BgServices2.png";

import AI_ML_Solutions from "../assets/Bg_AIML.png";
import CLOUD_SOLUTIONS from "../assets/Bg_CLOUD.png";
import WEB_DEVELOPEMENT from "../assets/Bg_WEBDEV.png";
import SOFTWARE_APP_DEVELOPMENT from "../assets/Bg_SOFTWAREAPP.png";
import NEXTGEN_GAME from "../assets/Bg_NEXTGAME.png";
import IT_CONSULTING from "../assets/Bg_CONSULTING.png";
import HARWARE_SUPPLY_SOLUTIONS from "../assets/Bg_HARDWARE.png";
import CYBER_SECURITY from "../assets/Bg_CYBER.png";

const ServicesNewTheme = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    { id: 1, title: "Web Development", image: WEB_DEVELOPEMENT },
    {
      id: 2,
      title: "Software App Development",
      image: SOFTWARE_APP_DEVELOPMENT,
    },
    { id: 3, title: "IT Consulting", image: IT_CONSULTING },
    { id: 4, title: "Cloud Solution", image: CLOUD_SOLUTIONS },
    { id: 5, title: "AI & ML Solution", image: AI_ML_Solutions },
    { id: 6, title: "NEXT-GEN GAME DEVELOPMENT", image: NEXTGEN_GAME },
    { id: 7, title: "Cyber Security Services", image: CYBER_SECURITY },
    {
      id: 8,
      title: "Hardware Supply And Solution",
      image: HARWARE_SUPPLY_SOLUTIONS,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1850, // Corrected from autoplayspeed to autoplaySpeed
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000, // Corrected from autoplayspeed to autoplaySpeed
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        {/* Half Moon */}
        <img
          src={MoonImage}
          alt="Half Moon"
          className="absolute top-0 left-0 w-full h-auto lg:bg-cover"
          style={{
            zIndex: -1,
          }}
        />

        <h1 className="absolute top-1/4 text-7xl left-1/2 transform -translate-x-1/2 font-normal text-black dark:text-white">
          Services
        </h1>

        <h2 className="absolute text-6xl left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-black dark:text-white ">
          What we do
        </h2>

        <p className="absolute  text-4xl left-1/2 transform -translate-x-1/2 mt-[25%] text-black dark:text-white text-center ">
          With technology, we advance your business
        </p>
      </div>

      <div
        className=" p-[5%] pb-[5%]"
        style={{
          backgroundImage: `url(${BgServices2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hidden lg:block mx-[5%] px-4">
          <div className="grid xl:gap-10 gap- grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] p-4 h-[350px] transition duration-300 ease-in-out transform hover:grayscale-0  grayscale-100 cursor-pointer  flex flex-col justify-between"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-sm xl:text-lg font-semibold mb-4 text-center mx-2 text-white">
                  {card.title}
                </h3>
                <div className="flex items-center justify-center mt-10">
                  <button className="text-white">Read More</button>
                  <MdKeyboardArrowRight className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* for mobile  */}

        <div className="md:hidden p-[10%] px-4">
          {/* <Slider {...settings}>
            {cards.map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] p-4 h-[300px]  transition duration-300 ease-in-out transform hover:grayscale-0  grayscale-100 cursor-pointer flex flex-col justify-between"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-center mx-2">
                  {card.title}
                </h3>
                <div className="flex items-center justify-center mt-10">
                  <button className="text-white">Read More</button>
                  <MdKeyboardArrowRight className="text-white" />
                </div>
              </div>
            ))}
          </Slider> */}

<Slider {...settings}>
    {cards.map((card) => (
      <div
        key={card.id}
        className="border rounded-[25px] h-[300px] relative flex flex-col justify-between overflow-hidden transition duration-300 ease-in-out transform hover:grayscale-0 grayscale-100 cursor-pointer"
      >
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

       
        <div className="relative z-10 p-4 h-full flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-center text-white">
            {card.title}
          </h3>
          <div className="flex items-center justify-center mt-10">
            <button className="text-white">Read More</button>
            <MdKeyboardArrowRight className="text-white" />
          </div>
        </div>

        
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
      </div>
    ))}
  </Slider>
        </div>

        {/* medium device scroll ri8  side  */}
        <div
          className="hidden md:block lg:hidden lg:mx-[5%] px-4 mb-5  "
          style={{ direction: "rtl" }}
        >
          {/* <Slider {...settings2}>
            {cards.map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] h-[300px]  transition duration-300 ease-in-out transform hover:grayscale-0  grayscale-100 cursor-pointer flex flex-col justify-between "
                // style={{
                //   backgroundImage: `url(${card.image})`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                //   filter: 'opacity(0.8)',
                // }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[200px] object-cover rounded-[25px]"
                />
                
                <h3 className="text-lg font-semibold text-center">
                  {card.title}
                </h3>
                <div className="flex items-center justify-center mt-10">
                  <button className="text-black dark:text-white">
                    Read More
                  </button>
                  <MdKeyboardArrowRight className="text-black   dark:text-white " />
                </div>
              </div>
            ))}
          </Slider> */}

<Slider {...settings2}>
    {cards.map((card) => (
      <div
        key={card.id}
        className="border rounded-[25px] h-[300px] relative flex flex-col justify-between overflow-hidden transition duration-300 ease-in-out transform hover:grayscale-0 grayscale-100 cursor-pointer"
      >
        {/* Full-size image */}
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay content */}
        <div className="relative z-10 p-4 h-full flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-center text-white">
            {card.title}
          </h3>
          <div className="flex items-center justify-center mt-10">
            <button className="text-white">Read More</button>
            <MdKeyboardArrowRight className="text-white" />
          </div>
        </div>

        {/* Background overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
      </div>
    ))}
  </Slider>

        </div>

        {/* md scroll left side  */}

        <div className="hidden md:block lg:hidden lg:mx-[5%] px-4">
          {/* <Slider {...settings}>
            {cards.slice(1).map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] p-4 h-[300px] transition duration-300 ease-in-out transform hover:grayscale-0  grayscale-100 cursor-pointer flex flex-col justify-between "
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "opacity(0.8)",
                }}
              >
                <h3 className="text-lg font-semibold text-center">
                  {card.title}
                </h3>
                <div className="flex items-center justify-center  mt-10">
                  <button className="text-black dark:text-white ">
                    Read More
                  </button>
                  <MdKeyboardArrowRight className="text-black dark:text-white " />
                </div>
              </div>
            ))}
          </Slider> */}
          <Slider {...settings}>
    {cards.map((card) => (
      <div
        key={card.id}
        className="border rounded-[25px] h-[300px] relative flex flex-col justify-between overflow-hidden transition duration-300 ease-in-out transform hover:grayscale-0 grayscale-100 cursor-pointer"
      >
        {/* Full-size image */}
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay content */}
        <div className="relative z-10 p-4 h-full flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-center text-white">
            {card.title}
          </h3>
          <div className="flex items-center justify-center mt-10">
            <button className="text-white">Read More</button>
            <MdKeyboardArrowRight className="text-white" />
          </div>
        </div>

        {/* Background overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
      </div>
    ))}
  </Slider>
        </div>
      </div>
    </>
  );
};

export default ServicesNewTheme;
