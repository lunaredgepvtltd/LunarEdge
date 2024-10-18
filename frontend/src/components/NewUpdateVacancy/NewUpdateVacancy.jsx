import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { API } from "../../helper";
import { toast } from "react-toastify";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewUpdateVacancy = ({
  id,
  onClose,
  fetchVacancyDetails,
  prevJobTitle, // renamed prop
  prevExperience, // renamed prop
  prevLocation, // renamed prop
  prevJobSummary, // renamed prop
  prevKeyResponsibilities, // renamed prop
  prevQualificationAndSkills, // renamed prop
  prevPreferredQualifications, // renamed prop
  prevWhatWeOffer // renamed prop
}) => {

  // Initialize state with props
  const [jobTitle, setJobTitle] = useState(prevJobTitle || '');
  const [location, setLocation] = useState(prevLocation || '');
  const [experience, setExperience] = useState(prevExperience || '');
  const [jobSummary, setJobSummary] = useState(prevJobSummary || '');
  const [keyResponsibilities, setKeyResponsibilities] = useState(prevKeyResponsibilities || '');
  const [qualificationAndSkills, setQualificationAndSkills] = useState(prevQualificationAndSkills || '');
  const [preferredQualifications, setPreferredQualifications] = useState(prevPreferredQualifications || '');
  const [whatWeOffer, setWhatWeOffer] = useState(prevWhatWeOffer || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        {console.log(jobTitle,location)}
        {console.log(API.updateVacancy.url)}
       const response = await fetch(API.updateVacancy.url,{
        method : API.updateVacancy.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            id,
            jobTitle,
            location,
            experience,
            jobSummary, 
            keyResponsibilities,
            qualificationAndSkills,
            preferredQualifications,
            whatWeOffer  
        })
       })
  
      const responseData = await response.json();
  
      // Check if the update was successful
      if (responseData.success) {
        fetchVacancyDetails(); // Re-fetch the vacancy details to update the UI
        toast.success("Vacancy updated successfully"); // Show success notification
        onClose(); // Close the form
      } else {
        // Handle the case where the update fails
        toast.error("Failed to update the vacancy");
      }
    } catch (error) {
      console.error("Error updating vacancy:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <div className="fixed inset-0 z-50 h-full w-full bg-white dark:bg-slate-800 flex flex-col gap-2 justify-center items-center overflow-y-auto"
      data-aos="fade-out"
      data-aos-duration="400"
    >
  
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[40%] h-[90%] relative p-2 overflow-y-auto"
      >
        <div
          className="absolute right-0 top-0 text-3xl cursor-pointer text-red-500 transition-all duration-300"
          onClick={onClose}
        >
          <IoClose />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Job Title
          </label>
          <ReactQuill value={jobTitle} onChange={setJobTitle} theme="snow" className="text-black dark:text-white" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Job Location
          </label>
          <ReactQuill value={location} onChange={setLocation} theme="snow" className="text-black dark:text-white" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Experience Required
          </label>
          <ReactQuill value={experience} onChange={setExperience} theme="snow" className="text-black dark:text-white" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Job Summary
          </label>
          <ReactQuill value={jobSummary} onChange={setJobSummary} theme="snow" className="text-black dark:text-white" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Key Responsibilities
          </label>
          <ReactQuill value={keyResponsibilities} onChange={setKeyResponsibilities} theme="snow" className="text-black dark:text-white" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Required Qualifications & Skills
          </label>
          <ReactQuill value={qualificationAndSkills} onChange={setQualificationAndSkills} theme="snow" className="text-black dark:text-white" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Preferred Qualifications
          </label>
          <ReactQuill value={preferredQualifications} onChange={setPreferredQualifications} theme="snow" className="text-black dark:text-white" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter What We Offer
          </label>
          <ReactQuill value={whatWeOffer} onChange={setWhatWeOffer} theme="snow" className="text-black dark:text-white" />
        </div>

        <button
          type="submit"
          className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewUpdateVacancy;
