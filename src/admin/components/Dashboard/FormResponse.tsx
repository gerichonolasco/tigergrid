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
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                <thead>
                    <tr>
                        <th className="py-2 px-3 bg-gray-100 border-b border-gray-300">User</th>
                        {questions && Array.from(questions).map((question, index) => (
                            <th key={index} className="py-2 px-3 bg-gray-100 border-b border-gray-300">{question.question}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, userIndex) => (
                        <tr key={userIndex} className={userIndex % 2 === 0 ? "bg-gray-50" : ""}>
                            <td className="py-2 px-3 border-b border-gray-300">{`${user.firstName} ${user.lastName}`}</td>
                            {questions && Array.from(questions).map((question, questionIndex) => (
                                <td key={questionIndex} className="py-2 px-3 border-b border-gray-300">
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

const dummyUsers = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Bob", lastName: "Johnson" }
];

const dummySections = new Map<number, ResponseSection>();
dummySections.set(1, {
    title: "Section 1",
    answers: new Map<number, ResponseAnswer>([
        [1, { question: "Question 1", answer: 3 }],
        [2, { question: "Question 2", answer: 2 }],
        [3, { question: "Question 3", answer: 5 }]
    ])
});
dummySections.set(2, {
    title: "Section 2",
    answers: new Map<number, ResponseAnswer>([
        [1, { question: "Question 1", answer: 4 }],
        [2, { question: "Question 2", answer: 1 }],
        [3, { question: "Question 3", answer: 2 }]
    ])
});

const App: FC = () => {
    return (
        <div className="App">
            <FormResponse formTitle="Example Form" sections={dummySections} users={dummyUsers} />
        </div>
    );
};

export default App;
