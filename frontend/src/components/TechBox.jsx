import React from 'react'

const TechBox = ({logo,name}) => {
  return (
    <div className='flex flex-col justify-center items-center rounded-lg bg-blue-400 border h-[100px] w-[100px] md:w-[150px] md:h-[150px] shadow-md hover:bg-black transition-all duration-300 cursor-pointer text-white hover:shadow-white hover:scale-105'>
        <span>
            {logo}
        </span>
        <span className='text-sm md:text-xl text-center md:w-[150px]'>{name}</span>
    </div>
  )
}

export default TechBox