import React from "react";
import hawaMahal from "../assets/hawaMahal.png";
import hawaMahalPhone from "../assets/hawaMahalPhone.png";
import hawaMahalDarkMode from "../assets/hawaMahalDarkMode.png";
import hawaMahalDarkModeMobile from "../assets/hawaMahalDarkModeMobile.png";
import { useMediaQuery } from "react-responsive";
import { useOutletContext } from "react-router-dom";


const HawaMahal = () => {
  const isExtraSmallDevice = useMediaQuery({ maxWidth: 699 });
  const { darkMode } = useOutletContext();

  const imageSrc = isExtraSmallDevice 
  ? (darkMode ? hawaMahalDarkModeMobile : hawaMahalPhone) 
  : (darkMode ? hawaMahalDarkMode : hawaMahal);

  return (
  
    <div className="w-full h-[450px] md:h-[600px] my-7">
       {console.log(darkMode)}
         <img
            src={`${imageSrc}`}
            alt="Picture of tagline"
            className="w-[90%] h-[95%] md:h-[80%] mx-auto object-contain"
          />
    </div>
  );
};

export default HawaMahal;
