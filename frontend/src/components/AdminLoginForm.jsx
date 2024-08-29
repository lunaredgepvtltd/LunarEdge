import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { API } from '../helper';
import {useDispatch} from 'react-redux'
import { login } from '../store/userSlice.js'
const AdminLoginForm = () => {

  const disptach = useDispatch();

  const naviagte = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [msg,setMsg] =  useState('')
  const [userData,setUserData] = useState(null)

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
    <div className='fixed inset-0 z-50 h-full w-full bg-white flex flex-col gap-2 justify-center items-center'>
      <form className='w-[70%] md:w-[40%] relative' onSubmit={handleSubmit}>
        <div className='absolute right-0 -top-3 text-3xl cursor-pointer text-red-500 transition-all duration-300' onClick={handleClose}>
          <IoClose />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            name='email'
            onChange={handleChange}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input
            name='password'
            onChange={handleChange}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      {msg ? <div className={`pt-3 text-lg ${ !userData ? "text-red-500" : "text-green-500"}`}>{msg}</div> : ''}
    </div>
  );
};

export default AdminLoginForm;
