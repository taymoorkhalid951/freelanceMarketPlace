import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { id } = useParams();

  // Dummy service data — replace with API/store
  const service = {
    id,
    title: "Professional Landing Page Design",
    description:
      "Get a clean, modern, and fully responsive landing page built using React, Tailwind CSS, and Framer Motion. Perfect for startups, SaaS products, or portfolios.",
    price: 120,
    deliveryTime: "3 Days",
    revisions: 3,
    tags: ["React", "Tailwind", "Design", "Landing Page"],
    seller: {
      name: "Sarah Williams",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 4.8,
      completedOrders: 125,
      bio: "UI/UX Designer & Frontend Developer with 5+ years of experience crafting beautiful web interfaces.",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-600 px-4 py-10 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-white text-gray-800 rounded-2xl p-6 md:p-10 shadow-xl"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold">{service.title}</h1>
            <p className="text-gray-600">{service.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {service.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2 text-sm text-gray-700">
              <p>
                <strong>Price:</strong> ${service.price}
              </p>
              <p>
                <strong>Delivery Time:</strong> {service.deliveryTime}
              </p>
              <p>
                <strong>Revisions:</strong> {service.revisions}
              </p>
            </div>
          </div>

          {/* Seller Card */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <img
                src={service.seller.avatar}
                alt={service.seller.name}
                className="w-20 h-20 rounded-full mb-3"
              />
              <h3 className="text-lg font-semibold">{service.seller.name}</h3>
              <p className="text-sm text-gray-500">
                ⭐ {service.seller.rating} • {service.seller.completedOrders}{" "}
                orders
              </p>
              <p className="mt-2 text-sm text-gray-600">{service.seller.bio}</p>
              <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;
