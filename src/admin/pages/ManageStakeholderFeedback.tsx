import React, { FC, useState, ChangeEvent } from "react";
import ManageStakeholderPage1 from "../components/ManageStakeholderFeedback/ManageStakeholderPage1";
import ManageStakeholderPage2 from "../components/ManageStakeholderFeedback/ManageStakeholderPage2";
import ManageStakeholderPage3 from "../components/ManageStakeholderFeedback/ManageStakeholderPage3";
import ManageStakeholderPage4 from "../components/ManageStakeholderFeedback/ManageStakeholderPage4";

interface SFQuestion {
  sfQuestion: string;
  sfInputType: string;
  sfDropdownChoices: string[];
}

const ManageStakeholderFeedback: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [questions, setQuestions] = useState<SFQuestion[]>([]);
  const [question, setQuestion] = useState<SFQuestion>({
    sfQuestion: "",
    sfInputType: "",
    sfDropdownChoices: [],
  });
  const [error, setError] = useState<string>("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    const { value } = e.target;
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      [field]: value,
    }));
  };

  const handleDropdownChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setQuestion((prevQuestion) => {
      const updatedDropdownChoices = [...prevQuestion.sfDropdownChoices];
      updatedDropdownChoices[index] = value;
      return {
        ...prevQuestion,
        sfDropdownChoices: updatedDropdownChoices,
      };
    });
  };

  const addDropdownChoice = () => {
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      sfDropdownChoices: [...prevQuestion.sfDropdownChoices, ""],
    }));
  };

  const removeDropdownChoice = (index: number) => {
    setQuestion((prevQuestion) => {
      const updatedDropdownChoices = [...prevQuestion.sfDropdownChoices];
      updatedDropdownChoices.splice(index, 1);
      return {
        ...prevQuestion,
        sfDropdownChoices: updatedDropdownChoices,
      };
    });
  };

  const addQuestion = () => {
    if (question.sfQuestion && question.sfInputType) {
      setQuestions((prevQuestions) => [...prevQuestions, question]);
      setQuestion({
        sfQuestion: "",
        sfInputType: "",
        sfDropdownChoices: [],
      });
      setError("");
    } else {
      setError("Please complete all fields before adding.");
    }
  };

  const editQuestion = (index: number, updatedQuestion: SFQuestion) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[index] = updatedQuestion; // Replace old question with updated question
      return newQuestions;
    });
    setQuestion({
      sfQuestion: updatedQuestion.sfQuestion,
      sfInputType: updatedQuestion.sfInputType,
      sfDropdownChoices: [...updatedQuestion.sfDropdownChoices], // Make sure sfDropdownChoices is copied
    });
  };

  const deleteQuestion = (index: number) => {
    setQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
  };

  const handlePageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(Number(e.target.value));
  };

  return (
    <div className="flex justify-center items-center bg-cover bg-center bg-main-building">
      <div>
        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-2xl">Manage Stakeholder's Feedback Form</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <div className="mb-4">
              <label htmlFor="pageSelector" className="mr-2">
                Select Page:
              </label>
              <select
                id="pageSelector"
                value={currentPage}
                onChange={handlePageChange}
              >
                <option value={1}>Page 1</option>
                <option value={2}>Page 2</option>
                <option value={3}>Page 3</option>
                <option value={4}>Page 4</option>
              </select>
            </div>
          </div>
        </div>
        {currentPage === 1 && (
          <ManageStakeholderPage1
            questions={questions}
            question={question}
            handleInputChange={handleInputChange}
            handleDropdownChange={handleDropdownChange}
            addDropdownChoice={addDropdownChoice}
            removeDropdownChoice={removeDropdownChoice}
            addQuestion={addQuestion}
            editQuestion={editQuestion}
            deleteQuestion={deleteQuestion}
            error={error}
          />
        )}
        {currentPage === 2 && (
          <ManageStakeholderPage2
            questions={questions}
            question={question}
            handleInputChange={handleInputChange}
            handleDropdownChange={handleDropdownChange}
            addDropdownChoice={addDropdownChoice}
            removeDropdownChoice={removeDropdownChoice}
            addQuestion={addQuestion}
            editQuestion={editQuestion}
            deleteQuestion={deleteQuestion}
            error={error}
          />
        )}
        {currentPage === 3 && (
          <ManageStakeholderPage3
            questions={questions}
            question={question}
            handleInputChange={handleInputChange}
            handleDropdownChange={handleDropdownChange}
            addDropdownChoice={addDropdownChoice}
            removeDropdownChoice={removeDropdownChoice}
            addQuestion={addQuestion}
            editQuestion={editQuestion}
            deleteQuestion={deleteQuestion}
            error={error}
          />
        )}
        {currentPage === 4 && (
          <ManageStakeholderPage4
            questions={questions}
            question={question}
            handleInputChange={handleInputChange}
            handleDropdownChange={handleDropdownChange}
            addDropdownChoice={addDropdownChoice}
            removeDropdownChoice={removeDropdownChoice}
            addQuestion={addQuestion}
            editQuestion={editQuestion}
            deleteQuestion={deleteQuestion}
            error={error}
          />
        )}
      </div>
    </div>
  );
};

export default ManageStakeholderFeedback;
