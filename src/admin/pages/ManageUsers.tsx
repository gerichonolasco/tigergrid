import React, { useState } from "react";

const ManageUsers = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", role: "User" });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = () => {
    setUsers([...users, user]);
    setUser({ firstName: "", lastName: "", email: "", password: "", role: "User" });
  };

  const editUser = (index) => {
    setEditIndex(index);
    setUser(users[index]);
  };

  const archiveUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    if (editIndex === index) {
      setEditIndex(null);
      setUser({ firstName: "", lastName: "", email: "", password: "", role: "User" });
    }
  };

  const saveChanges = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = user;
    setUsers(updatedUsers);
    setUser({ firstName: "", lastName: "", email: "", password: "", role: "User" });
    setEditIndex(null);
  };
  
  const saveUser = () => {
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      setError("All fields are required.");
      return;
    }
    setError("");
    if (editIndex !== null) {
      saveChanges();
    } else {
      addUser();
    }
  };

  return (
    <div className="flex justify-center items-center bg-cover bg-center bg-main-building">
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-2xl">Manage Users</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">#</th>
                <th className="text-left p-3 px-5">First Name</th>
                <th className="text-left p-3 px-5">Last Name</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Password</th>
                <th className="text-left p-3 px-5">Role</th>
                <th></th>
              </tr>
              {users.map((user, index) => (
                <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">
                  <td className="p-3 px-5">{index + 1}</td>
                  <td className="p-3 px-5">
                    <input type="text" placeholder="Enter First Name" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.firstName} readOnly />
                  </td>
                  <td className="p-3 px-5">
                    <input type="text" placeholder="Enter Last Name" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.lastName} readOnly />
                  </td>
                  <td className="p-3 px-5">
                    <input type="text" placeholder="Enter Email" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.email} readOnly />
                  </td>
                  <td className="p-3 px-5">
                    <input type="password" placeholder="Enter Password" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.password} readOnly />
                  </td>
                  <td className="p-3 px-5">
                    <select value={user.role} className="bg-transparent border-b-2 border-gray-300 py-2" disabled>
                      <option value="User">User</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </td>
                  <td className="p-3 px-5 flex justify-end">
                    <button type="button" onClick={() => editUser(index)} className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                    <button type="button" onClick={() => archiveUser(index)} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Archive</button>
                  </td>
                </tr>
              ))}
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">{editIndex !== null ? editIndex + 1 : users.length + 1}</td>
                <td className="p-3 px-5">
                  <input type="text" name="firstName" placeholder="Enter First Name" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.firstName} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                  <input type="text" name="lastName" placeholder="Enter Last Name" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.lastName} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                  <input type="text" name="email" placeholder="Enter Email" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.email} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                  <input type="password" name="password" placeholder="Enter Password" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.password} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                  <select name="role" value={user.role} className="bg-transparent border-b-2 border-gray-300 py-2" onChange={handleInputChange}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button type="button" onClick={saveUser} className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">{editIndex !== null ? "Save" : "Add"}</button>
                </td>
              </tr>
            </tbody>
          </table>
          {error && <div className="text-red-500">{error}</div>}
        </div>
        <div className="px-3 py-6 flex justify-center">
          <button type="button" onClick={saveUser} className="text-sm bg-yellow-500 hover:bg-yellow-500 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
