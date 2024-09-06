import React, { useEffect, useState } from "react";
import bgCareer from "../assets/bgCareer.png";
import { VacancyBox } from "../components/VacancyBox";
import { useSelector } from "react-redux";
import bgCareerSM from "../assets/bgCareerSM.png";
import AddVacancy from "../components/AddVacancy";
import { API } from "../helper";
export const Career = () => {
  const [showAddVacancy,setShowAddVacancy] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleClose = ()=>{
  setShowAddVacancy(false)
  }

  const [data,setData] = useState([])
 

  const handleChange = (event) => {
    // console.log(event.target.value)
    // setSearchTerm(event.target.value);
    const filtered = data.filter((job) =>
      job.jobTitle.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(filtered)
    setFilteredData(filtered)
  };

 

  // getting user

  const { user } = useSelector((state) => state.user);


  const fetchVacancyDetails = async()=>{
    try{
      const response = await fetch(API.getAllVacancy.url,{
        method : API.getAllVacancy.method,
      })

      const responseData = await response.json();

      console.log(responseData)

      setData(responseData.data)
      setFilteredData(responseData.data)
    }
    catch(error){
      console.log(error);
    }
  }

 useEffect(()=>{
  fetchVacancyDetails()
 },[showAddVacancy])

  return (
    <div className="h-full bg-gray-100">
      <div className="pt-[98px] md:pt-[135px] px-4">
        <div className="relative">
          {/* Added relative positioning */}
          <img
            src={bgCareer}
            alt="Career Background"
            className=" md:block hidden w-full h-auto"
          />
           <img
            src={bgCareerSM}
            alt="Career Background"
            className=" block md:hidden w-full h-auto"
          />
          <div className="  absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
            <h1 className="text-white text-md  md:text-4xl font-bold sm:text-shadow-md-white text-shadow-sm-white">
              Explore Your Career Opportunities
            </h1>
            <p className="text-white text-md md:text-xl mt-2 text-center sm:block hidden ">
              Find your dream job with us
            </p>
          </div>
        </div>
        <form className="flex items-center mt-4 pb-3">
          <input
            type="text"
            placeholder="Search Job Title"
            // value={searchTerm}
            onChange={handleChange}
            className="bg-ring-[#160962]  w-full text-xs md:text-base px-4 py-2 rounded-full border border-gray-800 "
          />
        </form>
        {/* showing add-new-vacancy button only if user is admin  */}
        {user?.role === 'ADMIN' ?
       <div className="w-full text-center my-3">
       <button className="hover:text-green-400 hover:bg-white border border-green-400 p-2 text-white bg-green-400 rounded-lg transition-all duration-300" onClick={()=>{setShowAddVacancy(true)}}>
          Add New Vacancy
        </button>
       </div> : ''}
        {/* Render VacancyBox components for each job */}
        <div className="pt-3 pb-5">
        {filteredData.length > 0 && filteredData.map((job, index) => (
          <div key={index} className="p-2">
            <VacancyBox
              jobTitle={job?.jobTitle}
              location={job?.location}
              experience={job?.experience}
              rolePurpose={job?.rolePurpose}
              id={job?._id}
              description={job?.description}
              requirements={job?.requirements}
              fetchDetails={fetchVacancyDetails}
            />
          </div>
        ))}
        </div>
    
      </div>
      {showAddVacancy && <AddVacancy onClose={handleClose} setVacancyData={setData}/>}
    </div>
  );
};
