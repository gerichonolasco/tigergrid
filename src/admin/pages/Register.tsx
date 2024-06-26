import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Register = () => {
  useEffect(() => {
    document.body.classList.add("login-page-body");
    return () => {
      document.body.classList.remove("login-page-body");
    };
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !username.trim() || !password.trim()) {
      setError("Please input all fields.");
      return;
    }

    try {
      // Implement your sign-up logic here
      setIsLoggedIn(true);
      alert("Sign up successful!");
    } catch (error) {
      setError("An error occurred while signing up");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/mainbldg.png')",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center bg-cover bg-center bg-main-building">
          <div className="container w-full md:w-3/4 lg:w-1/2 xl:w-1/3 bg-white p-8 rounded-lg shadow-md mt-28">
            <div className="flex justify-between items-center flex-col md:flex-row">
              <div className="flex justify-center mb-6 ml-8">
                <img src="/images/ustlogo.png" alt="Logo" className="w-40" />
              </div>
              <form
                onSubmit={handleSignUp}
                className="flex flex-col items-center"
              >
                <h1 className="text-center text-2xl font-bold mb-4"></h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="flex flex-col">
                  <label className="mb-2">First Name:</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="px-3 py-2 border rounded mt-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Last Name:</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="px-3 py-2 border rounded mt-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Email:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="px-3 py-2 border rounded mt-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-3 py-2 border rounded mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 text-black px-4 py-2 rounded mt-4 hover:bg-yellow-600"
                >
                  Sign Up
                </button>
                <p className="mt-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500">Log In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
