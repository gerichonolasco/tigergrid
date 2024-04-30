import React, { FC, useState, ChangeEvent } from "react";
import ManageIAEvalPage1 from "../components/ManageIAEval/ManageIAEvalPage1";
import ManageIAEvalPage2 from "../components/ManageIAEval/ManageIAEvalPage2";
import ManageIAEvalPage3 from "../components/ManageIAEval/ManageIAEvalPage3";
import ManageIAEvalPage4 from "../components/ManageIAEval/ManageIAEvalPage4";

interface IAQuestion {
  iaQuestion: string;
  iaInputType: string;
  iaDropdownChoices: string[];
}

const ManageIAEval: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [questions, setQuestions] = useState<IAQuestion[]>([]);
  const [question, setQuestion] = useState<IAQuestion>({
    iaQuestion: "",
    iaInputType: "",
    iaDropdownChoices: [],
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
      const updatedDropdownChoices = [...prevQuestion.iaDropdownChoices];
      updatedDropdownChoices[index] = value;
      return {
        ...prevQuestion,
        iaDropdownChoices: updatedDropdownChoices,
      };
    });
  };

  const addDropdownChoice = () => {
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      iaDropdownChoices: [...prevQuestion.iaDropdownChoices, ""],
    }));
  };

  const removeDropdownChoice = (index: number) => {
    setQuestion((prevQuestion) => {
      const updatedDropdownChoices = [...prevQuestion.iaDropdownChoices];
      updatedDropdownChoices.splice(index, 1);
      return {
        ...prevQuestion,
        iaDropdownChoices: updatedDropdownChoices,
      };
    });
  };

  const addQuestion = () => {
    if (question.iaQuestion && question.iaInputType) {
      setQuestions((prevQuestions) => [...prevQuestions, question]);
      setQuestion({
        iaQuestion: "",
        iaInputType: "",
        iaDropdownChoices: [],
      });
      setError("");
    } else {
      setError("Please complete all fields before adding.");
    }
  };

  const editQuestion = (index: number, updatedQuestion: IAQuestion) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[index] = updatedQuestion; // Replace old question with updated question
      return newQuestions;
    });
    setQuestion({
      iaQuestion: updatedQuestion.iaQuestion,
      iaInputType: updatedQuestion.iaInputType,
      iaDropdownChoices: [...updatedQuestion.iaDropdownChoices], // Make sure sfDropdownChoices is copied
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
            <h1 className="text-2xl">Manage Internal Auditor's Evaluation Form</h1>
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
          <ManageIAEvalPage1
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
          <ManageIAEvalPage2
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
          <ManageIAEvalPage3
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
          <ManageIAEvalPage4
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

export default ManageIAEval;
