import React, { useState } from "react";
import { MdDescription, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoonImage from "../assets/bgLandingPage.png";
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
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Web Development",
      image: WEB_DEVELOPEMENT,
      description:
        "Custom websites designed for performance and user experience.",
    },
    {
      id: 2,
      title: "Software App Development",
      image: SOFTWARE_APP_DEVELOPMENT,
      description:
        "Innovative software solutions to enhance productivity and growth.",
    },
    {
      id: 3,
      title: "IT Consulting",
      image: IT_CONSULTING,
      description:
        "Expert guidance to optimize your IT strategy and infrastructure.",
    },
    {
      id: 4,
      title: "Cloud Solution",
      image: CLOUD_SOLUTIONS,
      description:
        "Scalable and secure cloud services tailored for your business.",
    },
    {
      id: 5,
      title: "AI & ML Solution",
      image: AI_ML_Solutions,
      description:
        "Intelligent solutions that leverage AI and machine learning for data-driven decisions.",
    },
    {
      id: 6,
      title: "NEXT-GEN GAME DEVELOPMENT",
      image: NEXTGEN_GAME,
      description: "Engaging games built with the latest technologies.",
    },
    {
      id: 7,
      title: "Cyber Security Services",
      image: CYBER_SECURITY,
      description: "Robust security measures to protect your data and systems.",
    },
    {
      id: 8,
      title: "Hardware Supply And Solution",
      image: HARWARE_SUPPLY_SOLUTIONS,
      description: "Reliable hardware solutions to support your operations.",
    },
  ];

  const settings = {
    dots: true,
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
      <div className="relative flex flex-col items-center justify-center  gap-8 md:gap-10 lg:gap-16 h-[600px] md:h-screen overflow-hidden">
        {/* Half Moon */}
        <img
          src={MoonImage}
          alt="Half Moon"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            zIndex: -1,
          }}
        />

        <h1 className=" text-4xl md:text-5xl lg:text-7xl font-base text-black">
          Services
        </h1>

        <h2 className="text-3xl md:text-3xl lg:text-5xl  font-normal text-black">
          What we do
        </h2>
        <div className="mt-10 md:hidden"></div>

        <p className=" text-black text-lg md:text-2xl lg:text-3xl  font-base text-center  w-[70%] mt-16 md:mt-16 lg:px-2 lg:mt-6">
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


        {/* for desktop */}
        <div className="hidden lg:block mx-[10%] px-4">
          <div className="grid xl:gap-10 gap- grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {cards.map((card) => (
              <div className="bg-white px-4">
                <div
                  key={card.id}
                  className="border rounded-[25px] h-[350px] relative flex flex-col justify-between overflow-hidden hover:transition hover:duration-300 ease-in-out transform cursor-pointer"
                >
                  <div
                    className="relative h-full w-full"
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                  >
                 
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover z-0 transition duration-300"
                      style={{
                        filter:
                          hoveredCardId === card.id
                            ? "blur(2px)"
                            : "grayscale(100%)", 
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-40 z-5"></div>

                  
                    <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                      {hoveredCardId === card.id ? ( 
                        <>
                          <h3 className="text-lg font-semibold pt-10 text-center text-white">
                            {card.title}
                          </h3>
                          <p className="text-white mb-6 text-center">
                            {card.description}
                          </p>
                        </>
                      ) : (
                        <h3 className="text-lg pt-10 font-semibold text-left text-white">
                          {card.title}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* for mobile */}

        <div className="md:hidden p-[10%] px-4">
          <Slider {...settings}>
            {cards.map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] h-[300px] relative flex flex-col justify-between overflow-hidden transition duration-300 ease-in-out transform cursor-pointer"
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{
                    filter:
                      hoveredCardId === card.id
                        ? "blur(2px)"
                        : "grayscale(100%)",
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-40 z-5 "></div>

                <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                  <h3 className="text-md  font-semibold  pt-10 text-left text-white">
                    {card.title}
                  </h3>
                  {hoveredCardId === card.id && (
                    <p className="text-md text-white mb-6 text-left">
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* medium device scroll ri8  side  */}
        <div
          className="hidden md:block lg:hidden lg:mx-[5%] px-4 mb-5  "
          style={{ direction: "rtl" }}
        >
          <Slider {...settings2}>
            {cards.map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] h-[280px] md:h-[300px] relative flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{
                    filter:
                      hoveredCardId === card.id
                        ? "blur(2px)"
                        : "grayscale(100%)",
                  }}
                />

               
                <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                  {hoveredCardId === card.id ? (
                    <>
                      <h3 className="text-md md:text-lg p-8 font-semibold text-left text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm md:text-base text-white mb-4 text-left">
                        {card.description}
                      </p>
                    </>
                  ) : (
                    <h3 className="text-md md:text-lg pt-8 font-semibold text-left text-white">
                      {card.title}
                    </h3>
                  )}
                </div>

               
                <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
              </div>
            ))}
          </Slider>
        </div>

        {/* md scroll left side  */}

        <div className="hidden md:block lg:hidden lg:mx-[5%] px-4">
          <Slider {...settings}>
            {cards.map((card) => (
              <div
                key={card.id}
                className="border rounded-[25px] h-[300px] relative flex flex-col justify-between overflow-hidden transition duration-300 ease-in-out transform hover:grayscale-0 grayscale-100 cursor-pointer"
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover z-0 transition duration-300"
                  style={{
                    filter:
                      hoveredCardId === card.id
                        ? "blur(2px)"
                        : "grayscale(100%)", 
                  }}
                />

                
                <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                  <h3 className="text-lg pt-10 font-semibold text-left text-white">
                    {card.title}
                  </h3>
                  {hoveredCardId === card.id && (
                    <p className="text-white mb-4 text-left text-sm">
                      {card.description}
                    </p>
                  )}
                </div>

            
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
