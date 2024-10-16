import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NewAddVacancy from '../components/NewAddVacancy/NewAddVacancy.jsx'
import PopupCareer from './PopupCareer';

// Component for Job Opening
const JobOpening = ({ title, experience, location, jobType, buttonText, togglePopup }) => {
  return (
    <div className="border-2 w-full border-black p-2 md:p-6 rounded-xl flex flex-row lg:justify-between items-start md:items-center">
      <div className="mb-4 md:mb-0 w-[70%] lg:w-auto text-left">
        {jobType && <h2 className="text-sm md:text-lg text-[#2e2e30]">{jobType}</h2>}
        <h2 className="text-md md:text-2xl w-[80%] lg:w-[100%] font-semibold text-[#160962]">{title}</h2>
        <div className="flex text-xs md:text-sm flex-row space-x-2 md:space-x-4 mt-4 text-gray-600">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="px-1">&#x1F4BC;</span> {experience}
          </div>
          <div className="flex items-center">
            <span className="px-1">&#x1F4CD;</span> {location}
          </div>
        </div>
      </div>
      <button
        className="w-[30%] md:w-auto text-xs md:text-sm bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white px-2 py-2 md:px-6 md:py-3 rounded-3xl md:font-semibold md:tracking-wider"
        onClick={togglePopup} // Show popup on click
      >
        {buttonText}
      </button>
    </div>
  );
};

const MiddleCareer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const jobOpenings = [
    {
      title: 'UI/UX Designer',
      experience: '2-5 years',
      location: 'Jaipur, India',
      jobType: 'ON SITE',
      buttonText: 'Apply Now',
    },
    {
      title: 'Digital Marketing Content Writer',
      experience: '2+ years',
      location: 'Jaipur, India',
      jobType: 'ON SITE',
      buttonText: 'Apply Now',
    },
  ];

  const { user } = useSelector((state) => state.user);
  const [showAddVacancy,setShowAddVacancy] = useState(false);
  const handleClose = ()=>{
    setShowAddVacancy(false)
    }
  

  return (
    <div className="bg-white min-h-screen w-full flex flex-col justify-center items-center">
      <div className="w-[95%] md:w-[80%] px-4 py-8">
        <div className='flex flex-col justify-center items-center py-2'><h1 className="text-center text-3xl md:text-4xl font-semibold text-black mb-8">Openings</h1>
        {user?.role === 'ADMIN' ? <button className={`w-[30%] md:w-auto text-xs md:text-sm bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white px-2 py-2 md:px-6 md:py-3 rounded-3xl md:font-semibold md:tracking-wider`} onClick={()=>{setShowAddVacancy(true)}}>Add New Vacancy</button> : '' }
        </div>
        
        <div className="space-y-6 w-full">
          {jobOpenings.map((job, index) => (
            <JobOpening key={index} {...job} togglePopup={togglePopup} />
          ))}
        </div>
      </div>
     
     {/* showin-newVacancy-form when button is clicked  */}
     {showAddVacancy && <NewAddVacancy onClose={handleClose} />}

      {/* Show the popup if isPopupOpen is true */}
      {isPopupOpen && <PopupCareer togglePopup={togglePopup} />}
    </div>
  );
};

export default MiddleCareer;
