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
