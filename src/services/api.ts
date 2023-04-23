import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.108:3000",
  //baseURL: "https://invciclicobackend-production.up.railway.app",
});

export default api;
