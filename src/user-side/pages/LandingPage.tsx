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
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 mx-4">
        {forms.map((form) => (
          <div
            key={form.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={form.imageSource}
              alt="Form"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {form.title}
              </h3>
              <p className="text-gray-600">{form.description}</p>
              <div className="mt-4 flex justify-center">
                <Link
                  to={`/form/${form.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
