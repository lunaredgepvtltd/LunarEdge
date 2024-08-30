import React from 'react';
import '../App.css'; // Import the CSS file

const TechBox = ({ logo, name }) => {
  return (
    <div className='tech-box flex flex-col justify-center items-center rounded-lg bg-blue-400 border h-auto w-[80%] shadow-md transition-all duration-300 cursor-pointer text-white hover:bg-black m-2'>
      <span className='tech-content'>
        {logo}
      </span>
      <span className='text-sm md:text-lg text-center xl:w-[59%]'>{name}</span>
    </div>
  );
}

export default TechBox;
