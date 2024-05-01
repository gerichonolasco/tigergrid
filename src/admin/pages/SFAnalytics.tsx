import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SFAnalytics: FC = () => {
  // State variables
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [responses, setResponses] = useState<string[][]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("");

  // Fetch questions and responses based on selected year/term
  useEffect(() => {
    if (selectedYear) {
      axios
        .get(`/api/SF/questions?year=${selectedYear}`)
        .then((response) => {
          setQuestions(response.data);
          // Initialize responses array with empty arrays for each question
          setResponses(response.data.map(() => []));
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
        });

      axios
        .get(`/api/SF/responses?year=${selectedYear}`)
        .then((response) => {
          // Assuming the backend returns responses in the same order as questions
          setResponses(response.data);
        })
        .catch((error) => {
          console.error("Error fetching responses:", error);
        });
    }
  }, [selectedYear]);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle selection of academic year/term
  const handleYearSelection = (year: string) => {
    setSelectedYear(year);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex justify-center items-center bg-cover bg-center bg-main-building">
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-2xl">Stakeholder's Feedback</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <div className="relative">
            <button
              id="SFSFDropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-white bg-yellow-500 hover:bg-yellow-80099 focus:outline-none focus:ring-yellow-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:bg-yellow-500 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500"
              type="button"
            >
              {selectedYear ? selectedYear : "Choose Academic Year/Term"}
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
                id="SFSFDropdown"
                className="absolute left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="SFSFDropdownDefaultButton"
                >
                  <li>
                    <button
                      onClick={() => handleYearSelection("AY.2023-2024")}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      AY.2023-2024
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleYearSelection("AY.2022-2023")}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      AY.2022-2023
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Table section */}
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <thead className="border-b">
              <tr>
                {/* Header rows */}
                {questions.map((question, index) => (
                  <th key={index} className="text-left p-3 px-5">
                    {question}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Rows for feedbacks */}
              {responses.map((response, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  {response.map((value, idx) => (
                    <td key={idx} className="p-3 px-5">
                      {value}
                    </td>
                  ))}
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
