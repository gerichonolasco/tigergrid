import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const SFAnalytics: FC = () => {
  // State variables
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [responses, setResponses] = useState<string[]>([]);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to add a question
  const addQuestion = (question: string) => {
    setQuestions([...questions, question]);
  };

  // Function to add a response
  const addResponse = (response: string) => {
    setResponses([...responses, response]);
  };

  // Function to empty the table
  const clearTable = () => {
    setQuestions([]); // Clearing questions
    setResponses([]); // Clearing responses
  };

  return (
    <div className="flex justify-center items-center bg-cover bg-center bg-main-building">
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-2xl">Internal Auditor's</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          
          <button
            id="SFDropdownDefaultButton"
            onClick={toggleDropdown}
            className="text-white bg-yellow-500 hover:bg-yellow-80099 focus:outline-none focus:ring-yellow-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:bg-yellow-500 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500"
            type="button"
          >
            Choose Academic Year/Term
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          {dropdownOpen && (
            <div
              id="SFDropdown"
              className="absolute left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="SFDropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    AY.2023-2024
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    AY.2022-2023
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Table section */}
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <thead className="border-b">
              <tr>
                {/* Header rows */}
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
                <th className="text-left p-3 px-5"></th>
              </tr>
            </thead>

            <tbody>
              {/* Rows for feedbacks */}
              {questions.map((question, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5 font-medium">{question}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                  <td className="p-3 px-5">{responses[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Buttons section */}
        <div className="px-3 py-4 flex justify-between">
          {/* Back button */}
          <Link to="/admin/dashboard">
            <button
              type="button"
              className="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-500 focus:outline-none dark:focus:ring-yellow-500"
            >
              Back
            </button>
          </Link>
          {/* View Report and Generate File buttons */}
          <div>
            <Link to="/admin/sfcharts">
              <button
                type="button"
                className="text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-500 focus:outline-none dark:focus:ring-yellow-500"
              >
                View Report
              </button>
            </Link>
            <Link to="#">
              <button
                type="button"
                className="text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-500 focus:outline-none dark:focus:ring-yellow-500"
              >
                Generate File
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SFAnalytics;
