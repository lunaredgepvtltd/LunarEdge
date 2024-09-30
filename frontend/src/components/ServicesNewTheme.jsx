import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
    rtl:true,
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
    <div className="bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] pb-5">
      <h1 className="text-4xl py-[20px] text-center">What we offer</h1>
      <h2 className="text-2xl text-gray-600 mb-[70px] text-center">
        with technology we advance your business
      </h2>

{/*        
   for desktop */}


      <div className="hidden lg:block mx-[5%] px-4">
        <div className="grid xl:gap-10 gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="border rounded-[25px] p-4 h-[350px] bg-[#feebf7] flex flex-col justify-between"
            >
              <h3 className="text-sm xl:text-lg font-semibold mb-4 text-center mx-2">
                {card.title}
              </h3>
              <div className="flex items-center justify-center mt-10">
                <button className="text-blue-500">Read More</button>
                <MdKeyboardArrowRight className="text-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </div>




  {/* for mobile  */}

      <div className="md:hidden mx-[10     %] px-4">
        <Slider {...settings}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="border rounded-[25px] p-4 h-[300px] bg-[#feebf7] flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-4 text-center mx-2">
                {card.title}
              </h3>
              <div className="flex items-center justify-center mt-10">
                <button className="text-blue-500">Read More</button>
                <MdKeyboardArrowRight className="text-blue-500" />
              </div>
            </div>
          ))}
        </Slider>
      </div>






      {/* medium device scroll ri8  side  */}
      <div className="hidden md:block lg:hidden mx-[5%] px-4 mb-5  " style={{ direction: 'rtl' }}>
        <Slider {...settings2}>
          {cards.map((card) => (
            <div key={card.id} className="border rounded-[25px] h-[300px] bg-[#feebf7] flex flex-col justify-between ">
              <h3 className="text-lg font-semibold text-center">{card.title}</h3>
              <div className="flex items-center justify-center mt-10">
                <button className="text-blue-500">Read More</button>
                <MdKeyboardArrowRight className="text-blue-500" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
  {/* md scroll left side  */}

      <div className="hidden md:block lg:hidden mx-[5%] px-4">
        <Slider {...settings}>
          {cards.slice(1).map((card) => (
            <div key={card.id} className="border rounded-[25px] p-4 h-[300px] bg-[#feebf7] flex flex-col justify-between ">
              <h3 className="text-lg font-semibold text-center">{card.title}</h3>
              <div className="flex items-center justify-center  mt-10">
                <button className="text-blue-500">Read More</button>
                <MdKeyboardArrowRight className="text-blue-500" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesNewTheme;
