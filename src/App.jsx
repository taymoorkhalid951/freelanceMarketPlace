import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import RoleDashboard from "./pages/RoleDashboard";
import SearchServices from "./components/buyer/SearchServices";
import BuyerDashboard from "./components/buyer/BuyerDashboard";
import ServiceDetail from "./pages/ServiceDetail";
import HomePage from "./pages/HomePage";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";
import ProtectedRoute from "./components/ProtectedRoute";
import { fetchCurrentUser } from "./store/authSlice";
import { isAuthenticated } from "./utils/authUtils";

function App() {
  const dispatch = useDispatch();

  // Check for authentication on app startup
  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/service/:id" element={<ServiceDetail />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <RoleDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer"
          element={
            <ProtectedRoute>
              <BuyerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchServices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-service"
          element={
            <ProtectedRoute>
              <AddService />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-service/:id"
          element={
            <ProtectedRoute>
              <EditService />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
