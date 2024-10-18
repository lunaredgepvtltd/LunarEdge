import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./IndustryLanding.css";
import MoonImage from "./bgLandingPage.png";

const contentData = [
  {
    image: require("./bgLogistic.png"),
    mobileImage: require("./bgL.png"),
    Bdcolor: "border-[#f91b54]",
    heading: "Logistics",
    title:
      "We specialize in end-to-end logistics solutions tailored to meet your business needs.",
    Bgcolor: "bg-[#f91b54]",
  },
  {
    image: require("./bgBank (3).png"),
    mobileImage: require("./bgB.png"),
    Bdcolor: "border-[#112d4e]",
    heading: "Banking",
    title:
      "From warehousing to transportation, we ensure your goods are handled with care.",
    Bgcolor: "bg-[#112d4e]",
  },
  {
    image: require("./bgManufacturing.png"),
    mobileImage: require("./bgM.png"),
    Bdcolor: "border-[#6fbf36]",
    heading: "Manufacturing",
    title:
      "We provide comprehensive insights to help you manage your financial assets efficiently.",
    Bgcolor: "bg-[#6fbf36]",
  },
  {
    image: require("./bgRetail.png"),
    mobileImage: require("./bgR.png"),
    Bdcolor: "border-[#f28e38]",
    heading: "Retail",
    title:
      "Tailored logistics solutions for businesses to meet international shipping needs.",
    Bgcolor: "bg-[#f28e38]",
  },
];

const IndustryLanding = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <MdKeyboardArrowRight size={24} />,
    prevArrow: <MdKeyboardArrowLeft size={24} />,

    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-16 h-[600px] md:h-screen overflow-hidden bg-white dark:bg-black z-0">
        {/* Half Moon */}
        <img
          src={MoonImage}
          alt="Half Moon"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            zIndex: -1,
          }}
        />

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-base text-black ">
          Industries
        </h1>

        <h2 className="text-2xl md:text-2xl lg:text-4xl font-normal text-black ">
        Solutions that Work for You

        </h2>
        <div className="mt-10 md:hidden"></div>

        <p className="text-black dark:text-white text-md md:text-2xl lg:text-3xl font-normal text-center w-[70%] mt-16 md:mt-16 lg:px-2 lg:mt-6">
          From innovative technologies to smart strategies, we help businesses grow, adapt, and lead in a changing world.
        </p>
      </div>

      <div className="w-[80%] h-auto mx-auto mt-[5%]   mb-[5%] relative overflow-hidden">
        <Slider {...settings}>
          {contentData.map((item, index) => (
            <div key={index} className="relative  ">
              <img
                src={window.innerWidth < 768 ? item.mobileImage : item.image}
                alt={item.heading}
                className={`w-full h-full object-fill rounded-xl border-4 z-10 ${item.Bdcolor}`}
                style={{ borderRadius: "20px" }}
              />
              <div
                className={`absolute bottom-[-12%] md:bottom-[-7%] right-8 md:right-10 w-[75%] md:w-[35%] shadow-lg rounded-2xl p-8 z-20 md:p-12 ${item.Bgcolor}`}
                style={{ overflow: "visible" }} // Ensure content is not clipped
              >
                <h2 className="text-xl md:text-4xl font-normal text-white">
                  {item.heading}
                </h2>
                <p className="text-xs md:text-lg text-left text-white mt-2">
                  {item.title}
                </p>
                <button className="mt-4 bg-white text-black py-1 md:py-2 px-2 md:px-4 rounded-full w-[100%] md:w-[50%] flex items-center gap-2">
                  Explore more <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default IndustryLanding;
