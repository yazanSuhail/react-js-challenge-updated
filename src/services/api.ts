import axios from "axios";

axios.defaults.baseURL = "https://api.giphy.com/v1/gifs";
const api = axios.create();

export default api;
