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
import AuthProvider, { ProtectedRoute, } from './provider/authProvider'
import { createResoureceLoader } from "./loaders";
import { createResourceAction } from "./actions";
import ErrorPage from './pages/ErrorPage'
import ViewResourcePage from "./pages/ViewResourcePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    // TODO: configure key for error boundar
    <Route ErrorBoundary={ErrorPage}>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route element={<ProtectedRoute />} >
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/create-resource" loader={createResoureceLoader} action={createResourceAction} element={<CreateResourcePage />}></Route>
        <Route path='/view-resource/:resourceId' element={<ViewResourcePage />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
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

