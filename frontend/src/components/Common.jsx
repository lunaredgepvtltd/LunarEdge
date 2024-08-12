import React from 'react'
import { Link } from 'react-router-dom'

const Common = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <div className='flex flex-col justify-center gap-8'>
      <h1 className='text-3xl md:text-8xl'>Work Under Processing</h1>
      <Link to={'/'} className='p-2 bg-green-400 text-white rounded-lg hover:text-green-400 hover:bg-white border border-green-400 transition-all duration-300 w-32'>Go To Home</Link>
      </div>
    </div>
  )
}

export default Common