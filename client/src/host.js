import axios from "axios"

const server = axios.create({ baseURL: "https://carforus.onrender.com" })

export default server