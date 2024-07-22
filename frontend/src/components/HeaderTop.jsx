import React from 'react'
import whatsapp from '../assets/whatsapp.png'
import linkedIn from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import phone from '../assets/phone-ringing.png'
const HeaderTop = () => {
  return (
    <div className='w-full h-11 bg-black fixed top-0 right-0'>
        <div className=' w-full h-full flex gap-1 md:gap-3 justify-end items-center pr-10 md:pr-40'>
          {/* whatsapp link  */}
          <a href=""><img src={whatsapp} alt="" className='w-8 h-8 mr-3 md:mr-0'/></a>

          <span className='text-gray-500 font-medium text-2xl'>|</span>
          
           {/* linkedIN  */}
          <a href=""><img src={linkedIn} alt="" className='w-8 h-8 hidden md:block'/></a>

          <span className='text-gray-500 font-medium text-2xl hidden md:block'>|</span>

          {/* gmail  */}

          <a href=""><img src={gmail} alt="" className='w-8 h-8 rounded-full hidden md:block'/></a>

          <span className='text-gray-500 font-medium text-2xl hidden md:block'>|</span>

          {/* phone-number  */}

          <div className='flex gap-2 justify-center items-center'>
          <div className='w-8 h-8 rounded-full bg-white p-1'><a href=""><img src={phone} alt="" /></a></div>
          <span className='text-white text-sm'>+91-7760701155</span>
          </div>
          
        </div>
    </div>
  )
}

export default HeaderTop