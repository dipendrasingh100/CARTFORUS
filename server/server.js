require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require('cookie-parser')
const userRouter = require("./routes/userRoutes")
const productRouter = require("./routes/productRouter")
const connectDatabase = require("./config/database")
const errorMiddleware = require("./middleware/error")
const orderRouter = require("./routes/orderRoutes")
const userCartRouter = require("./routes/userCartRouter")


const app = express()
app.use(cors({
    origin: ["https://cartforus.netlify.app", "http://localhost:3000"],
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

//Handling Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1)
})

//connecting to Database
connectDatabase()


app.use("/api/auth", userRouter)
app.use("/api/user", userCartRouter)
app.use("/api/v1", productRouter)
app.use("/api/v2", orderRouter)

app.use(errorMiddleware)
const PORT = process.env.PORT || 8000
const server = app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})


//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1)
    })
})