import React, { useEffect, useState } from "react";

const TimeLine = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const timeline = document.querySelector(".timeline");
    const timelinePosition = timeline.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (timelinePosition < screenPosition - 150) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const events = [
    {
      date: "20-08-2019",
      title: "Birthday",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "🎂",
      type: "type1",
    },
    {
      date: "20-08-2019",
      title: "Lunch",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "🍔",
      type: "type2",
    },
    {
      date: "20-08-2019",
      title: "Exercise",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "🏋️",
      type: "type3",
    },
    {
      date: "20-08-2019",
      title: "Meeting",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "📅",
      type: "type1",
    },
  ];

  // Define a set of colors for the lines
  const lineColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

  return (
    <div className="timeline-container flex flex-col items-center justify-center mx-[10%] p-12">
      <h2 className="text-4xl font-light my-10 text-gray-700">A clean timeline design, with animated points</h2>
      <div className={`timeline relative flex flex-col w-full md:w-3/4`}>
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline__event relative flex items-center w-full mb-10 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            } ${visible ? "animate-fade-slide" : "opacity-0"}`}
          >
            <div className="timeline__event__icon relative flex items-center justify-center bg-gray-800 text-white w-16 h-16 rounded-full">
              <span className="text-3xl">{event.icon}</span>
              {index !== events.length - 1 && (
                <div
                  className={`timeline__event__line absolute w-px h-[150px] top-full left-1/2 transform -translate-x-1/2 ${
                    lineColors[index % lineColors.length]
                  }`}
                ></div>
              )}
            </div>


            <div className=" bg-gradient-to-r from-[#a6a6a6] to-[#ffffff] p-6 shadow-lg rounded-r-lg w-full">
              <div className="text-xl font-bold text-gray-800 uppercase mb-2">
                {event.title}
              </div>
    
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
