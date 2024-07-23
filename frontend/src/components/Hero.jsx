import React from 'react'
import Lottie from 'lottie-react'
import computer from '../assets/computer.json'
const Hero = () => {
  return (
    <div className="w-full  bg-white pt-16"> {/* Added pt-16 to account for fixed header height */}
        {/* Content for hero section */}
        <div className="flex justify-center items-center h-full text-white text-4xl font-bold">
          Welcome to Our Website
          <div>
             <Lottie animationData={computer}/>
          </div>
        </div>
      </div>
  )
}

export default Hero