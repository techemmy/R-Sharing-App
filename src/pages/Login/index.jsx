import { useAuth } from "../../provider/authProvider";
import { useRef, useState } from "react";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";


export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate()

  const onFormSubmit = async (userData) => {
    try {
      await login(userData)
      alert("Login successful")
      navigate('/home')
    } catch (error) {
      alert(error?.response?.data?.message || error?.message || 'Something went wrong')
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="hidden md:block">
          <img src="/auth.jpg" alt="Log In" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center p-4 md:p-6">
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-center mb-4">
              <Logo />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-indigo-600">Log In</h1>
              <p className="text-gray-500">A journey of a million mile begins with a single step</p>
            </div>

            <LoginForm handleSubmit={onFormSubmit} />

            <div className="text-center text-gray-500">
              Yet to create an account?
              <Link
                to={'/signup'}
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

