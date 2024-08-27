import React, { useState } from "react";
import bgCareer from "../assets/bgCareer.png";
import { VacancyBox } from "../components/VacancyBox";

export const Career = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search term:", searchTerm);
  };

  // Array of job vacancies
  const jobDataArray = [
    {
      jobTitle: "Frontend Developer",
      location: "Jaipur, India",
      experience: "Experience: 2 - 3 Years",
      postedDate: "Posted: 07/05/2024",
      jobDescription: {
        rolePurpose:
          "The purpose of this role is to perform the development of VLSI systems by defining the various functionalities, architecture, layout, and implementation for a client.",
        expert:
          "Applies the competency in all situations and serves as a guide to others.",
        master:
          "Coaches others and builds organizational capability in the competency area. Serves as a key resource for that competency and is recognized within the entire organization.",
      },
    },
    {
      jobTitle: "Backend Developer",
      location: "Bangalore, India",
      experience: "Experience: 3 - 5 Years",
      postedDate: "Posted: 08/15/2024",
      jobDescription: {
        rolePurpose:
          "Responsible for server-side web application logic and integration of the work front-end developers do.",
        expert:
          "In-depth knowledge of server-side scripting languages and database management.",
        master: "Mentors junior developers and optimizes back-end processes.",
      },
    },
    {
      jobTitle: "Full Stack Developer",
      location: "Mumbai, India",
      experience: "Experience: 4 - 6 Years",
      postedDate: "Posted: 09/01/2024",
      jobDescription: {
        rolePurpose:
          "Develops and maintains both front-end and back-end of web applications.",
        expert:
          "Proficient in both front-end and back-end technologies and frameworks.",
        master:
          "Leads projects and mentors teams in both front-end and back-end development.",
      },
    },
  ];

  return (
    <div className="h-full bg-gray-100">
      <div className="pt-[135px] px-4">
        <img src={bgCareer} alt="Career Background" className="w-full h-auto" />
        <form onSubmit={handleSubmit} className="flex items-center mt-4 pb-3">
          <input
            type="text"
            placeholder="Try 'Skills' or 'Keywords'"
            value={searchTerm}
            onChange={handleChange}
            className="bg-[#ECE8FF] w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#160962]"
          />
          <button
            type="submit"
            className="w-[100px] ml-[-100px] py-2 rounded-full bg-[#160962] text-white hover:bg-[#5c45dd] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Find Jobs
          </button>
        </form>
        {/* Render VacancyBox components for each job */}
        {jobDataArray.map((job, index) => (
          <div className="p-2 ">
            {" "}
            <VacancyBox
              key={index} // Unique key for each item in the list
              jobTitle={job.jobTitle}
              location={job.location}
              experience={job.experience}
              postedDate={job.postedDate}
              jobDescription={job.jobDescription}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
