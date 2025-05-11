import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { debounce } from "lodash";
import ServiceCard from "./ServiceCard";
import { fetchServices } from "../../store/serviceSlice";
import { SkeletonLoading } from "../SkeletonLoading";

const categories = [
  "Design",
  "Development",
  "Writing",
  "Marketing",
  "Video Editing",
];

const SearchServices = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  const defaultCategory = searchParams.get("category") || "";

  const { services, pagination, loading } = useSelector(
    (state) => state.services
  );

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(defaultCategory);
  const [page, setPage] = useState(1);

  // Debounced fetch function
  const debouncedFetch = useCallback(
    debounce((params) => {
      dispatch(fetchServices(params));
    }, 500),
    []
  );

  // Fetch on search or category change
  useEffect(() => {
    setPage(1);
    debouncedFetch({ page: 1, keyword: query, category });
  }, [query, category]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (bottom && !loading && page < pagination.pages) {
        const nextPage = page + 1;
        setPage(nextPage);
        dispatch(fetchServices({ page: nextPage, keyword: query, category }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, query, category, loading, pagination.pages]);

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

        <div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-indigo-100 backdrop-blur-md">
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
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </option>
                ))}
              </select>
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
            {services.map((service) => (
              <ServiceCard key={service._id} {...service} />
            ))}
          </div>

          {services.length === 0 && !loading && (
            <p className="text-center text-indigo-600/80 mt-10">
              No services found.
            </p>
          )}
          {loading &&
            Array.from({ length: 6 }).map((_, idx) => (
              <SkeletonLoading key={idx} />
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SearchServices;
