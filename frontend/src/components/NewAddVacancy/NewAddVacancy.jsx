import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { API } from "../../helper";
import { MdDelete } from "react-icons/md";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from "react-toastify";

function MyComponent() {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

const NewAddVacancy = ({ onClose, setVacancyData }) => {
  const [jobTitle, setJobTitle] = useState('');      // Initialize with empty string
  const [location, setLocation] = useState('');      // Initialize with empty string
  const [experience, setExperience] = useState('');  // Initialize with empty string
  const [jobSummary, setJobSummary] = useState(''); // Initialize with empty string
  const [keyResoponsibilites, setKeyResponsibilities] = useState('');
  const [qualificationAndSkills,setQualificationAndSkills] = useState('')
  const [preferredQualifications,setPreferredQualifications] = useState('')
  const [whatWeOffer,setWhatWeOffer] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(API.addNewVacancy.url, {
      method: API.addNewVacancy.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        jobTitle,
        location,
        experience,
        jobSummary,
        keyResoponsibilites,
        qualificationAndSkills,
        preferredQualifications,
        whatWeOffer
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success(responseData.message)
      onClose();
    }

    if(responseData.error){
    toast.error(responseData.data)
    }
  };

  return (
    // <MyComponent/>
    <div className="fixed inset-0 z-50 h-full w-full  bg-slate-200 dark:bg-slate-800 flex flex-col gap-2 justify-center items-center overflow-y-auto">
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
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Job Title
          </label>
          <ReactQuill value={jobTitle} onChange={setJobTitle} theme="snow" className="text-black dark:text-white" />
        </div>

        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Job Location
          </label>
          <ReactQuill value={location} onChange={setLocation} theme="snow" className="text-black dark:text-white"  />
        </div>

        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Experience Required
          </label>
          <ReactQuill value={experience} onChange={setExperience} theme="snow" className="text-black dark:text-white"  />
        </div>

        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Job Summary
          </label>
          {/* {console.log(jobSummary)} */}
          <ReactQuill value={jobSummary} onChange={setJobSummary} theme="snow" className="text-black dark:text-white"  />
        </div>

        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Key Responsibilities
          </label>
          <ReactQuill value={keyResoponsibilites} onChange={setKeyResponsibilities} theme="snow" className="text-black dark:text-white"  />
        </div>


        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Required Qualifications & Skills
          </label>
          <ReactQuill value={qualificationAndSkills} onChange={setQualificationAndSkills} theme="snow" className="text-black dark:text-white"  />
        </div>
        
        
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Preferred Qualifications
          </label>
          <ReactQuill value={preferredQualifications} onChange={setPreferredQualifications} theme="snow" className="text-black dark:text-white"  />
        </div>

        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter What We Offer
          </label>
          <ReactQuill value={whatWeOffer} onChange={setWhatWeOffer} theme="snow" className="text-black dark:text-white"  />
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

export default NewAddVacancy;
