import Signin from "./pages/signin";
import ViewResourcePage from "./pages/viewResourcePage";
import HomePage from "./testPagesjsx/homepage";
import Sidebar from "./components/sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from "./components/profileComponent";
import SummaryComponent from "./components/summaryComponent";
import Registration from "./pages/signupForm";
import LandingPage from "./pages/landingPage";
import { signUpAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/login" element={<Signin />}></Route>
      <Route path="/signup" element={<Registration />}></Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
//
//
//
//
//
//
//
//
//
//
//

// <Router>
//         <Sidebar />
//         <Routes>
//           <Route path="/feed" element={<HomePage />} />

//           <Route path="/resource-details" element={<ViewResourcePage />} />

//           <Route path="/signin" element={<Signin />} />
//           <Route path="/signup" element={<Registration />} />
//         </Routes>
//       </Router>
