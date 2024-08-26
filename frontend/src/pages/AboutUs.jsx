import React from "react";
import bgAboutus from "../assets/bgAboutus.png";
import "../App.css";
import ourVision from "../assets/ourVision.png";
import ourMission from "../assets/ourMission.png";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import '../dynamic.scss'
import '../pages/Header.jsx';

export const AboutUs = () => {
  return (
    <div className="h-full w-full bg-gray-100">
      <div className="h-[1050px] flex flex-col items-center justify-evenly  ">
        {/* center text content container    */}
        <div className="flex flex-col gap-6 opacity-70 pt-20">
          <span className="text-xl mx-auto bg-gray-700 p-1 rounded-md text-white">
            LUNAREDGE
          </span>
          <div className="text-4xl flex flex-col items-center gap-3">
            <h1>
              “Dedicated To Transforming Your Digital <br />
            </h1>
            <h1> Vision Into Reality.”</h1>
          </div>
        
          
          <div class="btn btn__secondary mx-auto bg-purple-200"><p>Get Connect</p></div>
          
        </div>

        {/* circular images div */}
        <div className="h-[35%] w-[69%]  ">
          <img src={bgAboutus} alt="" className="h-[100%] w-[100%]" />
        </div>
      </div>

      {/* our vision part  */}
      <div id="our-vision" className="h-[600px] lg:flex items-end">
        <div className="h-[450px] w-full flex justify-around">
          <div className="w-[40%] flex flex-col gap-4">
            <span className="text-[#2b1999]   flex items-center gap-1 ">
              Our Vision
            </span>
            <h3 className="text-3xl font-semibold">
              Driving Innovation: Our Vision
            </h3>
            <div className="flex flex-col gap-6 pr-4 h-[91%]">
              {" "}
              <p>
                At LunarEdge, our mission is to transform the digital landscape
                by providing cutting-edge IT solutions that drive growth,
                enhance efficiency, and promote sustainability for our clients.
                We aim to be the trusted partner businesses rely on to
                successfully navigate the complexities of the digital world.
              </p>
              <p>
                At LunarEdge, our mission is to empower businesses through
                technology. By leveraging innovation and utilizing advanced
                technologies like HTML, CSS, JavaScript, Java, React, Node.js,
                Python, Android, iOS, Express, MongoDB, and AWS, we drive
                growth, efficiency, and sustainability for our clients. With our
                customized IT solutions and unwavering commitment to excellence,
                we aspire to be the catalyst for positive change in the digital
                landscape.
              </p>
            </div>
          </div>
          <img src={ourVision} alt="" className="w-[26%]" />
        </div>
      </div>
      {/* our mission part   */}
      <div className="h-[700px] flex items-center">
        <div className="h-[450px] w-full flex justify-around  items-center ">
          <img src={ourMission} alt="" className="w-[26%] h-full" />
          <div className="w-[40%] h-auto  flex flex-col gap-3 ">
            <span className="text-[#2b1999] flex gap-1 ">Our Mission</span>
            <p className="text-3xl font-semibold">
              Innovating for Success: Our <br />
              Technology Mission
            </p>
            <p className="w-[90%]">
              At LunarEdge, our vision is to be the leading force driving
              digital transformation and innovation on a global scale. We
              envision a future where businesses of all sizes have access to the
              tools and expertise necessary to thrive in an increasingly digital
              world.
            </p>
            <div className="h-[200px] w-[70%] flex flex-col gap-3 p-3 text-sm">
              <div className="flex gap-5  h-[41%] p-2">
                <img src={m1} alt=" " />
                <p>
                  Network Infrastructure Solutions Build a reliable and secure
                  network infrastructure that supports your business operations
                  enables seamless
                </p>
              </div>
              <div className="flex  gap-5 h-[41%] p-2">
                <img src={m2} alt=" " />
                <p>
                  Managed It Services Focus on your core business activities
                  while we take care of your IT needs with our managed IT
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
