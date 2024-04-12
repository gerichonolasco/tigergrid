import React, { FC, useState } from "react";

const AddForm: FC = () => {
  const [formTitle, setFormTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle form submission logic
    console.log("Form submitted!");
    // Reset form fields after submission (if needed)
    setFormTitle("");
    setDescription("");
    setFile(null);
  };

  return (
    <form
      className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md p-6"
      onSubmit={handleSubmit}
    >
      <div className="mb-5">
        <label htmlFor="formtitle" className="block mb-2 text-sm font-medium text-gray-900">
          Form Title
        </label>
        <input
          type="text"
          id="formtitle"
          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Title of Form"
          value={formTitle}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="formdescription" className="block mb-2 text-sm font-medium text-gray-900">
          Description
        </label>
        <input
          type="text"
          id="formdescription"
          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="user_avatar" className="block mb-2 text-sm font-medium text-gray-900">
          Upload File
        </label>
        <input
          className="w-full p-2.5 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg py-2.5 text-sm focus:ring-4 focus:outline-none focus:ring-yellow-500"
      >
        Add Form
      </button>
    </form>
  );
};

export default AddForm;
