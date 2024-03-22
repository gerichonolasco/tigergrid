import React, { FC } from "react";
import { Link } from "react-router-dom";

const IAEval: FC = () => {
 return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          {/* Updated IDs for the steppers */}
          <li id="IAE-page1-step1" className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              1
            </span>
          </li>
          <li id="IAE-page1-step2" className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
              2
            </span>
          </li>
          <li id="IAE-page1-step3" className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              3
            </span>
          </li>
          <li id="IAE-page1-step4" className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              4
            </span>
          </li>
          <li id="IAE-page1-step5" className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              5
            </span>
          </li>
        </ol>
      </div> 

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[300px] flex flex-col items-center justify-center">
          <p className="text-black-500 text-xl font-bold mt-3">
            Unit
          </p>
          <select id="IAE-page1-unitSelect" className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Choose Unit</option>
            <option value="option1">APQAO</option>
            <option value="option2">Archives</option>
            <option value="option3">Average Score</option>
          </select>
        
          <div className="flex justify-center mt-5">
            {/* Navigation buttons */}
            <Link to="/dataprivacyIAE" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">Back</Link>
            <Link to="/iaeval2" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</Link>
          </div>
        </div>
      </div>
    </div>
 );
};

export default IAEval;