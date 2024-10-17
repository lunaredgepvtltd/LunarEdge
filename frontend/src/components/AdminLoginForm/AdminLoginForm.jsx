import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { API } from '../../helper';
import { GoEyeClosed } from "react-icons/go";
import {useDispatch} from 'react-redux'
import { RxEyeOpen } from "react-icons/rx";

import { login } from '../../store/userSlice.js'
const AdminLoginForm = () => {

  const disptach = useDispatch();

  const naviagte = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [msg,setMsg] =  useState('')
  const [userData,setUserData] = useState(null)
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClose = ()=>{
  naviagte('/')
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    console.log('button click')
    try{
      const response = await fetch(API.adminLogin.url,{
        method : API.adminLogin.method,
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      const responseData = await response.json();

      console.log(responseData)
     
      if(responseData.success){
        setMsg(responseData.message)
        disptach(login(responseData.data))
        setUserData(responseData.data)
        setTimeout(() => {
          naviagte('/')
        },1000);
      }

      if(responseData.error){
        setMsg(responseData.message)
      }
    }
    catch(error){
      setMsg('Error Occured!')
    }
  };

  return (
    <div className='fixed inset-0 z-50 h-full w-full bg-slate-200 flex flex-col gap-2 justify-center items-center'>
       <form className='w-[70%] md:w-[40%] bg- relative' onSubmit={handleSubmit}>
        <div className='absolute right-0 -top-3 text-3xl cursor-pointer text-red-500 transition-all duration-300' onClick={handleClose}>
          <IoClose />
        </div>
        <div className="mb-5 ">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
          <input
            name='email'
            onChange={handleChange}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5 relative">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
          <input
            name='password'
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder='enter password'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          <button
            type="button"
            className="absolute top-[60%] right-2 text-gray-700 hover:text-gray-500"
            onClick={handleShowPassword}
          >
            {showPassword ?  <RxEyeOpen />  :<GoEyeClosed />}
          </button>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3"
        >
          Submit
        </button>
      </form>
      {msg ? <div className={`pt-3 text-lg ${ !userData ? "text-red-500" : "text-green-500"}`}>{msg}</div> : ''}
    </div>
  );
};

export default AdminLoginForm;