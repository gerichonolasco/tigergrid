import React, { FC, useState } from "react";
import FormItem from "../components/Dashboard/FormItem";
import AddFormButton from "../components/Dashboard/AddFormButton";
import FormResponse from "../components/Dashboard/FormResponse"; // Import FormResponse component
import EditForm from "../components/Dashboard/EditForm"; // Import EditForm component

interface Form {
  title: string;
  description: string;
  imageSource: string;
  userTypeVisibility: string[];
  visible: boolean;
  sections: Map<number, FormSection>;
} 

interface FormSection {
  id: number;
  title: string;
  answers: FormQuestion[];
}

interface FormQuestion {
  id: number;
  question: string;
  answer: string;
}

const Dashboard: FC = () => {
  const [forms, setForms] = useState<Form[]>([
    {
      title: "Sample Form 1",
      description: "This is a sample form for demonstration purposes.",
      imageSource: "https://via.placeholder.com/150",
      userTypeVisibility: ["user", "admin"],
      visible: true,
      sections: new Map(),
    },
    {
      title: "Sample Form 2",
      description: "Another sample form to showcase form items.",
      imageSource: "https://via.placeholder.com/150",
      userTypeVisibility: ["user", "admin"],
      visible: true,
      sections: new Map(),
    }
  ]);

  const [viewingFormIndex, setViewingFormIndex] = useState<number | null>(null); // State to track viewing form index
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingFormIndex, setEditingFormIndex] = useState<number | null>(null);

  const toggleVisibility = (index: number) => {
    const updatedForms = [...forms];
    updatedForms[index].visible = !updatedForms[index].visible;
    setForms(updatedForms);
  };

  const addForm = () => {
    const newForm: Form = {
      title: "New Form",
      description: "",
      imageSource: "",
      userTypeVisibility: [],
      visible: true,
      sections: new Map()
    };
    setForms([...forms, newForm]);
  };

  const editForm = (index: number) => {
    setIsEditing(true);
    setEditingFormIndex(index);
  };

  const viewForm = (index: number) => {
    setViewingFormIndex(index); // Set the viewing form index
  };

  const closeFormResponse = () => {
    setViewingFormIndex(null); // Close the FormResponse component
  };

  const handleSubmit = async (formData: any) => {
    // Perform form submission logic here
    console.log(formData);
    setIsEditing(false);
    setEditingFormIndex(null);
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <AddFormButton onClick={addForm} />
      </div>
      <div className="grid gap-2 lg:grid-cols-4">
        {isEditing ? (
          <EditForm form={forms[editingFormIndex!]} onSubmit={handleSubmit} />
        ) : (
          <>
            {forms.map((form, index) => (
              <FormItem
                key={index}
                title={form.title}
                img={form.imageSource}
                content={form.description}
                showOnUserSide={form.visible}
                toggleShowOnUserSide={() => toggleVisibility(index)}
                onEdit={() => editForm(index)} // Pass edit function
                onView={() => viewForm(index)} // Pass view function
              />
            ))}
          </>
        )}
      </div>
      {viewingFormIndex !== null && ( // Render FormResponse if viewingFormIndex is not null
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="relative w-full max-w-3xl bg-white p-4 rounded-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 bg-gray-200 rounded-full p-2"
              onClick={closeFormResponse}
            >
              Close
            </button>
            <FormResponse
              formTitle={forms[viewingFormIndex].title}
              sections={forms[viewingFormIndex].sections}
              users={[]} // Pass empty array for users, you can populate it as needed
              onClose={closeFormResponse} // Pass onClose function to FormResponse
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
