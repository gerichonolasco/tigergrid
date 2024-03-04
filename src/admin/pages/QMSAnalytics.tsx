import React, { FC } from "react";

const QMSAnalytics: FC = () => {
  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen">
      <div className="flex flex-col items-right">
        <h2 className="font-bold text-5xl mt-5 tracking-tight"> Quality Management System Evaluation</h2>
        <div className="flex justify-between items-center">
          <p className="text-neutral-500 text-xl mt-3">
            Analytics for the feedbacks for the Quality Management System Evaluation Forms.
          </p>
        </div>
        <br></br>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* Adjusted column widths */}
                <th scope="col" className="px-4 py-3" colSpan={2}>1. Plan</th>
                <th scope="col" className="px-4 py-3">AcU 18</th>
                <th scope="col" className="px-4 py-3">AcU 19</th>
                <th scope="col" className="px-4 py-3">AcU 20</th>
                <th scope="col" className="px-4 py-3">AcU 21</th>
                <th scope="col" className="px-4 py-3">AcU 22</th>
                <th scope="col" className="px-4 py-3">AcU 23</th>
                <th scope="col" className="px-4 py-3">AVERAGE</th>
              </tr>
            </thead>
            <tbody>
              {/* SAMPLE INPUTS */}  
              {/* Repeat the following structure for each row */}
              {[1.1, 1.2, 1.3, 1.4].map(row => (
                <tr key={row} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row}</td>
                  <td className="px-4 py-4">Sample Input</td>
                  <td className="px-4 py-4">Text Input</td>
                  {/* Add 7 more <td> elements for each action */}
                  <td className="px-4 py-4">5.00</td>
                  <td className="px-4 py-4">5.00</td>
                  <td className="px-4 py-4">5.00</td>
                  <td className="px-4 py-4">5.00</td>
                  <td className="px-4 py-4">5.00</td>
                  <td className="px-4 py-4">5.00</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  );
};

export default QMSAnalytics;
