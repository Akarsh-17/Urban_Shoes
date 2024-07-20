import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://urbanapi.azurewebsites.net",
  baseURL: "http://localhost:8080/",
  baseURL: "https://urban-shoes-backend.onrender.com",
});

axiosInstance.defaults.withCredentials = true;
