import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import innovationVidio from "../assets/innovationVideo.mp4";
import Slider from "react-slick";

const CoreValues = () => {
  const services = [
    {
      title: "INNOVATION",
      description:
        "We are constantly exploring new ways to solve problems and create value.",
    },
    {
      title: "INTEGRITY",
      description:
        "We conduct our business with the highest level of ethics and transparency.",
    },
    {
      title: "EXCELLENCE",
      description:
        "We strive for perfection in every project, delivering quality results.",
    },
    {
      title: "COLLABORATION",
      description:
        "We work closely with our clients, fostering partnerships that drive success.",
    },
    {
      title: "SUSTAINABILITY",
      description:
        "We are committed to sustainable practices that benefit our community and the environment.",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide on smaller devices
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,          // Adjust settings for screens <= 1024px
        settings: {
          slidesToShow: 3,         // Show 2 slides on larger screens
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,           // Adjust settings for screens <= 600px
        settings: {
          slidesToShow: 1,         // Show 1 slide on smaller screens
          slidesToScroll: 1,
        },
      },],
    
  };

  const [isLg, setIsLg] = useState(window.innerWidth >= 1024); // Adjust this based on your breakpoint
  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-custom-gradient py-16">
      <div className="w-[95%] md:h-[700px] h-1/2 mx-auto px-4 sm:px-0 xl:px-8 flex flex-col justify-around">
        <p className="mt-9 md:text-4xl text-2xl font-light leading-8 text-center">
          Our core values that define who we are and how we work
        </p>

        <div className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-5 items-center justify-center">
          {/* Show Slider for md and smaller */}
          {!isLg ? (
            <Slider {...settings} className="block">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`h-[280px] rounded-3xl drop-shadow-2xl shadow-[#242659] overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-[#c99cc9] transition-all duration-400 `}
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    if (video) {
                      video.play();
                    }
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    if (video) {
                      video.pause();
                      video.currentTime = 0; // Optional: Reset to the beginning
                    }
                  }}
                >
                  <video
                    className="absolute inset-0 object-cover w-full h-full opacity-30"
                    loop
                    muted
                  >
                    <source src={innovationVidio} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div
                    className={`flex flex-col h-full xl:py-9 py-3 px-4 xl:px-8 lg:justify-evenly xl:justify-between`}
                  >
                    <h3 className="mt-4 xl:text-xl text-lg font-semibold text-gray-900 ">
                      {service.title}
                    </h3>
                    <p className="mt-2 xl:font-semibold xl:text-lg text-sm text-left ">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            // Normal cards for lg and bigger
            services.map((service, index) => (
              <div
                key={index}
                data-aos="zoom-out-up"
                data-aos-duration="500"
                data-aos-delay={index * 100}
                className={`h-[280px] rounded-3xl drop-shadow-2xl shadow-[#242659] overflow-hidden lg:flex flex-col justify-between hover:shadow-2xl hover:shadow-[#c99cc9] transition-all duration-400 ${
                  index % 2 === 0 ? "mt-32" : "mb-32"
                }`}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    video.play();
                  }
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    video.pause();
                    video.currentTime = 0; // Optional: Reset to the beginning
                  }
                }}
              >
                <video
                  className="absolute inset-0 object-cover w-full h-full opacity-30"
                  loop
                  muted
                >
                  <source src={innovationVidio} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div
                  className={`flex flex-col h-full xl:py-9 py-3 px-4 xl:px-8 lg:justify-evenly xl:justify-between`}
                >
                  <h3 className="mt-4 xl:text-xl text-lg font-semibold text-gray-900 ">
                    {service.title}
                  </h3>
                  <p className="mt-2 xl:font-semibold xl:text-lg text-sm text-left ">
                    {service.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
