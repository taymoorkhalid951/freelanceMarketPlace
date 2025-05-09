import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import OrderList from "./OrderList";
import CategoryGrid from "./CategoryGrid";
import ServiceCard from "./ServiceCard";

const BuyerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-600 px-4 py-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Welcome, Buyer 👋</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-xl hover:bg-gray-100 transition"
          >
            Switch to Seller
          </button>
        </div>

        <CategoryGrid />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
          <OrderList type="recent" />
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Completed Orders</h2>
          <OrderList type="completed" />
        </section>

        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Browse Services</h2>
            <Link
              to="/search"
              className="text-sm underline hover:text-gray-200"
            >
              See All
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <ServiceCard key={id} id={id} />
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default BuyerDashboard;
