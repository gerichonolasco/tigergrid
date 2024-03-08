import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const IAEval3: FC = () => {
 const [selectedValue, setSelectedValue] = useState<number | null>(null);
 const [selectedValue2, setSelectedValue2] = useState<number | null>(null);
 const [selectedValue3, setSelectedValue3] = useState<number | null>(null);
 const [selectedValue4, setSelectedValue4] = useState<number | null>(null);
 const [selectedValue5, setSelectedValue5] = useState<number | null>(null);
 const [selectedValue6, setSelectedValue6] = useState<number | null>(null); 
 const [selectedValue7, setSelectedValue7] = useState<number | null>(null); 

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(event.target.value));
 }

 const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setSelectedValue2(Number(event.target.value));
 };

 const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setSelectedValue3(Number(event.target.value)); 
 };

 const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue4(Number(event.target.value)); 
 };

 const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setSelectedValue5(Number(event.target.value));
 };

 const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setSelectedValue6(Number(event.target.value));
 };

 const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setSelectedValue7(Number(event.target.value));
 };

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
          <li className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
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

      <div className="flex flex-col items-center justify-center mt-10 mb-6">
        <div>
        <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[1120px] flex flex-col items-center justify-center">
        <p className="text-black-500 text-xl font-bold mt-3">Audit Proper</p><br></br>
            
            <p className="text-black-500 text-xl font-bold mt-3">
            1. The auditor observed well the audit schedule.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                 <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`radio-${number}`}
                      name="rating"
                      value={number}
                      checked={selectedValue === number}
                      onChange={handleChange}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label htmlFor={`radio-${number}`} className="block text-center text-gray-700 dark:text-gray-500">
                      {number}
                    </label>
                 </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
            2. The auditor clearly introduced the methodologies, activities, or objectives of the audit.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                 <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`radio2-${number}`}
                      name="rating2"
                      value={number}
                      checked={selectedValue2 === number}
                      onChange={handleChange2}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label htmlFor={`radio2-${number}`} className="block text-center text-gray-700 dark:text-gray-500">
                      {number}
                    </label>
                 </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
            3. The auditor is well-groomed and appropriately dressed.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                 <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`radio3-${number}`}
                      name="rating3"
                      value={number}
                      checked={selectedValue3 === number}
                      onChange={handleChange3}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label htmlFor={`radio3-${number}`} className="block text-center text-gray-700 dark:text-gray-500">
                      {number}
                    </label>
                 </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
            4. The auditor arrived well-prepared and conducted the audit with ease.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                 <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`radio4-${number}`}
                      name="rating4"
                      value={number}
                      checked={selectedValue4 === number}
                      onChange={handleChange4}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label htmlFor={`radio4-${number}`} className="block text-center text-gray-700 dark:text-gray-500">
                      {number}
                    </label>
                 </div>
                ))}
              </div>
            </div>

                <p className="text-black-500 text-xl font-bold mt-8">
            5. The auditor demonstrated a good understanding of the audit process.
            </p>
            <div className="flex justify-center mt-5">
            <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                <div key={number} className="flex flex-col items-center">
                    <input
                    type="radio"
                    id={`radio5-${number}`}
                    name="rating5"
                    value={number}
                    checked={selectedValue5 === number}
                    onChange={handleChange5}
                    className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label htmlFor={`radio5-${number}`} className="block text-center text-gray-700 dark:text-gray-500">
                    {number}
                    </label>
                </div>
                ))}
            </div>
            </div>

                <p className="text-black-500 text-xl font-bold mt-8">
            6. The auditor effectively communicated with the auditee.
            </p>
            <div className="flex justify-center mt-5">
            <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                <div key={number} className="flex flex-col items-center">
                    <input
                    type="radio"
                    id={`radio6-${number}`}
                    name="rating6"
                    value={number}
                    checked={selectedValue6 === number}
                    onChange={handleChange6}
                    className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label htmlFor={`radio6-${number}`} className="block text-center text-gray-700 dark:text-gray-500">
                    {number}
                    </label>
                </div>
                ))}
            </div>
            </div>

                <p className="text-black-500 text-xl font-bold mt-8">
            7. The auditor demonstrated professionalism and competence throughout the audit.
            </p>
            <div className="flex justify-center mt-5">
            <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                <div key={number} className="flex flex-col items-center">
                    <input
                    type="radio"
                    id={`radio7-${number}`}
                    name="rating7"
                    value={number}
                    checked={selectedValue7 === number}
                    onChange={handleChange7}
                    className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label htmlFor={`radio7-${number}`} className="block text-center text-gray-700 dark:text-gray-500">
                    {number}
                    </label>
                </div>
                ))}
            </div>
            </div>

            <div className="flex justify-center mt-5">
              {/* Navigation buttons */}
              <Link to="/iaeval2" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">Back</Link>
              <Link to="/iaeval4" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
 );
};

export default IAEval3;