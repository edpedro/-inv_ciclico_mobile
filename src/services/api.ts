import axios from "axios";

const api = axios.create({
  //baseURL: "http://192.168.0.104:3000",
  baseURL: "https://invciclico.adaptable.app",
});

export default api;
