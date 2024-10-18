import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { API } from "../../helper";
import { GoEyeClosed } from "react-icons/go";
import { useDispatch } from "react-redux";
import { RxEyeOpen } from "react-icons/rx";
import { login } from "../../store/userSlice.js";

const AdminLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API.adminLogin.url, {
        method: API.adminLogin.method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (responseData.success) {
        setMsg(responseData.message);
        dispatch(login(responseData.data));
        setUserData(responseData.data);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }

      if (responseData.error) {
        setMsg(responseData.message);
      }
    } catch (error) {
      setMsg("Error Occurred!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 h-full w-full bg-gray-400 dark:bg-gray-900 flex flex-col justify-center items-center">
      <form
        className="w-[90%] md:w-[35%] lg:w-[30%] bg-white dark:bg-gray-800 shadow-lg p-8 rounded-xl relative"
        onSubmit={handleSubmit}
      >
        {/* Close Button */}
        <div
          className="absolute right-4 top-4 text-2xl cursor-pointer text-gray-500 hover:text-red-500 transition-all"
          onClick={handleClose}
        >
          <IoClose />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
          Admin Login
        </h2>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Your email
          </label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            id="email"
            className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 border border-gray-400 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="example@domain.com"
            required
          />
        </div>

        <div className="mb-5 relative">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Your password
          </label>
          <input
            name="password"
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            id="password"
            className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 border border-gray-400 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Enter password"
            required
          />
          <button
            type="button"
            className="absolute top-[50%] right-3 text-gray-900 dark:text-gray-300 hover:text-gray-500 transition-all"
            onClick={handleShowPassword}
          >
            {showPassword ? <RxEyeOpen /> : <GoEyeClosed />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#ff5757] to-[#8c52ff] hover:from-[#8c52ff] hover:to-[#ff5757] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-gradient-to-l"
        >
          Log In
        </button>
      </form>

      {/* Display success or error message */}
      {msg && (
        <div
          className={`mt-4 text-lg font-semibold ${
            userData ? "text-green-500" : "text-red-500"
          }`}
        >
          {msg}
        </div>
      )}
    </div>
  );
};

export default AdminLoginForm;
