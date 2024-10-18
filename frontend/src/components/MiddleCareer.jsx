import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewAddVacancy from '../components/NewAddVacancy/NewAddVacancy.jsx';
import PopupCareer from './PopupCareer';
import { API } from '../helper/index.js';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import NewUpdateVacancy from './NewUpdateVacancy/NewUpdateVacancy.jsx';
import { MdOutlineLocationOn } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";



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
    <div className="border-2 w-full border-black dark:border-white p-2 md:p-6 rounded-xl flex flex-row lg:justify-between items-start md:items-center">
      <div className="mb-4 md:mb-0 w-[70%] lg:w-auto text-left">
        <h2 className="text-sm md:text-lg text-[#2e2e30] dark:text-white">ON SITE</h2>
        <h2
          className="text-md md:text-2xl w-[80%] lg:w-[100%] font-semibold text-[#160962] dark:text-pink-500"
          dangerouslySetInnerHTML={{ __html: jobTitle }}
        />
        <div className="flex text-xs md:text-sm md:flex-row flex-col  md:space-x-4 mt-4 text-gray-600 dark:text-white">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="px-1"><FaBriefcase className='text-pink-500' />
            </span> <span dangerouslySetInnerHTML={{ __html: experience }} />
          </div>
          <div className="flex items-center">
            <span className='px-1'><MdOutlineLocationOn className='text-pink-500' /></span> <span dangerouslySetInnerHTML={{ __html: location }} />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 items-center justify-center'>
        <button
          className="w-[100%] md:w-auto text-xs md:text-sm bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white px-2 py-2 md:px-6 md:py-3 rounded-3xl md:font-semibold md:tracking-wider"
          onClick={() => togglePopup(jobId)}
        >
          Apply Now
        </button>
        {user?.role === "ADMIN" && (
          <div className="flex items-center justify-between w-[60%]">
            {/* edit  */}
            <FaRegEdit className="text-xl text-black cursor-pointer dark:text-white hover:text-red-500" onClick={() => {
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
            <MdDeleteOutline className="text-2xl cursor-pointer dark:text-white hover:text-red-500" onClick={() => {
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
    <div className="bg-white dark:bg-[#131313] min-h-screen w-full flex flex-col justify-center items-center">
      <div className="w-[95%] md:w-[80%] px-4 py-8">
        <div className="flex flex-col justify-center items-center py-2">
          <h1 className="text-center text-3xl md:text-4xl font-semibold dark:text-white text-black mb-[8rem]">Openings</h1>
          {user?.role === 'ADMIN' ? (
            <div className='flex gap-2 mx-auto justify-center'>
              <button
              className="w-[40%] md:w-auto text-xs md:text-sm bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white px-2 py-2 md:px-6 md:py-3 rounded-3xl md:font-semibold md:tracking-wider"
              onClick={() => setShowAddVacancy(true)}
            >
              Add New Vacancy
            </button>
            <button
              className="w-[40%] md:w-auto text-xs md:text-sm bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white px-2 py-2 md:px-6 md:py-3 rounded-3xl md:font-semibold md:tracking-wider"
              
            >
             Job Applicants
            </button>
            </div>
            
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


      {/* career bottom section  */}

      <div className="z-10 flex-col flex justify-center items-center  h-[250px] md:h-[450px] px-4">
       
       <p className="text-black dark:text-white text-md md:text-2xl max-w-5xl text-center mx-auto px-4">
         Don’t see a position that matches your skills? Send us your resume at{" "}
         <a
           href="mailto:hr@lunaredge.com"
           className="text-black dark:text-white underline"
         >
           hr@lunaredge.com
         </a>
         . We’d love to hear from you!
       </p>
     </div>
    </div>
  );
};

export default MiddleCareer;
