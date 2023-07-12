import axios from "axios";

const request = axios.create({
  baseURL: "",
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
  method: "GET",
  withCredentials: true
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise(err);
  }
);

request.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
