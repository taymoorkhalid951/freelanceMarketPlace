import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { updateService, fetchServiceById } from "../store/serviceSlice";

const EditService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentService, loading } = useSelector((state) => state.services);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    deliveryTime: "",
    tags: "",
    images: [],
  });

  useEffect(() => {
    dispatch(fetchServiceById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentService) {
      setFormData({
        title: currentService.title || "",
        description: currentService.description || "",
        category: currentService.category || "",
        price: currentService.price || "",
        deliveryTime: currentService.deliveryTime || "",
        tags: currentService.tags?.join(", ") || "",
        images: [],
      });
    }
  }, [currentService]);

  const categories = [
    "Design",
    "Development",
    "Writing",
    "Marketing",
    "Video Editing",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("category", formData.category);
    form.append("price", formData.price);
    form.append("deliveryTime", formData.deliveryTime);
    form.append("tags", formData.tags);

    for (let i = 0; i < formData.images.length; i++) {
      form.append("images", formData.images[i]);
    }

    const result = await dispatch(updateService({ id, serviceData: form }));
    if (!result.error) {
      navigate("/dashboard");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
        <div className="text-2xl text-indigo-600">Loading service data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <nav className="bg-white/80 backdrop-blur-md py-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-indigo-900">
            <span className="text-indigo-600">Serv</span>ico
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Back to Dashboard
          </button>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 py-16"
      >
        <h1 className="text-4xl font-bold text-indigo-900 mb-12">
          Edit Service
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-indigo-50"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-900">
                Title
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full p-3 rounded-xl bg-white text-indigo-900 placeholder-indigo-400 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                placeholder="e.g., Professional Logo Design"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-900">
                Description
              </label>
              <textarea
                name="description"
                required
                rows="4"
                className="w-full p-3 rounded-xl bg-white text-indigo-900 placeholder-indigo-400 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                placeholder="Describe your service in detail"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-900">
                Category
              </label>
              <select
                name="category"
                required
                className="w-full p-3 rounded-xl bg-white text-indigo-900 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-indigo-900">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  min="0"
                  step="0.01"
                  className="w-full p-3 rounded-xl bg-white text-indigo-900 placeholder-indigo-400 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                  placeholder="99.99"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-indigo-900">
                  Delivery Time (days)
                </label>
                <input
                  type="number"
                  name="deliveryTime"
                  required
                  min="1"
                  className="w-full p-3 rounded-xl bg-white text-indigo-900 placeholder-indigo-400 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                  placeholder="3"
                  value={formData.deliveryTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-900">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                name="tags"
                className="w-full p-3 rounded-xl bg-white text-indigo-900 placeholder-indigo-400 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                placeholder="e.g., logo, design, branding"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-900">
                Images
              </label>
              <input
                type="file"
                name="images"
                multiple
                accept="image/*"
                className="w-full p-3 rounded-xl bg-white text-indigo-900 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    images: Array.from(e.target.files),
                  }));
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 px-8 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-xl hover:shadow-indigo-200"
            >
              Update Service
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EditService;
