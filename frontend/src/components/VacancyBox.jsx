import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const VacancyBox = ({
  jobTitle,
  location,
  experience,
  postedDate,
  jobDescription,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const handleApplyNowClick = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to parent div
    // Handle Apply Now button click logic here (e.g., show a form)
  };

  return (
    <div className="bg-[#edeafa] rounded-xl p-4 shadow-md px-4 md:px-6 lg:px-10">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleContent} // Toggle job details visibility
      >
        <div className="flex items-center">
          <p className="text-md md:text-2xl font-semibold text-[#160962]">
            {jobTitle}
          </p>
          <span className="md:ml-2 ml-0 text-md md:text-2xl">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        <button
          className="bg-[#160962] rounded-full hover:bg-[#4636a1] text-white py-2 px-4 text-sm md:text-base"
          onClick={handleApplyNowClick} // Prevent event from toggling the job details
        >
          Apply Now
        </button>
      </div>
      {/* Always visible job details */}
      <div className="mt-2 flex flex-col md:flex-row justify-between text-sm md:text-lg items-start">
        <div>
          <p className="text-gray-700">{location}</p>
          <p className="text-gray-700">{experience}</p>
        </div>
        <p className="text-gray-500 mt-2 md:mt-0">{postedDate}</p>
      </div>
      {/* Conditionally visible job description */}
      {isOpen && (
        <div className="mt-4 space-y-4">
          <hr className="border border-[#160962]" />
          <h3 className="text-lg md:text-xl font-semibold text-indigo-600">
            Job Description:
          </h3>
          <p className="mt-2 text-sm md:text-lg text-gray-700">
            <strong>Role Purpose:</strong> {jobDescription.rolePurpose}
          </p>
          <p className="mt-2 text-sm md:text-lg text-gray-700">
            <strong>Expert:</strong> {jobDescription.expert}
          </p>
          <p className="mt-2 text-sm md:text-lg text-gray-700">
            <strong>Master:</strong> {jobDescription.master}
          </p>
        </div>
      )}
    </div>
  );
};
