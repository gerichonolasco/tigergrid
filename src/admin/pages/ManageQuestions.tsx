import React, { FC, useState, ChangeEvent } from "react";
import NewFormPage1 from "../components/ManageQuestions/NewFormPage1";
import NewFormPage2 from "../components/ManageQuestions/NewFormPage2";
import NewFormPage3 from "../components/ManageQuestions/NewFormPage3";
import NewFormPage4 from "../components/ManageQuestions/NewFormPage4";

interface NewQuestion {
	newQuestion: string;
	newInputType: string;
	newDropdownChoices: string[];
}

const ManageQuestions: FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [questions, setQuestions] = useState<NewQuestion[]>([]);
	const [question, setQuestion] = useState<NewQuestion>({
		newQuestion: "",
		newInputType: "",
		newDropdownChoices: [],
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
			newDropdownChoices: [...updatedQuestion.newDropdownChoices], // Make sure newDropdownChoices is copied
		});
	};

	const deleteQuestion = (index: number) => {
		setQuestions((prevQuestions) =>
			prevQuestions.filter((_, i) => i !== index)
		);
	};

	const handlePageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setCurrentPage(Number(e.target.value));
	};

	return (
		<div className="flex justify-center items-center bg-cover bg-center bg-main-building">
			<div>
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
		</div>
	);
};

export default ManageQuestions;
