import React from "react";

const OurJourney = ({ title, subtitle, content, vidiosrc, vidiotitle }) => {
  return (
    <div className="flex md:flex-row flex-col w-full h-[650px] md:h-[600px] md:px-9 px-4 bg-white dark:bg-black">
      <div className="md:w-[50%] w-[95%] h-[80%] md:text-3xl dark:text-white text-sm font-normal flex flex-col justify-evenly pr-6">
        <span className="font-light md:text-3xl text-lg">{title}</span>
        <p className="text-left">{subtitle}</p>
        <p className="text-left ">{content}</p>
      </div>
      <div className="md:w-[50%] w-[100%] relative flex items-center justify-center">
        <video
          className="w-full h-full object-cover opacity-75"
          loop
          muted
          autoPlay
        >
          <source src={vidiosrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute text-black dark:text-white text-xl md:text-5xl font-semibold w-[60%] md:w-[80%] text-center rounded-lg">
          {vidiotitle}
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
