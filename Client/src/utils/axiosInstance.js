import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://urbanapi.azurewebsites.net",
  baseURL: "http://localhost:8080/",
});

axiosInstance.defaults.withCredentials = true;
