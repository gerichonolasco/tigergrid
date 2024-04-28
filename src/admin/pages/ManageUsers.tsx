import React, { useState } from "react";

const ManageUsers = () => {
  const [user, setUser] = useState({ name: "", email: "", role: "User" });
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = () => {
    setUsers([...users, user]);
    setUser({ name: "", email: "", role: "User" });
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
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Role</th>
                <th></th>
              </tr>
              {users.map((user, index) => (
                <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">
                  <td className="p-3 px-5">
                    <input type="text" placeholder="Enter Name" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.name} />
                  </td>
                  <td className="p-3 px-5">
                    <input type="text" placeholder="Enter Email" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.email} />
                  </td>
                  <td className="p-3 px-5">
                    <select value={user.role} className="bg-transparent border-b-2 border-gray-300 py-2">
                      <option value="User">User</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </td>
                  <td className="p-3 px-5 flex justify-end">
                    <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                    <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Archive</button>
                  </td>
                </tr>
              ))}
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">
                  <input type="text" name="name" placeholder="Enter Name" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.name} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                  <input type="text" name="email" placeholder="Enter Email" className="bg-transparent border-b-2 border-gray-300 py-2" value={user.email} onChange={handleInputChange} />
                </td>
                <td className="p-3 px-5">
                  <select name="role" value={user.role} className="bg-transparent border-b-2 border-gray-300 py-2" onChange={handleInputChange}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button type="button" onClick={addUser} className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Add</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
