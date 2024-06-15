import Signin from "./components/signin";
import ViewResourcePage from "./pages/viewResourcePage";
import HomePage from "./testPagesjsx/homepage";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/profileComponent";

const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/feed" element={<HomePage />} />
          <Route path="/resource-details" element={<ViewResourcePage />} />
          <Route path="/view-profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
