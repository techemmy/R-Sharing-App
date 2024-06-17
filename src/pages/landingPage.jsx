import { Link } from "react-router-dom";
import Registration from "./signupForm";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <h1>This is the Landing Page</h1>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Register</Link>
    </div>
  );
};

export default LandingPage;
