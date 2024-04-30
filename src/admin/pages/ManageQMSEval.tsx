import React, { FC, useState, ChangeEvent } from "react";
import ManageQMSPlan from "../components/ManageQMSEval/ManageQMSPlan";
import ManageQMSDo from "../components/ManageQMSEval/ManageQMSDo";
import ManageQMSCheck from "../components/ManageQMSEval/ManageQMSCheck";
import ManageQMSAct from "../components/ManageQMSEval/ManageQMSAct";

interface QMSQuestion {
  qmsQuestion: string;
  qmsInputType: string;
  qmsDropdownChoices: string[];
}

const ManageQMSEval: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [questions, setQuestions] = useState<QMSQuestion[]>([]);
  const [question, setQuestion] = useState<QMSQuestion>({
    qmsQuestion: "",
    qmsInputType: "",
    qmsDropdownChoices: [],
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
      const updatedDropdownChoices = [...prevQuestion.qmsDropdownChoices];
      updatedDropdownChoices[index] = value;
      return {
        ...prevQuestion,
        qmsDropdownChoices: updatedDropdownChoices,
      };
    });
  };

  const addDropdownChoice = () => {
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      qmsDropdownChoices: [...prevQuestion.qmsDropdownChoices, ""],
    }));
  };

  const removeDropdownChoice = (index: number) => {
    setQuestion((prevQuestion) => {
      const updatedDropdownChoices = [...prevQuestion.qmsDropdownChoices];
      updatedDropdownChoices.splice(index, 1);
      return {
        ...prevQuestion,
        qmsDropdownChoices: updatedDropdownChoices,
      };
    });
  };

  const addQuestion = () => {
    if (question.qmsQuestion && question.qmsInputType) {
      setQuestions((prevQuestions) => [...prevQuestions, question]);
      setQuestion({
        qmsQuestion: "",
        qmsInputType: "",
        qmsDropdownChoices: [],
      });
      setError("");
    } else {
      setError("Please complete all fields before adding.");
    }
  };

  const editQuestion = (index: number, updatedQuestion: QMSQuestion) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[index] = updatedQuestion; // Replace old question with updated question
      return newQuestions;
    });
    setQuestion({
      qmsQuestion: updatedQuestion.qmsQuestion,
      qmsInputType: updatedQuestion.qmsInputType,
      qmsDropdownChoices: [...updatedQuestion.qmsDropdownChoices], // Make sure qmsDropdownChoices is copied
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
            <h1 className="text-2xl">Manage QMS Form</h1>
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
                <option value={1}>Plan</option>
                <option value={2}>Do</option>
                <option value={3}>Check</option>
                <option value={4}>Act</option>
              </select>
            </div>
          </div>
        </div>
        {currentPage === 1 && (
          <ManageQMSPlan
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
          <ManageQMSDo
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
          <ManageQMSCheck
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
          <ManageQMSAct
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

export default ManageQMSEval;
