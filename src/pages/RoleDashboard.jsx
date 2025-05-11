// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServciesByUserId } from "../store/serviceSlice";
import ServiceCard from "../components/buyer/ServiceCard";
import { fetchCurrentUser, logout } from "../store/authSlice";

const RoleDashboard = () => {
  const [role, setRole] = useState("seller");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((state) => state.services);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(fetchCurrentUser());
    }
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(fetchServciesByUserId(user._id));
    }
  }, [dispatch, user]);

  const toggleRole = () => {
    setRole((prev) => {
      const role = prev === "buyer" ? "seller" : "buyer";
      if (role === "buyer") {
        navigate("/buyer");
      }
      return role;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md py-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-indigo-900">
            <span className="text-indigo-600">Serv</span>ico
          </Link>
          <div>
            <button
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
              className="text-indigo-600 hover:text-indigo-800 font-medium text-lg mr-4"
            >
              Logout
            </button>
            <button
              onClick={toggleRole}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-200"
            >
              Switch to {role === "buyer" ? "Seller" : "Buyer"}
            </button>
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900">
            {role === "buyer" ? "Buyer Dashboard" : "Seller Dashboard"}
          </h1>
          <Link
            to="/add-service"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-xl hover:shadow-indigo-200 text-lg inline-block"
          >
            + Add New Service
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center text-indigo-600">Loading services...</div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service._id} className="relative group">
                <ServiceCard isSeller={true} {...service} />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RoleDashboard;
