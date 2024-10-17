import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewAddVacancy from '../components/NewAddVacancy/NewAddVacancy.jsx';
import PopupCareer from './PopupCareer';
import { API } from '../helper/index.js';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import NewUpdateVacancy from './NewUpdateVacancy/NewUpdateVacancy.jsx';

// Component for Job Opening
const JobOpening = ({ jobTitle, experience, location, togglePopup, jobId , jobSummary, keyResponsibilities, qualificationAndSkills, preferredQualifications, whatWeOffer , fetchVacancyDetails}) => {
  
  const { user } = useSelector((state) => state.user);
  const [updateVacancy, setUpdateVacancy] = useState('');
  const [deleteVacancy, setDeleteVacancy] = useState('');

  const handleEditClose = () => {
    setUpdateVacancy('');
  };

  const handleDeleteClose=()=>{
    setDeleteVacancy('')
  }

  return (
    <div className="border-2 w-full border-black p-2 md:p-6 rounded-xl flex flex-row lg:justify-between items-start md:items-center">
      <div className="mb-4 md:mb-0 w-[70%] lg:w-auto text-left">
        <h2 className="text-sm md:text-lg text-[#2e2e30]">ON SITE</h2>
        <h2
          className="text-md md:text-2xl w-[80%] lg:w-[100%] font-semibold text-[#160962]"
          dangerouslySetInnerHTML={{ __html: jobTitle }}
        />
        <div className="flex text-xs md:text-sm flex-row space-x-2 md:space-x-4 mt-4 text-gray-600">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="px-1">&#x1F4BC;</span> <span dangerouslySetInnerHTML={{ __html: experience }} />
          </div>
          <div className="flex items-center">
            <span className="px-1">&#x1F4CD;</span> <span dangerouslySetInnerHTML={{ __html: location }} />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 items-center justify-center'>
        <button
          className="w-[30%] md:w-auto text-xs md:text-sm bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white px-2 py-2 md:px-6 md:py-3 rounded-3xl md:font-semibold md:tracking-wider"
          onClick={() => togglePopup(jobId)}
        >
          Apply Now
        </button>
        {user?.role === "ADMIN" && (
          <div className="flex items-center justify-between w-[60%]">
            {/* edit  */}
            <FaRegEdit className="text-xl text-black cursor-pointer hover:text-red-500" onClick={() => {
              setUpdateVacancy(jobId);
            }} />

            {/* edit-particular-vacancy popup  */}
            {updateVacancy !== '' && (
              <NewUpdateVacancy
                id={jobId}
                fetchVacancyDetails={fetchVacancyDetails}
                onClose={handleEditClose}
                prevJobTitle={jobTitle} // updated to use prev prefix
                prevExperience={experience} // updated to use prev prefix
                prevLocation={location} // updated to use prev prefix
                prevJobSummary={jobSummary} // updated to use prev prefix
                prevKeyResponsibilities={keyResponsibilities} // updated to use prev prefix
                prevQualificationAndSkills={qualificationAndSkills} // updated to use prev prefix
                prevPreferredQualifications={preferredQualifications} // updated to use prev prefix
                prevWhatWeOffer={whatWeOffer} // updated to use prev prefix
              />
            )}

            {/* delete  */}
            <MdDeleteOutline className="text-2xl cursor-pointer hover:text-red-500" onClick={() => {
              setDeleteVacancy(jobId);
            }} />
          </div>
        )}
      </div>
    </div>
  );
};

const MiddleCareer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null); // Store the selected job ID

  // Function to toggle popup visibility and set jobId
  const togglePopup = (jobId) => {
    setSelectedJobId(jobId);
    setIsPopupOpen(!isPopupOpen);
  };

  const { user } = useSelector((state) => state.user);
  const [showAddVacancy, setShowAddVacancy] = useState(false);
  
  const [data, setData] = useState([]);

  const handleClose = () => {
    setShowAddVacancy(false);
  };

  const fetchVacancyDetails = async () => {
    try {
      const response = await fetch(API.getAllVacancy.url, {
        method: API.getAllVacancy.method,
      });
      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVacancyDetails();
  }, []);

  return (
    <div className="bg-white min-h-screen w-full flex flex-col justify-center items-center">
      <div className="w-[95%] md:w-[80%] px-4 py-8">
        <div className="flex flex-col justify-center items-center py-2">
          <h1 className="text-center text-3xl md:text-4xl font-semibold text-black mb-8">Openings</h1>
          {user?.role === 'ADMIN' ? (
            <button
              className="w-[30%] md:w-auto text-xs md:text-sm bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white px-2 py-2 md:px-6 md:py-3 rounded-3xl md:font-semibold md:tracking-wider"
              onClick={() => setShowAddVacancy(true)}
            >
              Add New Vacancy
            </button>
          ) : (
            ''
          )}
        </div>

        <div className="space-y-6 w-full">
          {data?.map((job, index) => (
            <JobOpening key={index} {...job} togglePopup={togglePopup} jobId={job._id} fetchVacancyDetails={fetchVacancyDetails} />
          ))}
        </div>
      </div>

      {/* show new vacancy form when button is clicked */}
      {showAddVacancy && <NewAddVacancy onClose={handleClose} fetchVacancyDetails={fetchVacancyDetails} />}

      {/* Show the popup if isPopupOpen is true and pass the selectedJobId */}
      {isPopupOpen && <PopupCareer jobId={selectedJobId} togglePopup={togglePopup} />}
    </div>
  );
};

export default MiddleCareer;
