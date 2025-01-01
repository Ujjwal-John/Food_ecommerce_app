import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://ujjwal:Rock%402001@ujjwal.jw7lu.mongodb.net/food_store").then(()=>console.log("DB Connected"))
}