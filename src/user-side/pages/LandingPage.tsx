import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LandingPage: FC = () => {
 const [forms, setForms] = useState<Form[]>([]);

 useEffect(() => {
    fetchForms();
 }, []);

 const fetchForms = async () => {
    try {
      const simulatedForms: Form[] = [
        {
          //sample output only
          id: 1,
          title: "Stakeholder's Feedback",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imageSource: "/default_image.jpg", 
          sections: new Map(),
        },
      ];

      setForms(simulatedForms);
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
 };

 return (
    <>
      <div className="grid gap-2 lg:grid-cols-4 mt-2 mx-4">
        {forms.map((form) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={form.id}>
            <img
              className="object-cover w-full h-48"
              src={form.imageSource} // Use imageSource from form
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">{form.title}</h4>
              <p className="mb-2 leading-normal">{form.description}</p>
              <div className="flex justify-center items-center">
                <Link
                 to={`/form/${form.id}`}
                 className="px-4 py-2 text-sm text-blue-100 bg-yellow-500 rounded shadow text-white"
                >
                 Add Feedback
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
 );
};

export default LandingPage;
