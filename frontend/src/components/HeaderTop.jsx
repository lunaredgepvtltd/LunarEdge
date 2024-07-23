import React from 'react'
import whatsapp from '../assets/whatsapp.png'
import linkedIn from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import phone from '../assets/phone-ringing.png'
const HeaderTop = () => {
  return (
    <div className='w-full h-10 bg-black fixed top-0 right-0'>
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
            {/* phone logo  */}
          <div className='w-8 h-8 rounded-full bg-white p-1'><a href=""><img src={phone} alt="" /></a></div>
           {/* phone no  */}
          <div className='flex flex-col group cursor-pointer'>
          <span className='text-white text-sm hover:text-red-600'>+91-7760701155</span>
          <div className='w-0 group-hover:w-full h-[1px] bg-red-600 transition-all duration-500'></div>
          </div>
          </div>

          <span className='text-gray-500 font-medium text-2xl hidden md:block'>|</span>

          {/* HR phone number  */}

          <div className='flex flex-col group cursor-pointer text-center items-center'>
          <span className='text-white text-sm hover:text-red-600'>+91-99999999 (HR)</span>
          <div className='w-0 group-hover:w-full h-[1px] bg-red-600 transition-all duration-500'></div>
          </div>

          <span className='text-sm text-[#0092ff]'>We answer our phones!</span>
        </div>
    </div>
  )
}

export default HeaderTop