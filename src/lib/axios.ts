import axios from "axios";

export const api = axios.create({
  baseUrl: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
