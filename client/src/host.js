import axios from "axios"

// https://carforus.onrender.com
const server = axios.create({ baseURL: "http://localhost:8000" })
export default server
