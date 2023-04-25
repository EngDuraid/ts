import axios from "axios";
export const apiCLient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/animeshroydev/SampleJSONPlaceholder",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});
