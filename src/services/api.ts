import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.108:3333",
  //baseURL: "https://api-server-ts.herokuapp.com"
});

// api.interceptors.request.use(async (config) => {
//   const { setisLoading } = useAuth();
//   setisLoading(true);
//   return config;
// });

// api.interceptors.response.use(
//   (response) => {
//     const { setisLoading } = useAuth();
//     setisLoading(false);
//     return response;
//   },
//   (error) => {
//     const { setisLoading } = useAuth();
//     setisLoading(false);
//     return Promise.reject(error);
//   }
// );

export default api;
