import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MoonImage from "../assets/halfmoon.png";

const ServicesNewTheme = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    { id: 1, title: "Web Development" },
    { id: 2, title: "Software App Development" },
    { id: 3, title: "IT Consulting" },
    { id: 4, title: "Cloud Solution" },
    { id: 5, title: "AI & ML Solution" },
    { id: 6, title: "NEXT-GEN GAME DEVELOPMENT" },
    { id: 7, title: "Cyber Security Services" },
    { id: 8, title: "Hardware Supply And Solution" },
    { id: 9, title: "IT Consulting" },
    { id: 10, title: "Cyber Security" },
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
          className="absolute top-0 left-0 w-full h-auto scale-125" 
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

      <div className="bg-white m-[5%] pb-5">
        {/*        
   for desktop */}

        <div className="hidden lg:block mx-[5%] px-4">
          <div className="grid xl:gap-10 gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {cards.map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] p-4 h-[350px]  bg-gradient-to-r from-[#ffffff] to-[#a6a6a6] dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#737373] flex flex-col justify-between"
              >
                <h3 className="text-sm xl:text-lg font-semibold mb-4 text-center mx-2">
                  {card.title}
                </h3>
                <div className="flex items-center justify-center mt-10">
                  <button className="text-black  dark:text-white">
                    Read More
                  </button>
                  <MdKeyboardArrowRight className="text-black  dark:text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* for mobile  */}

        <div className="md:hidden mx-[10%] px-4">
          <Slider {...settings}>
            {cards.map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] p-4 h-[300px] bg-gradient-to-r from-[#ffffff] to-[#a6a6a6] flex flex-col justify-between"
              >
                <h3 className="text-xl font-semibold mb-4 text-center mx-2">
                  {card.title}
                </h3>
                <div className="flex items-center justify-center mt-10">
                  <button className="text-black dark:text-white">
                    Read More
                  </button>
                  <MdKeyboardArrowRight className="text-black dark:text-white" />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* medium device scroll ri8  side  */}
        <div
          className="hidden md:block lg:hidden mx-[5%] px-4 mb-5  "
          style={{ direction: "rtl" }}
        >
          <Slider {...settings2}>
            {cards.map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] h-[300px] bg-gradient-to-r from-[#ffffff] to-[#a6a6a6] flex flex-col justify-between "
              >
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
          </Slider>
        </div>

        {/* md scroll left side  */}

        <div className="hidden md:block lg:hidden mx-[5%] px-4">
          <Slider {...settings}>
            {cards.slice(1).map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] p-4 h-[300px] bg-gradient-to-r from-[#ffffff] to-[#a6a6a6] flex flex-col justify-between "
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
          </Slider>
        </div>
      </div>
   
    </>
  );
};

export default ServicesNewTheme;
