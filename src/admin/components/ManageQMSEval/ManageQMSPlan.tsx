import React, { FC, ChangeEvent, useState } from "react";

interface QMSQuestion {
  qmsQuestion: string;
  qmsInputType: string;
  qmsDropdownChoices: string[];
}

interface ManageQMSPlanProps {
  questions: QMSQuestion[];
  question: QMSQuestion;
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
  editQuestion: (index: number, updatedQuestion: QMSQuestion) => void; // Pass updated question data
  deleteQuestion: (index: number) => void;
  error: string;
}

const ManageQMSPlan: FC<ManageQMSPlanProps> = ({
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
  const [editedQuestion, setEditedQuestion] = useState<QMSQuestion>({
    qmsQuestion: "",
    qmsInputType: "",
    qmsDropdownChoices: [],
  });

  const handleEdit = (index: number) => {
    setEditMode(true);
    setEditingIndex(index);
    setEditedQuestion(questions[index]);
    // If the selected question is a Dropdown type, clear its choices
    if (questions[index].qmsInputType === "Dropdown") {
      handleInputChange(
        { target: { value: "" } } as ChangeEvent<
          HTMLInputElement | HTMLSelectElement
        >,
        "qmsDropdownChoices"
      );
    }
  };

  const handleSaveChanges = () => {
    setEditMode(false);
    setEditingIndex(-1);
    editQuestion(editingIndex, editedQuestion);
    // Clear the edited question state
    setEditedQuestion({
      qmsQuestion: "",
      qmsInputType: "",
      qmsDropdownChoices: [],
    });
    // Clear the question state for the next input
    handleInputChange(
      { target: { value: "" } } as ChangeEvent<
        HTMLInputElement | HTMLSelectElement
      >,
      "qmsQuestion"
    );
    handleInputChange(
      { target: { value: "" } } as ChangeEvent<
        HTMLInputElement | HTMLSelectElement
      >,
      "qmsInputType"
    );
    handleInputChange(
      { target: { value: [] } } as ChangeEvent<
        HTMLInputElement | HTMLSelectElement
      >,
      "qmsDropdownChoices"
    );
  };

  const handleInputTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setEditedQuestion((prevQuestion) => ({
      ...prevQuestion,
      qmsInputType: value,
    }));
    if (value === "Dropdown") {
      // Clear the choices when changing input type to Dropdown
      handleInputChange(
        { target: { value: [] } } as ChangeEvent<
          HTMLInputElement | HTMLSelectElement
        >,
        "qmsDropdownChoices"
      );
    }
  };

  return (
    <div className="text-gray-900 bg-gray-200">
      <div className="p-4 flex">
        <h1 className="text-2xl">
          Manage QMS Form - Plan
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
            {questions.map((QMSQuestion, index) => (
              <tr
                key={index}
                className="border-b hover:bg-orange-100 bg-gray-100"
              >
                <td className="p-3 px-5">{index + 1}</td>
                <td className="p-3 px-5">{QMSQuestion.qmsQuestion}</td>
                <td className="p-3 px-5">{QMSQuestion.qmsInputType}</td>
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
                    name={`qmsQuestion-${editingIndex}`}
                    placeholder="Enter Question"
                    className="bg-transparent border-b-2 border-gray-300 py-2"
                    value={editedQuestion.qmsQuestion}
                    onChange={(e) =>
                      setEditedQuestion({
                        ...editedQuestion,
                        qmsQuestion: e.target.value,
                      })
                    }
                  />
                </td>
                <td className="p-3 px-5">
                  <select
                    value={editedQuestion.qmsInputType}
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

                  {editedQuestion.qmsInputType === "Dropdown" && (
                    <div>
                      {editedQuestion.qmsDropdownChoices.map((choice, choiceIndex) => (
                        <div key={choiceIndex} className="mt-2">
                          <input
                            type="text"
                            placeholder={`Choice ${choiceIndex + 1}`}
                            className="bg-transparent border-b-2 border-gray-300 py-2"
                            value={choice}
                            onChange={(e) =>
                              setEditedQuestion((prevQuestion) => {
                                const updatedChoices = [...prevQuestion.qmsDropdownChoices];
                                updatedChoices[choiceIndex] = e.target.value;
                                return {
                                  ...prevQuestion,
                                  qmsDropdownChoices: updatedChoices,
                                };
                              })
                            }
                          />
                          <button
                            type="button"
                            className="ml-2 text-red-500"
                            onClick={() => {
                              const updatedChoices = [...editedQuestion.qmsDropdownChoices];
                              updatedChoices.splice(choiceIndex, 1);
                              setEditedQuestion((prevQuestion) => ({
                                ...prevQuestion,
                                qmsDropdownChoices: updatedChoices,
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
                            qmsDropdownChoices: [...prevQuestion.qmsDropdownChoices, ""],
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
                    name={`qmsQuestion-${questions.length}`}
                    placeholder="Enter Question"
                    className="bg-transparent border-b-2 border-gray-300 py-2"
                    value={question.qmsQuestion}
                    onChange={(e) => handleInputChange(e, "qmsQuestion")}
                  />
                </td>
                <td className="p-3 px-5">
                  <select
                    value={question.qmsInputType}
                    className="bg-transparent border-b-2 border-gray-300 py-2"
                    onChange={(e) => handleInputChange(e, "qmsInputType")}
                  >
                    <option value="" disabled>
                      Choose Input Type
                    </option>
                    <option value="Text">Text</option>
                    <option value="Dropdown">Dropdown</option>
                    <option value="Radio Button">Radio Button</option>
                  </select>

                  {question.qmsInputType === "Dropdown" && (
                    <div>
                      {question.qmsDropdownChoices.map((choice, index) => (
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

export default ManageQMSPlan;