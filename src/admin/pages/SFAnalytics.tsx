import React, { FC } from "react";

const SFAnalytics: FC = () => {
  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen">
      <div className="flex flex-col items-right">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">Stakeholder's Feedback</h2>
        <div className="flex justify-between items-center">
          <p className="text-neutral-500 text-xl mt-3">
            Analytics for the feedbacks for the Stakeholder Feedback Forms.
          </p>
        </div><br></br>

        <div className="overflow-x-auto">
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
        </div>
      </div>
    </div>
  );
};

export default SFAnalytics;
