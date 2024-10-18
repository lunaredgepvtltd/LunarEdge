import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { API } from "../helper";
import { MdDelete } from "react-icons/md";

const UpdateVacancy = ({
  onClose,
  id,
  fetchDetails,
  prevJobTitle,
  prevLocation,
  prevExperience,
  prevRolePurpose,
  prevDescription,
  prevRequirements,
  setVacancyData,
}) => {
  const [data, setData] = useState({
    jobTitle: prevJobTitle,
    location: prevLocation,
    experience: prevExperience,
    description: prevDescription,
  });

  const [role, setRole] = useState(prevRolePurpose);
  const [roleValue, setRoleValue] = useState("");

  const [require, setRequire] = useState(prevRequirements);
  const [requireValue, setRequireValue] = useState("");

  const handleRolePurposeChange = (e) => {
    setRoleValue(e.target.value);
  };

  const handleRole = (e) => {
    if (roleValue.length === 0) return;
    setRole([...role, roleValue]);
    setRoleValue("");
  };

  const handleRequireChange = (e) => {
    setRequireValue(e.target.value);
  };

  const hanldeRequire = (e) => {
    if (requireValue.length == 0) return;
    setRequire([...require, requireValue]);
    setRequireValue("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { jobTitle, location, experience, description } = data;

    if (!jobTitle || !location || !experience || !description) {
      console.log("Please enter all details");
      return;
    }
    const response = await fetch(API.updateVacancy.url, {
      method: API.updateVacancy.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        jobTitle,
        location,
        experience,
        rolePurpose: role,
        description,
        requirements: require,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchDetails();
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleRoleDelete = (index) => {
    setRole((prevRoles) => {
      const newRoles = [...prevRoles];
      newRoles.splice(index, 1);
      return newRoles;
    });
  };

  const handleRequireDelete = (index) => {
    setRequire((prevReq) => {
      const newReq = [...prevReq];
      newReq.splice(index, 1);
      return newReq;
    });
  };

  return (
    <div className="fixed inset-0 z-50 h-full w-full  bg-slate-200 flex flex-col gap-2 justify-center items-center overflow-y-auto">
      <form
        className="w-[90%] md:w-[40%] h-[90%] relative p-2 overflow-y-auto"
        onSubmit={handleSubmit}
      >
        <div
          className="absolute right-0 top-0 text-3xl cursor-pointer text-red-500 transition-all duration-300"
          onClick={onClose}
        >
          <IoClose />
        </div>

        <div className="mb-5">
          <label
            htmlFor="jobTitle"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={data.jobTitle}
            onChange={handleChange}
            placeholder="Enter job title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Job Location
          </label>
          <input
            type="text"
            name="location"
            value={data.location}
            onChange={handleChange}
            placeholder="Enter job location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="experience"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Experience Required
          </label>
          <input
            type="text"
            name="experience"
            value={data.experience}
            onChange={handleChange}
            placeholder="Enter experience (0-1 years)"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Description
          </label>
          <textarea
            type="text"
            name="description"
            value={data.description}
            placeholder="Enter description"
            onChange={handleChange}
            rows={6}
            style={{ whiteSpace: "pre-wrap" }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="rolePurpose"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Role Purpose
          </label>
          <div className="flex items-center w-full">
            <input
              type="text"
              value={roleValue}
              placeholder="enter role purpose"
              onChange={handleRolePurposeChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg block p-2.5 w-[85%]"
            />
            <button
              type="button"
              className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded-r-lg whitespace-nowrap"
              onClick={handleRole}
            >
              Add Role
            </button>
          </div>
        </div>

        {role.length > 0 && (
          <div className="border md:p-2 p-1 w-full h-[30%] overflow-y-scroll border-black mb-5">
            <p className="font-bold text-lg pb-1">Job Roles</p>
            <div className="md:p-2 p-1 w-full h-auto">
              {role.map((el, index) => (
                <div
                  className="border border-blue-700 rounded-md my-2 p-2 w-full relative"
                  key={index}
                >
                  <p className="break-words whitespace-normal">{el}</p>
                  <p className="absolute bottom-0 right-2">
                    <MdDelete
                      className="text-lg cursor-pointer hover:text-red-500"
                      onClick={() => handleRoleDelete(index)}
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-5">
          <label
            htmlFor="requirements"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Requirements
          </label>
          <div className="flex items-center w-full">
            <input
              type="text"
              value={requireValue}
              placeholder="enter requirements"
              onChange={handleRequireChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg block p-2.5 w-[85%]"
            />
            <button
              type="button"
              className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded-r-lg whitespace-nowrap"
              onClick={hanldeRequire}
            >
              Add Req.
            </button>
          </div>
        </div>

        {require.length > 0 && (
          <div className="border md:p-2 p-1 w-full h-[30%] overflow-y-scroll border-black">
            <p className="font-bold text-lg pb-1">Requirements</p>
            <div className="md:p-2 p-1 w-full h-auto">
              {require.map((el, index) => (
                <div
                  className="border border-blue-700 rounded-md my-2 p-2 w-full relative"
                  key={index}
                >
                  <p className="break-words whitespace-normal">{el}</p>
                  <p className="absolute bottom-0 right-2">
                    <MdDelete
                      className="text-lg cursor-pointer hover:text-red-500"
                      onClick={() => handleRequireDelete(index)}
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          onClick={handleSubmit}
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default UpdateVacancy;
