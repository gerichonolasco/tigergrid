import React, { FC, ChangeEvent, useState } from "react";

interface SFQuestion {
  sfQuestion: string;
  sfInputType: string;
  sfDropdownChoices: string[];
}

interface ManageStakeholderPage2Props {
  questions: SFQuestion[];
  question: SFQuestion;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => void;
  handleDropdownChange: (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  addDropdownChoice: () => void;
  removeDropdownChoice: (index: number) => void;
  addQuestion: () => void;
  editquestion: (index: number, updatedQuestion: SFQuestion) => void; // Pass updated user data
  deleteQuestion: (index: number) => void;
  error: string;
}

const ManageStakeholderPage2: FC<ManageStakeholderPage2Props> = ({
  questions,
  question, 
  handleInputChange,
  handleDropdownChange,
  addDropdownChoice,
  removeDropdownChoice,
  addQuestion,
  editQuestion,
  deleteQuestion,
  error,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [editedQuestion, setEditedQuestion] = useState<SFQuestion>({
    sfQuestion: "",
    sfInputType: "",
    sfDropdownChoices: [],
  });

  const handleEdit = (index: number) => {
    setEditMode(true);
    setEditingIndex(index);
    setEditedQuestion(questions[index]);
    // If the selected question is a Dropdown type, clear its choices
    if (questions[index].sfInputType === "Dropdown") {
      handleInputChange(
        { target: { value: "" } } as ChangeEvent<
          HTMLInputElement | HTMLSelectElement
        >,
        "sfDropdownChoices"
      );
    }
  };

  const handleSaveChanges = () => {
    setEditMode(false);
    setEditingIndex(-1);
    editQuestion(editingIndex, editedQuestion);
    // Clear the edited user state
    setEditedQuestion({
      sfQuestion: "",
      sfInputType: "",
      sfDropdownChoices: [],
    });
    // Clear the user state for the next input
    handleInputChange(
      { target: { value: "" } } as ChangeEvent<
        HTMLInputElement | HTMLSelectElement
      >,
      "sfQuestion"
    );
    handleInputChange(
      { target: { value: "" } } as ChangeEvent<
        HTMLInputElement | HTMLSelectElement
      >,
      "sfInputType"
    );
    handleInputChange(
      { target: { value: [] } } as ChangeEvent<
        HTMLInputElement | HTMLSelectElement
      >,
      "sfDropdownChoices"
    );
  };

  const handleInputTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setEditedQuestion((prevQuestion) => ({
      ...prevQuestion,
      sfInputType: value,
    }));
    if (value === "Dropdown") {
      // Clear the choices when changing input type to Dropdown
      handleInputChange(
        { target: { value: [] } } as ChangeEvent<
          HTMLInputElement | HTMLSelectElement
        >,
        "sfDropdownChoices"
      );
    }
  };

  return (
    <div className="text-gray-900 bg-gray-200">
      <div className="p-4 flex">
        <h1 className="text-2xl">
          Manage Stakeholder's Feedback Form - Page 2
        </h1>
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
            {/* Table content */}
            {questions.map((SFQuestion, index) => (
              <tr
                key={index}
                className="border-b hover:bg-orange-100 bg-gray-100"
              >
                <td className="p-3 px-5">{index + 1}</td>
                <td className="p-3 px-5">{SFQuestion.sfQuestion}</td>
                <td className="p-3 px-5">{SFQuestion.sfInputType}</td>
                <td className="p-3 px-5">
                  <button
                    type="button"
                    className="text-blue-500"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <span className="text-blue-500 mx-1 underline">|</span>
                  <button
                    type="button"
                    className="text-blue-500"
                    onClick={() => deleteQuestion(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {editMode && editingIndex !== -1 && (
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">{editingIndex + 1}</td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    name={`sfQuestion-${editingIndex}`}
                    placeholder="Enter Question"
                    className="bg-transparent border-b-2 border-gray-300 py-2"
                    value={editedQuestion.sfQuestion}
                    onChange={(e) =>
                      setEditedQuestion({
                        ...editedQuestion,
                        sfQuestion: e.target.value,
                      })
                    }
                  />
                </td>
                <td className="p-3 px-5">
                  <select
                    value={editedQuestion.sfInputType}
                    className="bg-transparent border-b-2 border-gray-300 py-2"
                    onChange={handleInputTypeChange}
                  >
                    <option value="" disabled>
                      Choose Input Type
                    </option>
                    <option value="Text">Text</option>
                    <option value="Dropdown">Dropdown</option>
                    <option value="Radio Button">Radio Button</option>
                  </select>

                  {editedQuestion.sfInputType === "Dropdown" && (
                    <div>
                      {editedQuestion.sfDropdownChoices.map((choice, choiceIndex) => (
                        <div key={choiceIndex} className="mt-2">
                          <input
                            type="text"
                            placeholder={`Choice ${choiceIndex + 1}`}
                            className="bg-transparent border-b-2 border-gray-300 py-2"
                            value={choice}
                            onChange={(e) =>
                              setEditedQuestion((prevQuestion) => {
                                const updatedChoices = [...prevQuestion.sfDropdownChoices];
                                updatedChoices[choiceIndex] = e.target.value;
                                return {
                                  ...prevQuestion,
                                  sfDropdownChoices: updatedChoices,
                                };
                              })
                            }
                          />
                          <button
                            type="button"
                            className="ml-2 text-red-500"
                            onClick={() => {
                              const updatedChoices = [...editedQuestion.sfDropdownChoices];
                              updatedChoices.splice(choiceIndex, 1);
                              setEditedQuestion((prevQuestion) => ({
                                ...prevQuestion,
                                sfDropdownChoices: updatedChoices,
                              }));
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="mt-2 text-green-500"
                        onClick={() =>
                          setEditedQuestion((prevQuestion) => ({
                            ...prevQuestion,
                            sfDropdownChoices: [...prevQuestion.sfDropdownChoices, ""],
                          }))
                        }
                      >
                        Add Choice
                      </button>
                    </div>
                  )}
                </td>
                <td className="p-3 px-5">
                  <button
                    type="button"
                    onClick={handleSaveChanges}
                    className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Save Changes
                  </button>
                </td>
              </tr>
            )}
            {!editMode && (
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">{questions.length + 1}</td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    name={`sfQuestion-${questions.length}`}
                    placeholder="Enter Question"
                    className="bg-transparent border-b-2 border-gray-300 py-2"
                    value={question.sfQuestion}
                    onChange={(e) => handleInputChange(e, "sfQuestion")}
                  />
                </td>
                <td className="p-3 px-5">
                  <select
                    value={question.sfInputType}
                    className="bg-transparent border-b-2 border-gray-300 py-2"
                    onChange={(e) => handleInputChange(e, "sfInputType")}
                  >
                    <option value="" disabled>
                      Choose Input Type
                    </option>
                    <option value="Text">Text</option>
                    <option value="Dropdown">Dropdown</option>
                    <option value="Radio Button">Radio Button</option>
                  </select>

                  {question.sfInputType === "Dropdown" && (
                    <div>
                      {question.sfDropdownChoices.map((choice, index) => (
                        <div key={index} className="mt-2">
                          <input
                            type="text"
                            placeholder={`Choice ${index + 1}`}
                            className="bg-transparent border-b-2 border-gray-300 py-2"
                            value={choice}
                            onChange={(e) =>
                              handleDropdownChange(index, e)
                            } 
                          />
                          <button
                            type="button"
                            className="ml-2 text-red-500"
                            onClick={() => removeDropdownChoice(index)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="mt-2 text-green-500"
                        onClick={addDropdownChoice}
                      >
                        Add Choice
                      </button>
                    </div>
                  )}
                </td>
                <td className="p-3 px-5">
                  <button
                    type="button"
                    onClick={addQuestion}
                    className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add
                  </button>
                </td>
              </tr>
            )}
            {error && (
              <tr className="bg-red-100">
                <td colSpan={5} className="p-3 text-red-500">
                  {error}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStakeholderPage2;
