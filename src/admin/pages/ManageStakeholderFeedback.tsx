import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const ManageStakeholderFeedback: FC = () => {
  const [question, setQuestion] = useState({ text: "", inputType: "Text", dropdownChoices: [] });
  const [questions, setQuestions] = useState([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  const handleDropdownChange = (index, e) => {
    const { value } = e.target;
    const updatedDropdownChoices = [...question.dropdownChoices];
    updatedDropdownChoices[index] = value;
    setQuestion({ ...question, dropdownChoices: updatedDropdownChoices });
  };

  const addDropdownChoice = () => {
    setQuestion({ ...question, dropdownChoices: [...question.dropdownChoices, ""] });
  };

  const removeDropdownChoice = (index) => {
    const updatedDropdownChoices = question.dropdownChoices.filter((_, i) => i !== index);
    setQuestion({ ...question, dropdownChoices: updatedDropdownChoices });
  };

  const validateInputs = () => {
    if (!question.text || !question.inputType) {
      setError("Please fill in all required fields.");
      return false;
    }
    if (question.inputType === "Dropdown" && question.dropdownChoices.some(choice => !choice)) {
      setError("Please fill in all dropdown choices.");
      return false;
    }
    setError("");
    return true;
  };

  const addQuestion = () => {
    if (!validateInputs()) return;
    const newQuestion = { ...question };
    if (newQuestion.inputType !== "Dropdown") {
      delete newQuestion.dropdownChoices;
    }
    if (editingIndex !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[editingIndex] = newQuestion;
      setQuestions(updatedQuestions);
      setEditingIndex(null);
    } else {
      setQuestions([...questions, newQuestion]);
    }
    setQuestion({ text: "", inputType: "Text", dropdownChoices: [] });
  };

  const editQuestion = (index) => {
    const editingQuestion = questions[index];
    setQuestion(editingQuestion);
    setEditingIndex(index);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="flex justify-center items-center bg-cover bg-center bg-main-building">
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-2xl">Manage Stakeholder's Feedback Questions</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Number</th>
                <th className="text-left p-3 px-5">Question</th>
                <th className="text-left p-3 px-5">Input Type</th>
                <th className="text-left p-3 px-5">Actions</th>
                <th></th>
              </tr>
              {questions.map((question, index) => (
                <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">
                  <td className="p-3 px-5">{index + 1}</td>
                  <td className="p-3 px-5">{question.text}</td>
                  <td className="p-3 px-5">{question.inputType}</td>
                  <td className="p-3 px-5">
                    <button type="button" className="text-blue-500" onClick={() => editQuestion(index)}>Edit</button>
                    <span className="text-blue-500 mx-1 underline">|</span>
                    <button type="button" className="text-blue-500" onClick={() => deleteQuestion(index)}>Delete</button>
                  </td>
                </tr>
              ))}
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">{questions.length + 1}</td>
                <td className="p-3 px-5">
                  <input type="text" name="text" placeholder="Enter Question" className="bg-transparent border-b-2 border-gray-300 py-2" value={question.text} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                  <select name="inputType" value={question.inputType} className="bg-transparent border-b-2 border-gray-300 py-2" onChange={handleInputChange}>
                    <option value="Text">Text</option>
                    <option value="Dropdown">Dropdown</option>
                    <option value="Radio Button">Radio Button</option>
                  </select>
                  {question.inputType === "Dropdown" && (
                    <div>
                      {question.dropdownChoices.map((choice, index) => (
                        <div key={index} className="mt-2">
                          <input
                            type="text"
                            placeholder={`Choice ${index + 1}`}
                            className="bg-transparent border-b-2 border-gray-300 py-2"
                            value={choice}
                            onChange={(e) => handleDropdownChange(index, e)}
                          />
                          <button type="button" className="ml-2 text-red-500" onClick={() => removeDropdownChoice(index)}>Remove</button>
                        </div>
                      ))}
                      <button type="button" className="mt-2 text-green-500" onClick={addDropdownChoice}>Add Choice</button>
                    </div>
                  )}
                </td>
                <td className="p-3 px-5">
                  <button type="button" onClick={addQuestion} className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Add</button>
                </td>
              </tr>
              {error && (
                <tr className="bg-red-100">
                  <td colSpan={5} className="p-3 text-red-500">{error}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStakeholderFeedback;
