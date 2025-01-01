import express from "express"

import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import Cors from "cors"
import userRouter from "./routes/userRoute.js"
import "dotenv/config.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




//app config

const app = express()
const port = process.env.PORT || 4000;

//middleware
app.use(express.json())
app.use(Cors())
app.use("/api/user",userRouter)
app.use('/images', express.static('uploads'));
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



//connectDB
connectDB()

//api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})