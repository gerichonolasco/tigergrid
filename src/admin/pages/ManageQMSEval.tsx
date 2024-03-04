import React, { FC } from "react";

const ManageQMSEval: FC = () => {
  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen">+
      <div className="flex flex-col items-right">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">Manage Quality Management System Form</h2>
        <div className="flex justify-between items-center">
          <p className="text-neutral-500 text-xl mt-3">
            For the management of the Quality Management System Form.
          </p>
        </div><br></br>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <button className="px-4 py-2 mb-3 ml-1 text-sm text-blue-100 bg-yellow-500">
                                Add Question
                            </button>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 w-10">
                  Number
                </th>
                <th scope="col" className="px-6 py-3 w-4/5">
                  Question
                </th>
                <th scope="col" className="px-6 py-3 w-1/10">
                  Input Type
                </th>
                <th scope="col" className="px-6 py-3 w-1/5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
                {/* Repeat the following structure for each row */}
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   1
                </th>
                <td className="px-6 py-4">
                  Profile of Respondent
                </td>
                <td className="px-6 py-4">
                  Text Input
                </td>
                <td className="px-10 py-4 flex justify-between">
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Archive</button>
                </td>
              </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default ManageQMSEval;
