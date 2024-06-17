import Signin from "./pages/signin";
import HomePage from "./testPagesjsx/homepage";
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/signupForm";
import LandingPage from "./pages/landingPage";
import AuthProvider, { ProtectedRoute } from './provider/authProvider'
import ResourceCards from "./components/resourceCards";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route element={<ProtectedRoute />} >
        <Route path="/home" element={<HomePage />}></Route>
      </Route>
      <Route path="/login" element={<Signin />}></Route>
      <Route path="/signup" element={<Registration />}></Route>
    </>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  )
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
//         <>
//           <Route path="/feed" element={<HomePage />} />

//           <Route path="/resource-details" element={<ViewResourcePage />} />

//           <Route path="/signin" element={<Signin />} />
//           <Route path="/signup" element={<Registration />} />
//         </>
//       </Router>
