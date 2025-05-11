import axios from "axios";

const API_URL = "http://localhost:4000/api/services";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const createService = async (serviceData) => {
  try {
    const response = await api.post("/", serviceData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Service creation failed" };
  }
};

const getServicesByUserId = async (userId) => {
  const response = await api.get(`/user/${userId}`);
  return response.data;
};

const getServices = async (params) => {
  const queryString = new URLSearchParams(params).toString();
  const response = await axios.get(`${API_URL}?${queryString}`);
  return response.data;
};

const getServiceById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const updateService = async (id, serviceData) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.put(`/${id}`, serviceData, config);
  return response.data;
};

const deleteService = async (id) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.delete(`/${id}`, config);
  return response.data;
};

const serviceService = {
  createService,
  getServices,
  getServiceById,
  getServicesByUserId,
  updateService,
  deleteService,
};

export default serviceService;
