import axios from 'axios';
// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT, // Base API URL from .env
    timeout: 10000, // Set a timeout for requests
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken'); // Retrieve token from localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Attach token to headers
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response.data; // Simplify responses to just the data object
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Optional: handle unauthorized errors globally
            console.error('Unauthorized. Redirecting to login...');
            window.location.href = '/'; // Redirect to login
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
