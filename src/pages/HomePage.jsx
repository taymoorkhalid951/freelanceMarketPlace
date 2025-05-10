import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/buyer/ServiceCard";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md py-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-indigo-900">
            <span className="text-indigo-600">Serv</span>ico
          </Link>
          <div className="space-x-6">
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-800 font-medium text-lg"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-tr from-indigo-100 via-white to-purple-50 min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 opacity-20 blur-3xl"></div>
          <div className="absolute -left-32 top-48 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-200 to-indigo-200 opacity-20 blur-3xl"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-6 py-32 relative z-10 flex items-center justify-between"
        >
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-6xl font-bold mb-8 text-indigo-900 leading-tight">
              Powering the{" "}
              <span className="text-indigo-600 relative">Freelance</span>{" "}
              Economy
            </h1>
            <p className="text-2xl text-indigo-800/80 mb-10 leading-relaxed">
              Connect with top talent and grow your business with our trusted
              freelance marketplace.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/signup"
                className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-xl hover:shadow-indigo-200 text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="bg-white text-indigo-600 border-2 border-indigo-600 px-10 py-4 rounded-xl font-medium hover:bg-indigo-50 transition-all duration-300 text-lg"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Buyer Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="py-32 bg-gradient-to-br from-white to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-indigo-900">
              Find the Right Freelancer for Any Task
            </h2>
            <p className="text-xl text-indigo-800/70 max-w-3xl mx-auto leading-relaxed">
              Browse thousands of skilled professionals ready to work on your
              next project and bring your ideas to life
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
            {[1, 2, 3].map((id) => (
              <ServiceCard key={id} id={id} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/signup"
              className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-xl hover:shadow-indigo-200 text-lg"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Seller Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="py-32 bg-gradient-to-tr from-indigo-50 via-white to-purple-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-30 blur-3xl"></div>
          <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-30 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-indigo-900">
              Secure Payments, Trusted Transactions
            </h2>
            <p className="text-xl text-indigo-800/70 max-w-3xl mx-auto leading-relaxed">
              Get paid safely. Every time. Focus on what matters most - your
              work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Secure Payments",
                description:
                  "Your earnings are protected with our secure payment system",
                icon: "💰",
              },
              {
                title: "Global Reach",
                description: "Connect with clients from around the world",
                icon: "🌎",
              },
              {
                title: "Professional Growth",
                description: "Build your reputation and grow your business",
                icon: "📈",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-50 hover:border-indigo-100"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-900">
                  {feature.title}
                </h3>
                <p className="text-lg text-indigo-800/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-indigo-800 to-purple-800 opacity-30 blur-3xl"></div>
          <div className="absolute left-0 top-0 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-blue-800 to-indigo-800 opacity-30 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:max-w-sm">
              <Link to="/" className="text-3xl font-bold inline-block mb-4">
                <span className="text-indigo-400">Serv</span>ico
              </Link>
              <p className="text-lg text-indigo-200/90 leading-relaxed">
                Connecting talent with opportunity in the digital age. Join our
                community of professionals today.
              </p>
            </div>
            <div className="flex gap-16 flex-wrap">
              <div>
                <h4 className="text-xl font-semibold mb-6 text-white">
                  For Clients
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="text-indigo-200/90 hover:text-white transition-colors duration-200 text-lg"
                    >
                      Find Talent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-indigo-200/90 hover:text-white transition-colors duration-200 text-lg"
                    >
                      How to Hire
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-6 text-white">
                  For Freelancers
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="text-indigo-200/90 hover:text-white transition-colors duration-200 text-lg"
                    >
                      Find Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-indigo-200/90 hover:text-white transition-colors duration-200 text-lg"
                    >
                      Success Stories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-indigo-800/50 mt-12 pt-8 text-center text-indigo-200/70">
            <p className="text-lg">
              © {new Date().getFullYear()} Servico. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
