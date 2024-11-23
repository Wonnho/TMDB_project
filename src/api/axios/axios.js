import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params:{
   api_key: import.meta.env.VITE_API_KEY,
   language:"ko",
  region:"대한민국",
  },
});

export default instance;
