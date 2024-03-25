import React, { FC, useState } from "react";
import { Link } from 'react-router-dom';

const SFAnalytics: FC = () => {

const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

const toggleDropdown = () => {
  setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen">
      <div className="flex flex-col items-right">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">Stakeholder's Feedback</h2>
        <div className="flex justify-between items-center">
          <p className="text-neutral-500 text-xl mt-3">
            Analytics for the feedbacks for the Stakeholder Feedback Forms.
          </p>
        </div><br></br>

        <div>
          <button
            id="dropdownDefaultButton"
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
              id="dropdown"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
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
      </div>


        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* Adjusted column widths */}
                <th scope="col" className="px-4 py-3">Date & Time</th>
                <th scope="col" className="px-4 py-3">Unit Visited</th>
                <th scope="col" className="px-4 py-3">Internal/External Stakeholder</th>
                <th scope="col" className="px-4 py-3">Type of Stakeholder</th>
                <th scope="col" className="px-4 py-3">Type of Transaction</th>
                <th scope="col" className="px-4 py-3">Purpose of Visit</th>
                <th scope="col" className="px-4 py-3">Specific Concern</th>
                <th scope="col" className="px-4 py-3">Designation of the Responsible Person</th>
                <th scope="col" className="px-4 py-3">Overall Rating</th>
                <th scope="col" className="px-4 py-3">Comments</th>
              </tr>
            </thead>
            <tbody>
              {/* SAMPLE INPUTS */} 
              {/* Repeat the following structure for each row */}
              {[1, 2, 3, 4].map(row => (
                <tr key={row} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row}</td>
                  <td className="px-4 py-4">Profile of Respondent</td>
                  <td className="px-4 py-4">Text Input</td>
                  {/* Add 7 more <td> elements for each action */}
                  <td className="px-4 py-4">Action 1</td>
                  <td className="px-4 py-4">Action 2</td>
                  <td className="px-4 py-4">Action 3</td>
                  <td className="px-4 py-4">Action 4</td>
                  <td className="px-4 py-4">Action 5</td>
                  <td className="px-4 py-4">Action 6</td>
                  <td className="px-4 py-4">Action 7</td>
                </tr>
              ))}
            </tbody>
          </table>

 {/* Button container */}
       <div className="flex justify-between mt-4">
          <Link to="/admin/dashboard">
            <button type="button" className="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-500 focus:outline-none dark:focus:ring-yellow-500">Back</button>
          </Link>
        <div>
          <Link to="#">
            <button type="button" className="text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-500 focus:outline-none dark:focus:ring-yellow-500">View Report</button>
          </Link>
          <Link to="#">
            <button type="button" className="text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-500 focus:outline-none dark:focus:ring-yellow-500">Generate File</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
 );
};

export default SFAnalytics;
