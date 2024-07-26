import React from 'react'

const TechBox = ({name,logo}) => {
  return (
    <div className=" flex flex-col justify-center items-center rounded-lg bg-blue-400 border w-[150px] h-[150px] shadow-md
     hover:bg-black  transition-all duration-300 cursor-pointer text-white hover:shadow-white"> 
    <span >
      {logo}
    </span>
    <span className="text-xl  text-center w-[150px]" >{name}</span>
  </div>
  )
}

export default TechBox

// this is snippet of component rafce