import axios from "axios"

// https://carforus.onrender.com
const server = axios.create({ baseURL: "https://carforus.onrender.com" })
export default server