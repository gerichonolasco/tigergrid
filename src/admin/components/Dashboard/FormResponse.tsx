import React, { FC } from "react";

interface ResponseAnswer {
    question: string;
    answer: number;
}

interface ResponseSection {
    title: string;
    answers: Map<number, ResponseAnswer>;
}

interface UserInfo {
    firstName: string;
    lastName: string;
}

interface FormResponseProps {
    formTitle: string;
    sections: Map<number, ResponseSection>;
    users: UserInfo[];
}

const FormResponse: FC<FormResponseProps> = ({ formTitle, sections, users }) => {
    const questions = Array.from(sections.values())[0]?.answers.values(); // Assuming all sections have the same questions
    
    return (
        <div className="form-response">
            <h2 className="form-title">{formTitle}</h2>
            <table className="response-table">
                <thead>
                    <tr>
                        <th>User</th>
                        {questions && Array.from(questions).map((question, index) => (
                            <th key={index}>{question.question}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, userIndex) => (
                        <tr key={userIndex}>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            {questions && Array.from(questions).map((question, questionIndex) => (
                                <td key={questionIndex}>
                                    {sections.get(userIndex + 1)?.answers.get(questionIndex + 1)?.answer}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FormResponse;
