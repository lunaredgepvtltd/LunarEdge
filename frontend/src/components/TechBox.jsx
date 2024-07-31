import React from 'react';
import '../App.css'; // Import the CSS file

const TechBox = ({ logo, name }) => {
  return (
    <div className='tech-box flex flex-col justify-center items-center rounded-lg bg-blue-400 border h-[100px] w-[100px] md:w-[150px] md:h-[150px] shadow-md transition-all duration-300 cursor-pointer text-white hover:bg-black'>
      <span className='tech-content'>
        {logo}
      </span>
      <span className='text-sm md:text-xl text-center md:w-[150px]'>{name}</span>
    </div>
  );
}

export default TechBox;
