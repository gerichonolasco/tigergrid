import React, { FC } from "react";
import { Link } from "react-router-dom";

const StakeholderFeedback2: FC = () => {
 return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          {/* Updated IDs for the steppers */}
          <li id="SF-page2-step1" className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              1
            </span>
          </li>
          <li id="SF-page2-step2" className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              2
            </span>
          </li>
          <li id="SF-page2-step3" className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
              3
            </span>
          </li>
          <li id="SF-page2-step4" className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              4
            </span>
          </li>
          <li id="SF-page2-step5" className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              5
            </span>
          </li>
        </ol>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[500px] flex flex-col items-center justify-center">
          <p className="text-black-500 text-xl font-bold mt-3">
            Type of Internal Stakeholder
          </p>
          {/* Updated ID for the select element */}
          <select id="page2-stakeholderType" className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Choose Type of Internal Stakeholder</option>
            <option value="option1">Administrative/Academic Official</option>
            <option value="option2">Academic Staff</option>
            <option value="option3">Support Staff</option>
            <option value="option4">Student</option>
            <option value="option5">Casual</option>
            <option value="option6">Other</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
            Type of Transaction
          </p>
          {/* Updated ID for the select element */}
          <select id="page2-transactionType" className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Choose Type of Transaction</option>
            <option value="option1">Online</option>
            <option value="option2">Onsite</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
            Type of Office
          </p>
          {/* Updated ID for the select element */}
          <select id="page2-officeType" className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Choose Type of Field</option>
            <option value="option1">Academic Unit</option>
            <option value="option2">Administrative Unit</option>
          </select>
        
          <div className="flex justify-center mt-5">
            {/* Navigation buttons */}
            <Link to="/stakeholderfeedback" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">Back</Link>
            <Link to="/stakeholderfeedback3" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</Link>
          </div>
        </div>
      </div>
    </div>
 );
};

export default StakeholderFeedback2;
