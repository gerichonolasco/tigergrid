import React, { FC, useState } from "react";

const AddQuestionSF: FC = () => {
  const [inputType, setInputType] = useState<string>("");
  const [dropdownQuestion, setDropdownQuestion] = useState<string>("");
  const [dropdownChoices, setDropdownChoices] = useState<string[]>([""]);
  const [additionalTextInput, setAdditionalTextInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputType(event.target.value);
    // Clear previous dropdown choices when input type changes
    setDropdownChoices([]);
  };

  const handleAddChoice = () => {
    setDropdownChoices([...dropdownChoices, ""]);
  };

  const handleDeleteChoice = (index: number) => {
    const updatedChoices = [...dropdownChoices];
    updatedChoices.splice(index, 1);
    setDropdownChoices(updatedChoices);
  };

  const handleChoiceChange = (index: number, value: string) => {
    const updatedChoices = [...dropdownChoices];
    updatedChoices[index] = value;
    setDropdownChoices(updatedChoices);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDropdownQuestion(event.target.value);
  };

  const handleAdditionalInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdditionalTextInput(event.target.value);
  };

  return (
    <form className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md p-6">
      <div className="mb-4">
        <label htmlFor="formdescription" className="block text-sm font-medium text-gray-700">
          Input Type
        </label>
        <select
          id="formdescription"
          className="mt-1 p-2 w-full border rounded-md"
          required
          onChange={handleInputChange}
        >
          <option value="">Select input type</option>
          <option value="SFtext">Text</option>
          <option value="SFdropdown">Dropdown</option>
          <option value="SFrbuttons">Radio Buttons</option>
        </select>
      </div>

      {inputType === "SFdropdown" && (
        <div className="mb-4">
          <label htmlFor="dropdownQuestion" className="block text-sm font-medium text-gray-700">
            Dropdown Question
          </label>
          <input
            type="text"
            id="dropdownQuestion"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your dropdown question"
            value={dropdownQuestion}
            onChange={handleQuestionChange}
            required
          />

          <div className="mt-4 space-y-2">
            {dropdownChoices.map((choice, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder={`Option ${index + 1}`}
                  value={choice}
                  onChange={(e) => handleChoiceChange(index, e.target.value)}
                  required
                />
                {index !== 0 && ( // Allow deleting choices except the first one
                  <button
                    type="button"
                    className="ml-2 flex-shrink-0 p-1 rounded-full bg-red-500 text-white focus:outline-none"
                    onClick={() => handleDeleteChoice(index)}
                  >
                    &#10005; {/* Render delete icon (X) */}
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-1 bg-yellow-500 text-white rounded-md px-3 py-1 text-sm"
            onClick={handleAddChoice}
          >
            Add Choice
          </button>
        </div>
      )}

      {inputType === "SFtext" && (
        <div className="mb-4">
          <label htmlFor="additionalTextInput" className="block text-sm font-medium text-gray-700">
            Text Question
          </label>
          <input
            type="text"
            id="additionalTextInput"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter additional text"
            value={additionalTextInput}
            onChange={handleAdditionalInputChange}
            required
          />
        </div>
      )}

      {inputType === "SFrbuttons" && (
        <div className="mb-4">
          <label htmlFor="additionalTextInput" className="block text-sm font-medium text-gray-700">
            Radio Button Question
          </label>
          <input
            type="text"
            id="additionalTextInput"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter additional text"
            value={additionalTextInput}
            onChange={handleAdditionalInputChange}
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md mt-4"
      >
        Add Question
      </button>
    </form>
  );
};

export default AddQuestionSF;
