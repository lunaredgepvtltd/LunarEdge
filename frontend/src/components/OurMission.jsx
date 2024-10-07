import React from "react";


const OurMission = ({title,subtitle,content,vidiosrc,vidiotitle}) => {
  return (
    <div className=" flex md:flex-row flex-col w-[95%] mx-auto h-[600px]  md:px-9 px-4 ">
      <div className="md:w-[50%] w-[90%] h-[23%] md:h-[90%] xl:text-5xl lg:text-4xl md:text-3xl text-sm font-normal flex flex-col justify-evenly pr-6">
        <span className="font-light lg:text-4xl md:text-3xl text-lg">{title}</span>
        <p className="text-left md:w-[90%] leading-tight">
         {subtitle}
        </p>
        {/* <p className="text-left ">
         {content}
        </p> */}
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
        <div className="absolute text-black text-2xl md:text-5xl font-semibold w-[80%] md:w-[80%] text-center rounded-lg">
          {vidiotitle}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
