import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const ServicesNewTheme = () => {

  const cards = [
    { id: 1, title: "Web Development" },
    { id: 2, title: "Software App Development" },
    { id: 3, title: "IT Consulting" },
    { id: 4, title: "Cloud Solution" },
    { id: 5, title: "AI & ML Solution" },
    { id: 6, title: "NEXT- GEN GAME DEVELOPMENT" },
    { id: 7, title: "Cyber Security Services" },
    { id: 8, title: "HardWare Supply And  Solution" },
    { id: 9, title: "IT Consulting" },
    { id: 10, title: "Cyber Security" },
  ];

  return (
      <div className="  bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] pb-10 ">
            <h1 className="text-5xl  mb-2 py-[50px] text-center">
              What we offer
            </h1>
      
            <h2 className="text-2xl text-gray-600 mb-[70px] text-center">
              with technology we advance your business
            </h2>
      
            {/* cards container */}
      
            <div className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-[100px] px-4 ">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="border rounded-[25px] p-4 h-[300px] bg-[#feebf7] flex flex-col justify-between"
                >
                  <h3 className="text-xl font-semibold mb-4 text-center mx-2">{card.title}</h3>
                  <div className="flex items-center justify-center mt-10">
                    <button className="text-blue-500">
                      Read More
                    </button>
                    <MdKeyboardArrowRight className="text-blue-500 " />
                  </div>
                </div>
              ))}
            </div>
          </div>
      
    );
  
}

export default ServicesNewTheme