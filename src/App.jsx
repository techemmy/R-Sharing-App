import Login from "./pages/Login";
import Registration from "./pages/Registration";
import HomePage from "./pages/Homepage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/landingPage";
import CreateResourcePage from "./pages/CreateResourcePage";
import AuthProvider from "./provider/authProvider";
import { schoolsLoader } from "./loaders";
import { createResourceAction, resourceAction } from "./actions";
import ErrorPage from "./pages/ErrorPage";
import ViewResource from "@/pages/ViewResource";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import UnAuthenticatedRoutes from "./components/routes/UnAuthenticatedRoutes";
import { Toaster } from "./components/ui/toaster";
import UserProfilePage from "./pages/UserProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    // TODO: configure key for error boundar
    <Route errorElement={<ErrorPage />}>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />}></Route>
        <Route
          path="/create-resource"
          loader={schoolsLoader}
          action={createResourceAction}
          element={<CreateResourcePage />}
        ></Route>
        <Route
          path="/view-resource/:resourceId"
          action={resourceAction}
          element={<ViewResource />}
        ></Route>
        <Route
          path="/profile"
          loader={schoolsLoader}
          element={<UserProfilePage />}
        />
      </Route>
      <Route element={<UnAuthenticatedRoutes />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Registration />}></Route>
      </Route>
    </Route>,
  ),
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  );
};

export default App;
