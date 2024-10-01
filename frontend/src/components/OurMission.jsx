import React from "react";


const OurMission = ({title,subtitle,content,vidiosrc,vidiotitle}) => {
  return (
    <div className="flex w-full h-[600px] px-9 ">
      <div className="w-[50%] h-[80%] text-3xl font-light flex flex-col justify-evenly pr-6">
        <span className="">{title}</span>
        <p className="text-left">
         {subtitle}
        </p>
        <p className="text-left ">
         {content}
        </p>
      </div>
      <div className="w-[50%] relative flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
        >
          <source src={vidiosrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute text-white text-3xl font-semibold w-[50%] text-center rounded-lg">
          {vidiotitle}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
