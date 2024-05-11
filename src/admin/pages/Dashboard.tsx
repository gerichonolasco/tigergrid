import React, { FC, useState } from "react";
import FormItem from "../components/Dashboard/FormItem";
import AddFormButton from "../components/Dashboard/AddFormButton"; 

interface Form {
  title: string;
  description: string;
  imageSource: string;
  userTypeVisibility: string[];
  visible: boolean;
  sections: Map<number, FormSection>;
}

interface FormSection {
  // Define FormSection properties according to backend model
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
    // Handle edit form functionality here
    console.log("Edit form:", forms[index]);
  };

  const viewForm = (index: number) => {
    // Handle view form functionality here
    console.log("View form:", forms[index]);
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <AddFormButton onClick={addForm} /> 
      </div>
      <div className="grid gap-2 lg:grid-cols-4">
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
      </div>
    </>
  );
};

export default Dashboard;
