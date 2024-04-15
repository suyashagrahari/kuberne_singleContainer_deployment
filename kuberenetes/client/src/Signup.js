import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/api/v1/singin", user);
    
    if(res.status === 200)
    {
      navigate("/login")
    }
    setUser({})
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Signin</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="name"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Full name"
              name="name"
              onChange={handleChange}
              value={user.name}
            />
            <input
              type="email"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Email address"
              name="email"
              onChange={handleChange}
              value={user.email}
            />
            <input
              type="password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={user.password}
            />
            <div className="flex items-center justify-between flex-wrap">
              <label
                htmlFor="remember-me"
                className="text-sm text-gray-900 cursor-pointer">
                <input type="checkbox" id="remember-me" className="mr-2" />
                Remember me
              </label>
              <Link
               to={'/'}
                className="text-sm text-blue-500 hover:underline mb-0.5">
                Forgot password?
              </Link>
              <p className="text-gray-900 mt-4">
                {" "}
                Don't have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-sm text-blue-500 -200 hover:underline mt-4">
                  Login
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">
              Signin
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
