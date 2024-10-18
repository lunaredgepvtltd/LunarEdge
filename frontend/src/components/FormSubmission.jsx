import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "../helper";

const FormSubmission = ({ handleShowApplicants, id }) => {
  // Hardcoded form submissions data
  const [data, setData] = useState([]);

  const fetchApplicantsDetails = async () => {
    try {
      const response = await fetch(API.getApplicantDetails.url, {
        method: API.getApplicantDetails.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        setData(responseData.data);
      }

      if (responseData.error) {
        console.log(responseData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApplicantsDetails();
  }, [id]); // Make sure to add id as a dependency

  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">Job Applicants</h1>
      <button
        className="absolute top-2 right-2 text-red-500 text-2xl md:text-5xl"
        onClick={handleShowApplicants}
      >
        &times;
      </button>

      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">CV</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{el?.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{el?.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{el?.email}</td>
              <td className="border border-gray-300 px-4 py-2">{el?.phoneNumber}</td>
              <td className="border border-gray-300 px-4 py-2">
                {el?.cv ? (
                 <a
                 href={`http://localhost:8080/${el.cv}`} // Replace with your backend URL
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-500 underline"
               >
                 View CV
               </a>
               
                ) : (
                  "No CV Uploaded"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormSubmission;
