import React from "react";
import hawaMahal from "../assets/hawaMahal.png";
import hawaMahalPhone from "../assets/hawaMahalPhone.png";
// import { useMediaQuery } from "react-responsive";
// const isExtraSmallDevice = useMediaQuery({ maxWidth: 699 });

const HawaMahal = () => {
  return (
    <div className="w-full h-[600px]">
         <img
            src={hawaMahal}
            alt="Picture of tagline"
            className="w-[90%] h-[80%] mx-auto object-contain"
          />
    </div>
  );
};

export default HawaMahal;
