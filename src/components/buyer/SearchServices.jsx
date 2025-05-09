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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-600 px-4 py-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-semibold mb-6">Search Services</h1>

        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="Search services..."
              className="col-span-2 bg-white/20 text-white placeholder-white/70 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none w-full bg-white/20 text-white py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white pr-10"
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
                  className="w-4 h-4 text-white"
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
            <p className="text-center text-white/80 mt-10">
              No services found.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SearchServices;
