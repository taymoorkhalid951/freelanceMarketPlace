import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
    <div className="min-h-screen bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 px-4 py-10 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">
            {role === "buyer" ? "Buyer Dashboard" : "Seller Dashboard"}
          </h1>
          <button
            onClick={toggleRole}
            className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-xl hover:bg-gray-100 transition"
          >
            Switch to {role === "buyer" ? "Seller" : "Buyer"}
          </button>
        </div>
        <div className="space-y-6">
          <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-xl hover:bg-gray-100 transition">
            + Add New Service
          </button>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2].map((id) => (
              <div
                key={id}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl"
              >
                <h2 className="text-xl font-medium mb-2">Your Service #{id}</h2>
                <p className="text-sm mb-4">Details about your service.</p>
                <div className="flex justify-between">
                  <button className="text-sm underline hover:text-gray-200">
                    Edit
                  </button>
                  <button className="text-sm underline text-red-400 hover:text-red-300">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RoleDashboard;
