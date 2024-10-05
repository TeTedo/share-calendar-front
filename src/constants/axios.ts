import axios from "axios";
import { BASE_URI_API } from "./apiUri";

export const axiosInstance = axios.create({
  baseURL: BASE_URI_API,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
