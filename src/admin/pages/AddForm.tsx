import React, { FC, useState, ChangeEvent } from "react";
import NewFormPage1 from "../components/AddForm/NewFormPage1";
import NewFormPage2 from "../components/AddForm/NewFormPage2";
import NewFormPage3 from "../components/AddForm/NewFormPage3";
import NewFormPage4 from "../components/AddForm/NewFormPage4";

interface NewQuestion {
  newQuestion: string;
  newInputType: string;
  newDropdownChoices: string[];
}

const AddForm: FC = () => {
  const [formTitle, setFormTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [questions, setQuestions] = useState<NewQuestion[]>([]);
  const [question, setQuestion] = useState<NewQuestion>({
    newQuestion: "",
    newInputType: "",
    newDropdownChoices: [],
  });
  const [error, setError] = useState<string>("");

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      title: formTitle,
      description: description,
      sections: {} // Prepare sections based on your form structure
    };

    // Send formData to backend API for storage
    try {
      const response = await fetch("/api/addForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Form successfully added
        console.log("Form submitted!");
        setFormTitle("");
        setDescription("");
        setFile(null);
      } else {
        // Handle error response
        setError("Failed to add form. Please try again.");
      }
    } catch (error) {
      // Handle network error
      setError("Failed to connect to the server.");
    }
  };

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
      const updatedDropdownChoices = [...prevQuestion.newDropdownChoices];
      updatedDropdownChoices[index] = value;
      return {
        ...prevQuestion,
        newDropdownChoices: updatedDropdownChoices,
      };
    });
  };

  const addDropdownChoice = () => {
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      newDropdownChoices: [...prevQuestion.newDropdownChoices, ""],
    }));
  };

  const removeDropdownChoice = (index: number) => {
    setQuestion((prevQuestion) => {
      const updatedDropdownChoices = [...prevQuestion.newDropdownChoices];
      updatedDropdownChoices.splice(index, 1);
      return {
        ...prevQuestion,
        newDropdownChoices: updatedDropdownChoices,
      };
    });
  };

  const addQuestion = () => {
    if (question.newQuestion && question.newInputType) {
      setQuestions((prevQuestions) => [...prevQuestions, question]);
      setQuestion({
        newQuestion: "",
        newInputType: "",
        newDropdownChoices: [],
      });
      setError("");
    } else {
      setError("Please complete all fields before adding.");
    }
  };

  const editQuestion = (index: number, updatedQuestion: NewQuestion) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[index] = updatedQuestion; // Replace old question with updated question
      return newQuestions;
    });
    setQuestion({
      newQuestion: updatedQuestion.newQuestion,
      newInputType: updatedQuestion.newInputType,
      newDropdownChoices: [...updatedQuestion.newDropdownChoices], // Make sure sfDropdownChoices is copied
    });
  };

  const deleteQuestion = (index: number) => {
    setQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
  };

  const handlePageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(Number(e.target.value));
  };

  return (
    <div>
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

      <div className="text-gray-900 bg-gray-200 mt-8">
        <div className="p-4 flex">
          <h1 className="text-2xl">Manage Questions</h1>
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
        <NewFormPage1
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
        <NewFormPage2
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
        <NewFormPage3
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
        <NewFormPage4
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
  );
};

export default AddForm;
