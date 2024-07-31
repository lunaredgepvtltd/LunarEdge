import React from 'react'
import { useMediaQuery } from 'react-responsive';
const Offer = ({key,service,content}) => {
  
  const isSmallDevice = useMediaQuery({ maxWidth: 767 })
  return (
    <div data-aos={isSmallDevice ? undefined : "fade-up"} data-aos-delay="200"  className='w-[300px] h-[300px] md:w-[400px] md:h-[300px] bg-blue-100 flex flex-col p-6 shadow-xl hover:shadow-md hover:shadow-blue-600 rounded-xl md:m-6 cursor-pointer hover:bg-white transition-all duration-200 ease-in hover:scale-95' key={key} >
     <h2 className=' w-full text-center text-xl md:text-3xl font-semibold pt-5 '>{service}</h2>
     <span className='w-full text-center test-sm md:text-lg pt-8 text-slate-700'>{content}</span>
    </div>
  )
}

export default Offer