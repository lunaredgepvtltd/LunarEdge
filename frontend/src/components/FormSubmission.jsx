import React from "react";

const FormSubmission = () => {
  // Hardcoded form submissions data
  const formSubmissions = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      cvUrl: "https://example.com/john_doe_cv.pdf",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      cvUrl: "https://example.com/jane_smith_cv.pdf",
    },
    {
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
      phone: "111-222-3333",
      cvUrl: "https://example.com/bob_brown_cv.pdf",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Job Applicants</h1>

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
          {formSubmissions.map((submission, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{submission.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{submission.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{submission.email}</td>
              <td className="border border-gray-300 px-4 py-2">{submission.phone}</td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={submission.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View CV
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormSubmission;
