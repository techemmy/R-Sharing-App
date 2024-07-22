import { useNavigate, Link } from "react-router-dom";
import * as auth from "../../api/auth";
import Logo from "../../components/Logo";
import RegistrationForm from './RegistrationForm';

const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = async (userData) => {
    try {
      await auth.register(userData)
      toast({
        className: "bg-green-500 text-white",
        title: "Your account has been created!🥳🎉",
        description: "Academic excellence now in bounds 🚀"
      })
      return navigate('/login')
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Signup Error 😬",
        description: error?.response?.data?.message || error.message || 'Something unexpected happened',
      })
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="hidden md:block">
          <img src="/auth.jpg" alt="Register" width={800} height={800} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center p-4 md:p-6">
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-center mb-4">
              <Logo />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-indigo-600">Register</h1>
              <p className="text-gray-500">Create your account to get started.</p>
            </div>

            <RegistrationForm handleSubmit={handleSubmit} />

            <div className="text-center text-gray-500">
              Already have an account?
              <Link
                to={'/login'}
                className="font-medium text-indigo-600 hover:text-indigo-700"
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
