import React, { FC } from "react";
import { Link } from "react-router-dom";

const StakeholderFeedback4: FC = () => {
 return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">

      <div className="flex justify-center mt-12">
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
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              4
            </span>
          </li>
          <li className="flex items-center font-bold text-blue-600 dark:text-blue-500 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
              5
            </span>
          </li>
        </ol>
      </div> 

      <div className="flex items-center justify-between mt-2">
        <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[1200px] h-auto sm:h-[700px] flex flex-col items-center justify-center">
          <p className="text-black-500 text-xl font-bold mt-1">
            Specific ACADEMIC UNIT/OFFICE you transacted business with:
          </p>
          <div className="flex items-center justify-between mt-2">
            <label htmlFor="academic_unit_internal">Internal</label>
            <input type="radio" id="academic_unit_internal" name="academic_unit" value="Internal" required />
            <label htmlFor="academic_unit_external">External</label>
            <input type="radio" id="academic_unit_external" name="academic_unit" value="External" />
          </div>
                  
          <div className="flex justify-center mt-8">
            {/* Navigation buttons */}
            <Link to="/stakeholderfeedback2" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">Back</Link>
            <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
 );
};

export default StakeholderFeedback4;
