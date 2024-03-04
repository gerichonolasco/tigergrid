import React, { FC } from "react";
import { Link } from "react-router-dom";

const StakeholderFeedback: FC = () => {
 return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[300px] flex flex-col items-center justify-center">
          <p className="text-black-500 text-xl font-bold mt-3">
            Profile of Respondent
          </p>
          <select className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-500">
            <option value="" disabled selected>Choose Type of Respondent</option>
            <option value="option1">Internal</option>
            <option value="option2">External</option>
          </select>
        
          <div className="flex justify-center mt-5">
            {/* Navigation buttons */}
            <Link to="/dataprivacySF" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">Back</Link>
            <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
 );
};

export default StakeholderFeedback;
