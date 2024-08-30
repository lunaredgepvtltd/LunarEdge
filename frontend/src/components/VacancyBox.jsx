import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DeleteVacancy from "./deleteVacancy";
import { useSelector } from "react-redux";

export const VacancyBox = ({
  jobTitle,
  location,
  experience,
  rolePurpose,
  id,
  fetchDetails
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteVacancyItem,setDeleteVacancyItem] = useState(false)

  const {user} = useSelector(state=>state.user);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteClose = ()=>{
    setDeleteVacancyItem(false)
    }
  

  const handleApplyNowClick = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to parent div
    // Handle Apply Now button click logic here (e.g., show a form)
  };

  return (
    <>
    <div className="bg-[#edeafa] rounded-xl p-3 shadow-md px-2 md:px-6 lg:px-10 relative">
      {/* delete-button  */}
      {user?.role === "ADMIN" && 
      <div className="absolute right-4 bottom-4" onClick={()=>{setDeleteVacancyItem(true)}}>
      <MdDelete className="text-lg cursor-pointer hover:text-red-500"/>
      </div>}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleContent} // Toggle job details visibility
      >
        <div className="flex items-center text-sm md:text-2xl">
          <p className="  font-semibold text-[#160962]">
            {jobTitle}
          </p>
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
          <p className="text-gray-500">Location: <span className="text-gray-700">{location}</span></p>
          <p className="text-gray-500">Expericence: <span className="text-gray-700">{experience}</span></p>
        </div>
      </div>
      {/* Conditionally visible job description */}
      {isOpen && (
        <div className="mt-4 space-y-4">
          <hr className="border border-[#160962]" />
          <h3 className="text-lg md:text-xl font-semibold text-indigo-600">
            Job Description:
          </h3>
          <p className="mt-2 text-sm md:text-lg text-gray-700">
            <strong>Role Purpose:</strong> {rolePurpose}
          </p>
        
        </div>
        
      )}
    {/* delete-vacancy-box */}
    <div className=" absolute z-50 right-3">
     {deleteVacancyItem && <DeleteVacancy onClose={handleDeleteClose} id={id} fetchDetails={fetchDetails}/>}
     </div>
    </div>
    </>
  );
};
