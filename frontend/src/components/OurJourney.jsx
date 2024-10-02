import React from "react";


const OurJourney = ({title,subtitle,content,vidiosrc,vidiotitle}) => {
  return (
    <div className="flex md:flex-row flex-col w-full h-[650px] md:h-[600px] md:px-9 px-4">
    <div className="md:w-[50%] w-[90%] h-[80%] md:text-3xl text-xs font-light flex flex-col justify-evenly pr-6">
      <span className="">{title}</span>
      <p className="text-left">
       {subtitle}
      </p>
      <p className="text-left ">
       {content}
      </p>
    </div>
    <div className="md:w-[50%] w-[100%] relative flex items-center justify-center">
      <video
        className="w-full h-full object-cover"
        loop
        muted
        autoPlay
      >
        <source src={vidiosrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute text-white text-xl md:text-3xl font-semibold w-[50%] text-center rounded-lg">
        {vidiotitle}
      </div>
    </div>
  </div>
  );
};

export default OurJourney;
