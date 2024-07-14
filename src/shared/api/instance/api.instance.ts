import axios from "axios";
import { getToken } from "../token/storage";

const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const clientWithoutToken = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  async (config) => {
    const token = await getToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.log("token not found");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
