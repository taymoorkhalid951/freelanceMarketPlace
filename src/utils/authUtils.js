/**
 * Utility functions for authentication
 */

// Save token to localStorage
export const setToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  }
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

// Remove token from localStorage
export const removeToken = () => {
  localStorage.removeItem("token");
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!getToken();
};

// Parse JWT token (without validation - frontend only)
export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
};

// Check if token is expired
export const isTokenExpired = (token) => {
  if (!token) return true;

  const decoded = parseJwt(token);
  if (!decoded) return true;

  const currentTime = Date.now() / 1000;
  return decoded.exp < currentTime;
};
