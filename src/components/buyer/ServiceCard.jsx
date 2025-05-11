import { Link, useNavigate } from "react-router-dom";
import { deleteService, fetchServciesByUserId } from "../../store/serviceSlice";
import { useDispatch, useSelector } from "react-redux";

const ServiceCard = ({
  _id: id,
  title,
  description,
  price,
  deliveryTime,
  images,
  isSeller,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleDelete = async (serviceId) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      const result = await dispatch(deleteService(serviceId));
      if (!result.error) {
        dispatch(fetchServciesByUserId(user._id));
      }
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-indigo-50 hover:border-indigo-100">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 opacity-30"></div>
        <img
          src={images && images.length > 0 ? images[0] : "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 relative z-10"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-indigo-900">{title}</h3>
          <span className="text-indigo-600 font-bold">${price}</span>
        </div>
        <p className="text-indigo-800/70 mb-4">
          {description?.length > 25
            ? `${description.slice(0, 25)}...`
            : description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-indigo-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a.75.75 0 01.75.75v5.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0L6.2 7.26a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z"></path>
            </svg>
            <span className="text-indigo-800">
              {deliveryTime} days delivery
            </span>
          </div>
          <span className="text-sm text-indigo-600">Fixed Price</span>
        </div>
        {!isSeller && (
          <button
            className="w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-200"
            onClick={() => navigate(`/service/${id}`)}
          >
            View Details
          </button>
        )}
        {isSeller && (
          <div className=" flex justify-between items-center">
            <Link
              to={`/edit-service/${id}`}
              className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200 bg-white/90 px-4 py-2 rounded-lg"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(id)}
              className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200 bg-white/90 px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
