import React, { useState } from "react";
import "./JobForm.css";
import { API } from "../helper";
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

export const JobForm = ({ onClose }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    cv: null
  });

  const [cvPreviewUrl, setCvPreviewUrl] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(!name) console.log('name errors')
    setData({ ...data, [name]: value });
  };

  const handleCv = (e) => {
    const file = e.target.files[0];
    if (file) {
      
      setData({ ...data, cv: file });

      // Create a URL for the file preview
      const fileUrl = URL.createObjectURL(file);
      setCvPreviewUrl(fileUrl);

      // Clean up the URL object when the component unmounts
      return () => URL.revokeObjectURL(fileUrl);
    } else {
      
      setCvPreviewUrl("");
    }
  };

  const handleCvDelete =()=>{
  setData({...data, cv : ''})
  setCvPreviewUrl('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    if (data.cv) {
      formData.append("cv", data.cv);
    }

    if(!data.cv){
      toast.info("Please Add Your CV");
      return
    }

    try {
      const response = await fetch(API.fillForm.url, {
        method: API.fillForm.method,
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        setTimeout(() => {
          onClose();
        }, 1000);
      }

      if (result.error) {
        toast.error(result.message);
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 h-full w-full bg-slate-200 flex flex-col gap-2 justify-center items-center">
      <form className="form md:w-[40%] p-5 relative overflow-y-auto" onSubmit={handleSubmit}>
        <div className="title">Fill Form</div>
        {/* close-button  */}
        <div
          className="absolute right-3 top-2 text-3xl cursor-pointer text-red-500 hover:text-white transition-all duration-300"
          onClick={onClose}
        >
          <IoClose />
        </div>
        <div className="input-container ic1">
          <input
            id="name"
            className="input"
            type="text"
            placeholder=" "
            name="name"
            value={data.name}
            required
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label htmlFor="name" className="placeholder">
            Your Name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="email"
            name="email"
            required
            value={data.email}
            onChange={handleChange}
            placeholder=" "
          />
          <div className="cut "></div>
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
            required
            value={data.phoneNumber}
            onChange={handleChange}
            placeholder=" "
          />
          <div className="cut cut-large"></div>
          <label htmlFor="phone" className="placeholder">
            Your Phone Number
          </label>
        </div>
        <div className="w-full mt-8">
          <label htmlFor="cv" className="cursor-pointer bg-[#303245] text-white hover:text-rose-700 transition-all duration-300 rounded-lg py-3 px-7">
            Upload Your CV
          </label>
          <input
            id="cv"
            className="hidden"
            type="file"
            placeholder=" "
            onChange={handleCv}
          />
          {cvPreviewUrl && (
            <div className="mt-2 relative bg-yellow-400">
              {data.cv?.type.startsWith('image/') ? (
                <img src={cvPreviewUrl} alt="CV Preview" className="w-full h-auto" />
              ) : data.cv?.type === 'application/pdf' ? (
                <iframe src={cvPreviewUrl} title="CV Preview" className="w-full h-96" />
              ) : ''}
              <div>
              <MdDelete
                      className="absolute -bottom-6 right-0 text-xl cursor-pointer text-red-500 hover:text-white"
                      onClick={handleCvDelete}
                    />
              </div>
            </div>
          )}
        </div>

        <button type="submit" className="submit px-4 w-full hover:text-blue-500 hover:bg-white border-2 border-blue-500 transition-all duration-300 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
