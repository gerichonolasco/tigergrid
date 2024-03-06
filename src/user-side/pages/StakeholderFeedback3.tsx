import React, { FC } from "react";
import { Link } from "react-router-dom";

const StakeholderFeedback3: FC = () => {
 return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">

<div className="flex justify-center mt-12"> {/* Add this container */}
        <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              1
            </span>
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              2
            </span>
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              3
            </span>
          </li>
          <li className="flex items-center font-bold text-blue-600 dark:text-blue-500 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
              4
            </span>
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              5
            </span>
          </li>
        </ol>
      </div> 

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[800px] flex flex-col items-center justify-center">
          <p className="text-black-500 text-xl font-bold mt-1">
          Specific ACADEMIC UNIT/OFFICE you transacted business with:
          </p>
          <select className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Choose specific Academic Unit/Office</option>
            <option value="option1">Internal</option>
            <option value="option2">External</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
            Purpose of Transaction
          </p>
          <select className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Choose Purpose of Transaction</option>
            <option value="option1">Internal</option>
            <option value="option2">External</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
          Choose specific concern
          </p>
          <select className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Choose Concern</option>
            <option value="option1">Internal</option>
            <option value="option2">External</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
          Designation of person who attended to your transaction
          </p>
          <select className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Choose Specific Academic Unit/Office</option>
            <option value="option1">Internal</option>
            <option value="option2">External</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
          You can provide more details about your concern here
            </p>
            <input
            type="text"
            className="mt-3 mb-4 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Type here"
            />

        
          <div className="flex justify-center mt-8">
            {/* Navigation buttons */}
            <Link to="/stakeholderfeedback2" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">Back</Link>
            <Link to="/stakeholderfeedback4"  className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</Link>
          </div>
        </div>
      </div>
    </div>
 );
};

export default StakeholderFeedback3;
