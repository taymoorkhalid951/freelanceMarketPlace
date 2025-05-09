import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center backdrop-blur-md bg-white/10 border border-white/30 text-white p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! Page not found.</p>
        <Link
          to="/"
          className="inline-block mt-4 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
