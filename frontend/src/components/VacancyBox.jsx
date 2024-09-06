import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import DeleteVacancy from "./deleteVacancy";
import { useSelector } from "react-redux";
import UpdateVacancy from "./UpdateVacancy";
import {JobForm} from '../components/JobForm.jsx'
export const VacancyBox = ({
  jobTitle,
  location,
  experience,
  rolePurpose,
  id,
  description,
  requirements,
  fetchDetails,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteVacancyItem, setDeleteVacancyItem] = useState(false);
  const [updateVacancy,setUpdateVacancy] = useState(false);
  const [showVacancyForm,setShowVacancyForm] = useState(false)

  const { user } = useSelector((state) => state.user);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteClose = () => {
    setDeleteVacancyItem(false);
  };

  const handleEditClose = ()=>{
    setUpdateVacancy(false)
  }

  const handleApplyNowClick = (event) => {
    event.preventDefault();
    setShowVacancyForm(!showVacancyForm)
  };

  return (
    <>
      <div className="bg-[#edeafa] rounded-xl p-3 shadow-md px-2 md:px-6 lg:px-10 relative">
        {/* delete-button and edit-button  */}
        {user?.role === "ADMIN" && (
          <div
            className="absolute right-4 bottom-4 flex items-center gap-2"
          >
            {/* edit  */}
            <FaRegEdit className="text-lg cursor-pointer hover:text-red-500"  onClick={() => {
              setUpdateVacancy(!updateVacancy);
            }} />
            {/* delete  */}
            <MdDeleteOutline className="text-xl cursor-pointer hover:text-red-500" onClick={() => {
              setDeleteVacancyItem(true);
            }} />
          </div>
        )}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleContent} // Toggle job details visibility
        >
          <div className="flex items-center text-sm md:text-2xl">
            <p className="  font-semibold text-[#160962]">{jobTitle}</p>
            <span className="md:ml-2 ml-1 md:text-2xl text-xs ">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          <button
            className="bg-[#160962] rounded-full hover:bg-[#4636a1] text-white py-2 px-2 md:px-4 text-xs md:text-base"
            onClick={handleApplyNowClick} // Prevent event from toggling the job details
          >
            Apply Now
          </button>
        </div>
        {/* Always visible job details */}
        <div className="mt-2 flex flex-col md:flex-row justify-between text-sm md:text-lg items-start">
          <div>
            <p className="text-gray-500">
              Location: <span className="text-gray-700">{location}</span>
            </p>
            <p className="text-gray-500">
              Experience: <span className="text-gray-700">{experience}</span>
            </p>
          </div>
        </div>
        {/* Conditionally visible job description */}
        {isOpen && (
          <div className="mt-4 space-y-4">
            <hr className="border border-[#160962]" />
            <h3 className="text-lg md:text-xl font-semibold text-indigo-600">
              Job Description:
            </h3>
            <p className="font-medium p-2">{description}</p>
            <div className="mt-2 text-[17px] text-gray-700">
              <p>
                <strong>Responsibilities:</strong>
              </p>
              <ul className=" list-disc px-7 py-2 marker:text-indigo-600">
                {rolePurpose?.map((el, idx) => (
                  <li key={idx} className="text-gray-500 py-1 font-normal">
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            {requirements?.length > 0 && (
              <div className="mt-2 text-[17px] text-gray-700">
                <p>
                  <strong>Requirements:</strong>
                </p>
                <ul className=" list-disc px-7 py-2 marker:text-indigo-600">
                  {requirements?.map((el, idx) => (
                    <li key={idx} className="text-gray-500 py-1 font-normal">
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {/* delete-vacancy-box */}
        <div className=" absolute z-50 right-3">
          {deleteVacancyItem && (
            <DeleteVacancy
              onClose={handleDeleteClose}
              id={id}
              fetchDetails={fetchDetails}
            />
          )}
        </div>

         {/* udpate-vacancy-box */}
         <div className=" absolute z-50 right-3">
          {updateVacancy==true && (
            <UpdateVacancy
            onClose={handleEditClose}
            id={id}
            fetchDetails={fetchDetails}
            prevJobTitle={jobTitle}
            prevLocation={location}
            prevExperience={experience}
            prevRolePurpose={rolePurpose}
            prevDescription={description}
            prevRequirements={requirements}
            />
          )}
        </div>

        {/* showing-vacancy-form  */}
        {showVacancyForm && <JobForm/>}

      </div>
    </>
  );
};
