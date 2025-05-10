// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const RoleDashboard = () => {
  const [role, setRole] = useState("seller");
  const navigate = useNavigate();

  const toggleRole = () => {
    setRole((prev) => {
      const role = prev === "buyer" ? "seller" : "buyer";
      if (role === "buyer") {
        navigate("/buyer");
      }
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
          <button
            onClick={toggleRole}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-200"
          >
            Switch to {role === "buyer" ? "Seller" : "Buyer"}
          </button>
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2].map((id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-indigo-50 hover:border-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-indigo-900">
                Service #{id}
              </h2>
              <p className="text-lg text-indigo-800/70 mb-6">
                Professional service description goes here.
              </p>
              <div className="flex justify-between items-center">
                <button className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200">
                  Edit Service
                </button>
                <button className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200">
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RoleDashboard;
