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
import AuthProvider from './provider/authProvider'
import { createResourceLoader } from "./loaders";
import { createResourceAction } from "./actions";
import ErrorPage from './pages/ErrorPage'
import ViewResource from "@/pages/ViewResource";
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import UnAuthenticatedRoutes from './components/routes/UnAuthenticatedRoutes'


const router = createBrowserRouter(
  createRoutesFromElements(
    // TODO: configure key for error boundar
    <Route ErrorBoundary={ErrorPage}>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route element={<ProtectedRoutes />} >
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/create-resource" loader={createResourceLoader} action={createResourceAction} element={<CreateResourcePage />}></Route>
        <Route path='/view-resource/:resourceId' element={<ViewResource />}></Route>
      </Route>
      <Route element={<UnAuthenticatedRoutes />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Registration />}></Route>
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
};

export default App;

