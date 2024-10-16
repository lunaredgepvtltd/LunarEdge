import React from 'react';

// Component for Job Opening
const JobOpening = ({ title, experience, location, jobType, buttonText}) => {
  Const[seto]
  return (
    <div className="border-2 w-full border-black p-4 md:p-6 rounded-xl flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        {jobType && <h2 className="text-md md:text-lg text-[#2e2e30]">{jobType}</h2>}
        <h2 className="text-xl md:text-2xl font-semibold text-[#160962]">{title}</h2>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-4 text-gray-600">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="mr-2">&#x1F4BC;</span> {experience}
          </div>
          <div className="flex items-center">
            <span className="mr-2">&#x1F4CD;</span> {location}
          </div>
        </div>
      </div>
      <button className={`bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white px-4 py-2 md:px-6 md:py-3 rounded-3xl font-semibold tracking-wider`} >
        {buttonText}
      </button>
    </div>
  );
};

const MiddleCareer = () => {
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
     
    }
  ];

  return (
    <div className="bg-white min-h-screen w-full flex justify-center items-center">
      <div className="w-[90%] md:w-[80%] px-4 py-8">
        <h1 className="text-center text-3xl md:text-4xl font-semibold text-black mb-8">Openings</h1>
        
        <div className="space-y-6 w-full">
          {jobOpenings.map((job, index) => (
            <JobOpening key={index} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleCareer;
