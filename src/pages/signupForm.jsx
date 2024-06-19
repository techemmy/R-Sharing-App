import { useState, useRef } from "react";
import images from "../assets/assets";
import { useNavigate, Link } from "react-router-dom";
import api from "../api"
import Logo from "../components/Logo";

const Registration = () => {
  const [loading, setLoading] = useState(false)
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const username = usernameInputRef.current.value.trim();
    const email = emailInputRef.current.value.trim();
    const password = passwordInputRef.current.value.trim();

    if (!username || !email || !password) {
      setLoading(false)
      return alert("Make sure all fields are filled")
    }

    try {
      const resp = await api.post('/auth/register', { username, email, password });
      setLoading(false)
      if (resp.status === 201) {
        alert('Signup successful!')
        return navigate('/login')
      }
      alert(resp?.response?.data?.message)
    } catch (error) {
      setLoading(false)
      const { response: { data } } = error;
      alert(data.message)
      console.log("Error Type:", data.error)
      console.log("Error Message:", data.message)
      console.log("Error Status:", data.statusCode)
    }

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="hidden md:block">
          <img src={images.signinImage} alt="Register" width={800} height={800} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center p-4 md:p-6">
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-center mb-4">
              <Logo />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Register</h1>
              <p className="text-gray-500 dark:text-gray-400">Create your account to get started.</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Username
                </label>
                <input
                  ref={usernameInputRef}
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  className="py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  ref={emailInputRef}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  ref={passwordInputRef}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 py-2 px-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-400 dark:hover:bg-indigo-500"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="h-5 w-5 text-white dark:text-gray-900" />
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            </form>
            <div className="text-center text-gray-500 dark:text-gray-400">
              Already have an account?
              <Link
                to={'/login'}
                className="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-500"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

//
//
//
//
//
//
//

// <label htmlFor="full name">Full Name:</label>
// <input
//   type="text"
//   id="fullname"
//   name="fullName"
//   value={formData.fullName}
//   onChange={handleChange}
//   placeholder="Abhinav Bisht"
// />

// <label htmlFor="email">Email:</label>
// <input
// type="email"
// id="email"
// name="email"
//   value={formData.email}
//   onChange={handleChange}
//   placeholder="Bishtabhi02@gmail.com"
// />

// <label htmlFor="password">Password: </label>
// <input
// type="password"
// id="password"
// name="password"
//   value={formData.password}
//   onChange={handleChange}
//   placeholder="***********"
// />
