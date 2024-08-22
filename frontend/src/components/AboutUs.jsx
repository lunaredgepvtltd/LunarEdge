import React from "react";
import bgAboutus from "../assets/bgAboutus.png";
import "../App.css";
import ourVision from "../assets/ourVision.png";
import iconAboutus from "../assets/iconAboutus.png";
export const AboutUs = () => {
  return (
    <div className="h-full w-full bg-gray-100">
      <div className="h-[1000px] flex flex-col items-center justify-center gap-20 ">
        <div className="flex flex-col gap-6 opacity-70">
          <span className="text-xl mx-auto bg-gray-700 p-1 rounded-md text-white">
            LunarEdge IT Services Private Limited
          </span>
          <div className="text-4xl flex flex-col items-center gap-3">
            <h1>
              “Dedicated To Transforming Your Digital <br />
            </h1>
            <h1> Vision Into Reality.”</h1>
          </div>
          <button className="bg-blue-400 rounded-md mx-auto px-4 p-3 opacity-100">
            PULL DOWN
          </button>
        </div>
        <div className="h-[30%] w-[50%]  ">
          <img src={bgAboutus} alt="" className="h-[100%] w-[100%]" />
        </div>
      </div>
      <div className="h-[400px] w-full flex justify-around mb-10 ">
        <div className="w-[40%]  flex flex-col gap-3">
          <span className="text-[#2b1999] flex items-center gap-1 "><img src={iconAboutus} alt=""className=" w-[2%] h-[2%]" />LUNAREDGE-OUR VISION</span>
          <h3 className="text-3xl font-bold">Driving Innovation: Our Vision</h3>
          <p>
            At Lunar Edge Pvt. Ltd., our mission is to transform the digital
            landscape by providing cutting-edge IT solutions that drive growth,
            enhance efficiency, and promote sustainability for our clients. We
            aim to be the trusted partner businesses rely on to successfully
            navigate the complexities of the digital world.</p> <p>At Lunar Edge Pvt.
            Ltd., our mission is to empower businesses through technology. By
            leveraging innovation and utilizing advanced technologies like HTML,
            CSS, JavaScript, Java, React, Node.js, Python, Android, iOS,
            Express, MongoDB, and AWS, we drive growth, efficiency, and
            sustainability for our clients. With our customized IT solutions and
            unwavering commitment to excellence, we aspire to be the catalyst
            for positive change in the digital landscape.
          </p>
        </div>
        <img src={ourVision} alt="" className="w-[26%]"/>
      </div>
    </div>
  );
};
