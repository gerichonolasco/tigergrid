import React, { FC, useState, ChangeEvent } from "react";
import ManageQMSPlan from "../components/ManageQMSEval/ManageQMSPlan";
import ManageQMSDo from "../components/ManageQMSEval/ManageQMSDo";
import ManageQMSCheck from "../components/ManageQMSEval/ManageQMSCheck";
import ManageQMSAct from "../components/ManageQMSEval/ManageQMSAct";

interface SFQuestion {
  sfQuestion: string;
  sfInputType: string;
  sfDropdownChoices: string[];
}

const ManageQMSEval: FC = () => {
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
            <h1 className="text-2xl">Manage QMS Form</h1>
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
                <option value={1}>Plan</option>
                <option value={2}>Do</option>
                <option value={3}>Check</option>
                <option value={4}>Act</option>
              </select>
            </div>
          </div>
        </div>
        {currentPage === 1 && (
          <ManageQMSPlan
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
          <ManageQMSDo
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
          <ManageQMSCheck
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
          <ManageQMSAct
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

export default ManageQMSEval;
