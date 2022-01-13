import axios from "axios";

const api = axios.create({
  baseURL: "https://test-flimed-backend.herokuapp.com",
});

export default api;