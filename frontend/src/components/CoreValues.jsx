import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { BsGlobe2 } from "react-icons/bs";
import sideArrow from "../assets/sideArrow.png";
import innovationVidio from "../assets/innovationVideo.mp4"
const CoreValues = () => {
  const services = [
    {
      title: "INNOVATION",
      description:
        "We are constantly exploring new ways to solve problems and create value.",
    },
    {
      title: "INTEGRITY",
      description: "We conduct our business with the highest level of ethics and transparency.",
    },
    {
      title: "EXECELLENCE",
      description: "We strive for perfection in every project, delivering quality results.",
    },
    {
      title: "COLLABORATION",
      description: "We work closely with our clients, fostering partnerships that drive success.",
    },
    {
      title: "SUSTAINABILITY",
      description: "We are committed to sustainable practices that benefit our community and the environment.",
    }
  ];

  // useEffect(() => {
  //   AOS.init(); // Initialize AOS
  // }, []);

  return (
    <div className="bg-custom-gradient py-16">
      <div className="w-[95%] h-[700px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-around">
        <p className="mt-9 text-5xl font-light leading-8 text-center">
          Our core values that define who we are and how we work
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 px-[10%] items-center justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-out-up" // Add AOS animation
              data-aos-duration="500" // Duration of the animation
              data-aos-delay={index * 100} // Staggered delay based on index
              className={` h-[280px] w-[250px] rounded-3xl drop-shadow-2xl shadow-[#242659] overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-[#c99cc9] transition-all duration-400 ${
                index % 2 === 0 ? "mt-32" : "mb-32"
              }`}
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) {
                  video.play();
                }
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector('video');
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
                <source
                  src={innovationVidio}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className={`flex flex-col h-full py-9 px-8 justify-between `}>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 ">
                  {service.title}
                </h3>
                <p className="mt-2 font-semibold text-left ">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
