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

  return (
    <div className="bg-purple-100 rounded-xl p-4 shadow-md px-10">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleContent}
      >
        <h2 className="text-2xl font-semibold text-[#160962] flex items-center">
          {jobTitle}
          <span className="ml-2">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </h2>
        <button className="bg-[#160962] rounded-full hover:bg-[#4636a1] text-white  py-2 px-4 ">
          Apply Now
        </button>
      </div>
      {/* Always visible job details */}
      <div className="mt-2 flex justify-between text-lg">
        <div>
          <p className="text-gray-700">{location}</p>
          <p className="text-gray-700">{experience}</p>
        </div>
        <p className="text-gray-500 mt-2">{postedDate}</p>
      </div>
      {/* Conditionally visible job description */}
      {isOpen && (
        <div className="mt-4 space-y-4 ">
          <hr className=" border border-[#160962]" />
          <h3 className="text-xl font-semibold text-indigo-600">
            Job Description:
          </h3>
          <p className="mt-2 text-gray-700">
            <strong>Role Purpose:</strong> {jobDescription.rolePurpose}
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Expert:</strong> {jobDescription.expert}
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Master:</strong> {jobDescription.master}
          </p>
        </div>
      )}
    </div>
  );
};
