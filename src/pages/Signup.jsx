import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup form submitted:", form);
    // You can dispatch signup logic here
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <nav className="bg-white/80 backdrop-blur-md py-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-indigo-900">
            <span className="text-indigo-600">Serv</span>ico
          </Link>
          <Link
            to="/login"
            className="text-indigo-600 hover:text-indigo-800 font-medium text-lg"
          >
            Log in
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-md border border-indigo-50"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900">
            Create Account
          </h2>
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-900">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full p-3 rounded-xl bg-white text-indigo-900 placeholder-indigo-400 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full p-3 rounded-xl bg-white text-indigo-900 placeholder-indigo-400 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full p-3 rounded-xl bg-white text-indigo-900 placeholder-indigo-400 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-200 mt-4"
            >
              Create Account
            </button>
          </form>
          <p className="mt-8 text-center text-indigo-800/70">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Log in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
