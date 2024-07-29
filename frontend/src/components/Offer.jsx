import React from 'react'

const Offer = ({service,content}) => {
  return (
    <div className='w-[300px] h-[300px] md:w-[400px] md:h-[300px] bg-blue-100 flex flex-col p-6 shadow-xl rounded-xl md:m-6 cursor-pointer hover:bg-white transition-all duration-300 ease-in'>
     <h2 className=' w-full text-center text-xl md:text-3xl font-semibold pt-5 '>{service}</h2>
     <span className='w-full text-center test-sm md:text-lg pt-8 text-slate-700'>{content}</span>
    </div>
  )
}

export default Offer