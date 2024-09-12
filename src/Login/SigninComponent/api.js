// src/api.js

import axios from 'axios';

const API_URL = 'https://localhost:7183/api/LoginAndRole'; // Adjusted base URL

const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Named export for fetchUserData
export const fetchUserData = async () => {
  debugger
  try {
    const { userId } = getUserDataFromLocalStorage(); // Get userId from local storage
    const response = await axios.get(`${API_URL}/UserData/${userId}`, { headers: getAuthHeaders() }); // Adjust endpoint
    console.log("API response:", response); // Log the full response
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Named export for login
export const login = async (userData) => {
  debugger
  try {
    const response = await axios.post(`${API_URL}/Login`, userData); // Adjust endpoint
    const { token, userId, userRole } = response.data; // Extract token, userId, and userRole from response
    if (token && userId && userRole) {
      localStorage.setItem('authToken', response.data.token); // Store token
      localStorage.setItem('userId', response.data.userID);   // Store user ID
      localStorage.setItem('userRole', response.data.userRoles); // Store user role
    }
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Login failed. Please try again later.');
  }
};

// Function to handle logout and clear local storage
export const handleLogout  = (navigate) =>  {
  debugger
  localStorage.removeItem('authToken'); // Clear token
  localStorage.removeItem('Id');    // Clear user ID
  localStorage.removeItem('userRoles');  // Clear user role
  // Optionally, redirect or update app state here
  navigate('/login');
};

// Helper function to retrieve user data from local storage
const getUserDataFromLocalStorage = () => {
  debugger
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRole');
  return { userId, userRole };
};
