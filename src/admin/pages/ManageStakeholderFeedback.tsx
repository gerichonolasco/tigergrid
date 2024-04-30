import React, { FC, useState, ChangeEvent } from "react";
import ManageStakeholderPage1 from "../components/ManageStakeholderFeedback/ManageStakeholderPage1";
import ManageStakeholderPage2 from "../components/ManageStakeholderFeedback/ManageStakeholderPage2";
import ManageStakeholderPage3 from "../components/ManageStakeholderFeedback/ManageStakeholderPage3";
import ManageStakeholderPage4 from "../components/ManageStakeholderFeedback/ManageStakeholderPage4";

interface SFQuestion {
  sfQuestion: string;
  sfInputType: string;
  sfDropdownChoices: string[];
}

const ManageStakeholderFeedback: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [users, setUsers] = useState<SFQuestion[]>([]);
  const [user, setUser] = useState<SFQuestion>({
    sfQuestion: "",
    sfInputType: "",
    sfDropdownChoices: [],
  });
  const [error, setError] = useState<string>("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    const { value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleDropdownChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setUser((prevUser) => {
      const updatedDropdownChoices = [...prevUser.sfDropdownChoices];
      updatedDropdownChoices[index] = value;
      return {
        ...prevUser,
        sfDropdownChoices: updatedDropdownChoices,
      };
    });
  };

  const addDropdownChoice = () => {
    setUser((prevUser) => ({
      ...prevUser,
      sfDropdownChoices: [...prevUser.sfDropdownChoices, ""],
    }));
  };

  const removeDropdownChoice = (index: number) => {
    setUser((prevUser) => {
      const updatedDropdownChoices = [...prevUser.sfDropdownChoices];
      updatedDropdownChoices.splice(index, 1);
      return {
        ...prevUser,
        sfDropdownChoices: updatedDropdownChoices,
      };
    });
  };

  const addUser = () => {
    if (user.sfQuestion && user.sfInputType) {
      setUsers((prevUsers) => [...prevUsers, user]);
      setUser({
        sfQuestion: "",
        sfInputType: "",
        sfDropdownChoices: [],
      });
      setError("");
    } else {
      setError("Please complete all fields before adding.");
    }
  };

  const editUser = (index: number, updatedUser: SFQuestion) => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      newUsers[index] = updatedUser; // Replace old user with updated user
      return newUsers;
    });
    setUser({
      sfQuestion: updatedUser.sfQuestion,
      sfInputType: updatedUser.sfInputType,
      sfDropdownChoices: [...updatedUser.sfDropdownChoices], // Make sure sfDropdownChoices is copied
    });
  };

  const deleteUser = (index: number) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  const handlePageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(Number(e.target.value));
  };

  return (
    <div className="flex justify-center items-center bg-cover bg-center bg-main-building">
      <div>
        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-2xl">Manage Stakeholder's Feedback Form</h1>
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
          <ManageStakeholderPage1
            users={users}
            user={user}
            handleInputChange={handleInputChange}
            handleDropdownChange={handleDropdownChange}
            addDropdownChoice={addDropdownChoice}
            removeDropdownChoice={removeDropdownChoice}
            addUser={addUser}
            editUser={editUser}
            deleteUser={deleteUser}
            error={error}
          />
        )}
        {currentPage === 2 && (
          <ManageStakeholderPage2
            users={users}
            user={user}
            handleInputChange={handleInputChange}
            handleDropdownChange={handleDropdownChange}
            addDropdownChoice={addDropdownChoice}
            removeDropdownChoice={removeDropdownChoice}
            addUser={addUser}
            editUser={editUser}
            deleteUser={deleteUser}
            error={error}
          />
        )}
        {currentPage === 3 && (
          <ManageStakeholderPage3
            users={users}
            user={user}
            handleInputChange={handleInputChange}
            handleDropdownChange={handleDropdownChange}
            addDropdownChoice={addDropdownChoice}
            removeDropdownChoice={removeDropdownChoice}
            addUser={addUser}
            editUser={editUser}
            deleteUser={deleteUser}
            error={error}
          />
        )}
        {currentPage === 4 && (
          <ManageStakeholderPage4
            users={users}
            user={user}
            handleInputChange={handleInputChange}
            handleDropdownChange={handleDropdownChange}
            addDropdownChoice={addDropdownChoice}
            removeDropdownChoice={removeDropdownChoice}
            addUser={addUser}
            editUser={editUser}
            deleteUser={deleteUser}
            error={error}
          />
        )}
      </div>
    </div>
  );
};

export default ManageStakeholderFeedback;
