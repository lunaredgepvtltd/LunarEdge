import React from 'react'
import { IoClose } from 'react-icons/io5'

const AddVacancy = ({onClose}) => {
  return (
    <div className='fixed inset-0 z-50 h-full w-full bg-white flex flex-col gap-2 justify-center items-center'>
    
<form class="w-[70%] md:w-[40%] relative">
<div className='absolute right-0 -top-3 text-3xl cursor-pointer text-red-500 transition-all duration-300' onClick={onClose}>
          <IoClose />
        </div>
  <div class="mb-5">
    <label for="jobTitle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Job Title</label>
    <input type="jobTitle"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Job Location</label>
    <input type="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="experience" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Experience Required</label>
    <input type="experience" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="rolePurpose" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter rolePurpose</label>
    <input type="rolePurpose" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
  )
}

export default AddVacancy