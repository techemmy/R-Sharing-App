import images from "../assets/assets";
import { useAuth } from "../provider/authProvider";
import { useRef, useState } from "react";
import api from "../api";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const { logIn } = useAuth();
  const [loading, setLoading] = useState(false)
  const emailOrUsernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    const emailOrUsername = emailOrUsernameRef.current.value;
    const password = passwordRef.current.value;

    if (!emailOrUsername || !password) {
      setLoading(false)
      return alert("Make sure all fields are filled");
    }

    try {
      const resp = await api.post('/auth/login', { emailOrUsername, password })
      setLoading(false)
      if (resp.status === 200) {
        logIn(resp.data.access_token)
        alert('Login successful!')
        return navigate('/home')
      }
      alert(resp.response.data.message);
      return
    } catch (error) {
      setLoading(false)
      const { response: { data } } = error;
      alert(data.message)
      console.log("Error Type:", data.error)
      console.log("Error Message:", data.message)
      console.log("Error Status:", data.statusCode)
    }
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="hidden md:block">
          <img src={images.signinImage} alt="Log In" width={800} height={800} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center p-4 md:p-6">
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-center mb-4">
              <Logo />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Log In</h1>
              <p className="text-gray-500 dark:text-gray-400">Create your account to get started.</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="emailOrUsername" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email or Username
                </label>
                <input
                  ref={emailOrUsernameRef}
                  id="emailOrUsername"
                  name="emailOrUsername"
                  type="text"
                  placeholder="Enter your email or username"
                  className="py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 py-2 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                  "Log In"
                )}
              </button>
            </form>
            <div className="text-center text-gray-500 dark:text-gray-400">
              Yet to create an account?
              <Link
                to={'/register'}
                className="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-500"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
