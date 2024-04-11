import React, { FC } from "react";

const AddForm: FC = () => {
  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="formtitle"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Form Title
        </label>
        <input
          type="text"
          id="formtitle"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter Title of Form"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="formdescription"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Description
        </label>
        <input
          type="text"
          id="formdescription"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter description"
          required
        />
      </div>
      <input
        className="block w-full text-sm mt-4 mb-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
      ></input>
      <br></br>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Form
      </button>
    </form>
  );
};

export default AddForm;
