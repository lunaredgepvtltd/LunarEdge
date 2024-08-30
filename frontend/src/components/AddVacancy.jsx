import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { API } from '../helper';

const AddVacancy = ({ onClose,setVacancyData }) => {
  const [data, setData] = useState({
    jobTitle: "",
    location: "",
    experience: "",
    rolePurpose: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

  const { jobTitle, location, experience, rolePurpose } = data;
  console.log({ jobTitle, location, experience, rolePurpose } )

  if(!jobTitle || !location || !experience || !rolePurpose){
    console.log("please enter all details")
  }
    const response = await fetch(API.addNewVacancy.url,{
      method : API.addNewVacancy.method,
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify({ jobTitle, location, experience, rolePurpose })
    })

    const responseData = await response.json();

    if(responseData.success){
      setVacancyData((prev)=>[...prev,responseData.data])
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <div className='fixed inset-0 z-50 h-full w-full bg-white flex flex-col gap-2 justify-center items-center'>
      <form className="w-[70%] md:w-[40%] relative" onSubmit={handleSubmit}>
        <div className='absolute right-0 -top-3 text-3xl cursor-pointer text-red-500 transition-all duration-300' onClick={onClose}>
          <IoClose />
        </div>

        <div className="mb-5">
          <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Job Title</label>
          <input 
            type="text" 
            name="jobTitle" 
            value={data.jobTitle}
            onChange={handleChange}
            placeholder='enter job title'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required 
          />
        </div>

        <div className="mb-5">
          <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Job Location</label>
          <input 
            type="text" 
            name="location" 
            value={data.location}
            onChange={handleChange}
            placeholder='enter job location'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required 
          />
        </div>

        <div className="mb-5">
          <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Experience Required</label>
          <input 
            type="text" 
            name="experience" 
            value={data.experience}
            onChange={handleChange}
            placeholder='enter experience required like (0-1 years)'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required 
          />
        </div>

        <div className="mb-5">
          <label htmlFor="rolePurpose" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Role Purpose</label>
          <input 
            type="text" 
            name="rolePurpose" 
            value={data.rolePurpose}
            onChange={handleChange}
            placeholder='enter rolepurpose'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required 
          />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
}

export default AddVacancy;
