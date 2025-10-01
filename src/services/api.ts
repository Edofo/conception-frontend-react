import axios from "axios";

// Create a new axios instance
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use((config) => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGI5MDMyNzIyN2M4OGRhYWMxNGMwYmQwYzFmOTNjZCIsIm5iZiI6MTc1ODY0ODMyMS43NDg5OTk4LCJzdWIiOiI2OGQyZDgwMTJhNWU3YzBhNDVjZWNmZWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aylEitwtAH0w4XRk8izJNNkF_bet8sxiC9iI-zSdHbU"
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

// Add a response interceptor
api.interceptors.response.use((response) => {
    if (response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
    return response;
}, (error) => {
    return Promise.reject(error);
})

// Export the axios instance
export default api;