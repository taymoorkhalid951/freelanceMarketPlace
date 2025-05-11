import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import OrderList from "./OrderList";
import CategoryGrid from "./CategoryGrid";
import ServiceCard from "./ServiceCard";

const BuyerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <nav className="bg-white/80 backdrop-blur-md py-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-indigo-900">
            <span className="text-indigo-600">Serv</span>ico
          </Link>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-200"
          >
            Switch to Seller
          </button>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900">
            Welcome, Buyer 👋
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Active Orders", count: "12", icon: "📦" },
            { title: "Completed", count: "48", icon: "✅" },
            { title: "Total Spent", count: "$2,450", icon: "💰" },
            { title: "Saved Items", count: "15", icon: "❤️" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-50 hover:border-indigo-100"
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold text-indigo-600">{stat.count}</p>
            </motion.div>
          ))}
        </div>

        <CategoryGrid />

        <section className="mt-16 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-lg border border-indigo-50">
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">
            Recent Orders
          </h2>
          <OrderList type="recent" />
        </section>

        <section className="mt-16 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-lg border border-indigo-50">
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">
            Completed Orders
          </h2>
          <OrderList type="completed" />
        </section>

        <section className="mt-16 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-lg border border-indigo-50">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-900">
              Browse Services
            </h2>
            <Link
              to="/search"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-200"
            >
              See All Services
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
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
