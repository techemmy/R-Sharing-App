import Signin from "./pages/signin";
import HomePage from "./pages/Homepage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/signupForm";
import LandingPage from "./pages/landingPage";
import CreateResourcePage from "./pages/CreateResourcePage";
import AuthProvider, { ProtectedRoute, useAuth } from './provider/authProvider'
import { createResourceAction, createResoureceLoader } from "./loadersAndAction";
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route ErrorBoundary={ErrorPage}>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route element={<ProtectedRoute />} >
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/create-resource" loader={createResoureceLoader} action={createResourceAction} element={<CreateResourcePage />}></Route>
      </Route>
      <Route path="/login" element={<Signin />}></Route>
      <Route path="/signup" element={<Registration />}></Route>
    </Route>
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
