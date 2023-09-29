const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/userRoutes")
const errorHandler = require("./middleware/errorHandler")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.use("/api", userRouter)

app.use(errorHandler)
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})