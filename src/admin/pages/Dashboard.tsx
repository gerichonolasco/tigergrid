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
  const [forms, setForms] = useState<Form[]>([]);

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
      visible: true, // New forms are initially visible
      sections: new Map()
    };
    setForms([...forms, newForm]);
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
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
