// api.js
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7183/api/LoginAndRole/';


export const uploadCategory = async (category) => {
  debugger
  try {
    const token = localStorage.getItem('authToken'); // Assuming you store the token in localStorage
    
    const response = await axios.post(`https://localhost:7183/api/LoginAndRole/CreateCatagory`, category, {
      
      headers: {
        
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`, // Add your token here
      },
    });
    console.log('Sending request with data:', category);

    return response.data;

  } catch (error) {
    console.error('Error uploading category:', error.response ? error.response.data : error.message);
    alert('Failed to upload category.');
  }
};



// export const uploadCategory = async (category) => {
//   debugger
//   try {
//     const response = await axios.post(`${API_BASE_URL}/CreateCatagory`, category , {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     debugger
//     return response.data;
//   }  catch (error) {
//     console.error('Error uploading category:', error.response ? error.response.data : error.message);
//     alert('Failed to upload category.');
//   }
// };

export const fetchCategories = async (category) => {
  try {
    debugger
    const response = await axios.get(`${API_BASE_URL}/LoginAndRole/GetallCatagory`, category);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Add more API functions as needed
