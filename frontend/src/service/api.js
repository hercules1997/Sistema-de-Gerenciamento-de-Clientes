import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-backend-production-ea31.up.railway.app",
});
