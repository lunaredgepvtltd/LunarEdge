import React, { useState } from "react";
import "./JobForm.css";

export const JobForm = () => {
  const[data,setData] = useState({
    name : "",
    email : "",
    phoneNumber : "",
    cv : ""
  })

  const handleChange =(event)=>{
  const {name,value} =event.target;
  setData({...data,[name] : value})
  }

  const handleCv =(e)=>{
  console.log(e.target.files[0])
  }

  const handleSubmit =  (e)=>{
    e.preventDefault();
    console.log(data)
  }

  return (
    <div className="fixed inset-0 z-50 h-full w-full  bg-slate-200 flex flex-col gap-2 justify-center items-center">
      <form className="form md:w-[40%] p-5" onSubmit={handleSubmit}>
        <div className="title">Fill Form</div>
        {/* <div className="subtitle">Let's create your account!</div> */}
        <div className="input-container ic1">
          <input
            id="name"
            className="input"
            type="text"
            placeholder=" "
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            Your Name
          </label>
        </div>
        <div className="input-container ic2">
          <input 
          id="email"
           className="input"
            type="text" 
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder=" " />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Your Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
           id="phone"
            className="input"
             type="tel" 
             name="phoneNumber"
             value={data.phoneNumber}
             onChange={handleChange}
             placeholder=" " />
          <div className="cut cut-short"></div>
          <label htmlFor="phone" className="placeholder">
            Your Phone Number
          </label>
        </div>
        <div className="w-full mt-8">
        <label htmlFor="cv" className="cursor-pointer bg-[#303245] text-white rounded-lg py-3 px-7"
        >
            Upload Your CV
          </label>
          <input
           id="cv"
            className="hidden" 
            type="file"
             placeholder=" "
             onChange={handleCv}
              />
        </div>

        <button type="submit" className="submit px-4 w-full hover:text-blue-500 hover:bg-white border-2 border-blue-500 transition-all duration-300 rounded-md ">
          submit
        </button>
      </form>
    </div>
  );
};
