import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const contentData = [
  {
    image: require("./bgLogistic.png"),
    mobileImage: require("./bgL.png"),
    Bdcolor: "border-[#f91b54]",
    heading: "Logistics ",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHovered) startInterval();

    return () => stopInterval();
  }, [isHovered, currentIndex]);

  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 3000);
  };

  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const { image, heading, title, Bgcolor, Bdcolor, mobileImage } =
    contentData[currentIndex];

  return (
    <div
      className="relative flex flex-col items-center w-[80%] mx-auto h-[30%] md:h-[auto] 
    overflow-hidden "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex items-center justify-center mt-[40%] md:mt-[12%]  insert-0 z-1  ">
        <img
          src={window.innerWidth < 768 ? mobileImage : image}
          alt={heading}
          className={`w-full h-full object-fill rounded-xl transition-opacity duration-1000  border-4 ${Bdcolor}`}
          style={{ borderRadius: "20px" }}
        />
      </div>

      <div
        className={`insert-0 z-30 absolute bottom-[10%] md:bottom-[2%] right-8 md:right-10 w-[75%] md:w-[35%] shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:justify-between ${Bgcolor}`}
      >
        <h2 className="text-xl md:text-4xl font-normal text-white pb-2">
          {heading}
        </h2>
        <p className="text-xs md:text-md text-white mt-2 ">{title}</p>
        <button className="mt-4 bg-white text-black py-1 md:py-2 px-2 md:px-4 rounded-full w-[95%] md:w-[50%] flex items-center gap-2 ">
          Explore more <FaArrowRight />
        </button>
      </div>

      <div className="w-full bg-transparent md:bg-white py-4 mt-24 md:mt-0 flex  justify-center gap-4 z-40">
        {contentData.map((_, index) => (
          <div
            key={index}
            className={`md:w-4 md:h-4 w-2 h-2 rounded-full border-2 ${
              index === currentIndex ? "border-black" : "border-gray-400"
            } flex items-center justify-center`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryLanding;
