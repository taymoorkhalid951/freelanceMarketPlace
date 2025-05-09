import { useNavigate } from "react-router-dom";

const ServiceCard = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl">
      <h2 className="text-xl font-medium mb-2">Service #{id}</h2>
      <p className="text-sm mb-4">Brief description of the service.</p>
      <button
        className="w-full bg-white text-indigo-600 font-semibold py-2 rounded-xl hover:bg-gray-100 transition"
        onClick={() => navigate("/service/1")}
      >
        View Details
      </button>
    </div>
  );
};

export default ServiceCard;
