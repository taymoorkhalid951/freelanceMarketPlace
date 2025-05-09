import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import RoleDashboard from "./pages/RoleDashboard";
import SearchServices from "./components/buyer/SearchServices";
import BuyerDashboard from "./components/buyer/BuyerDashboard";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/search" element={<SearchServices />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
