import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const categories = [
  "Design",
  "Development",
  "Writing",
  "Marketing",
  "Video Editing",
];

const SearchServices = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultCategory = searchParams.get("category") || "";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(defaultCategory);

  // Fake results (can be replaced with API data)
  const filteredResults = [1, 2, 3, 4]; // Dummy service cards

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h1 className="text-4xl font-bold text-indigo-900 mb-8">
          Search Services
        </h1>

        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-indigo-50">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="Search services..."
              className="col-span-2 bg-white/80 text-indigo-900 placeholder-indigo-400 py-3 px-4 rounded-xl border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none w-full bg-white/80 text-indigo-900 py-3 px-4 rounded-xl border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
              >
                <option value="" className="text-gray-800">
                  All Categories
                </option>
                {categories.map((cat) => (
                  <option
                    key={cat}
                    value={cat.toLowerCase()}
                    className="text-gray-800"
                  >
                    {cat}
                  </option>
                ))}
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredResults.map((id) => (
              <ServiceCard key={id} id={id} />
            ))}
          </div>

          {filteredResults.length === 0 && (
            <p className="text-center text-indigo-600/80 mt-10">
              No services found.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SearchServices;
