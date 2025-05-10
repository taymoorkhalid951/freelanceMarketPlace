import { useNavigate } from "react-router-dom";

const ServiceCard = ({ id }) => {
  const navigate = useNavigate();

  // Sample data for demonstration
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies",
      price: "$45",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Logo Design",
      description: "Professional logo design for your brand identity",
      price: "$35",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Content Writing",
      description: "SEO-optimized content for your website or blog",
      price: "$25",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const service = services[id - 1] || services[0];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-indigo-50 hover:border-indigo-100">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 opacity-30"></div>
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 relative z-10"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-indigo-900">
            {service.title}
          </h3>
          <span className="text-indigo-600 font-bold">{service.price}/hr</span>
        </div>
        <p className="text-indigo-800/70 mb-4">{service.description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-indigo-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-indigo-800">{service.rating}</span>
          </div>
          <span className="text-sm text-indigo-600">Starting at</span>
        </div>
        <button
          className="w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-200"
          onClick={() => navigate(`/service/${id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
