import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://ujjwal:admin@ujjwal.jw7lu.mongodb.net/food_store").then(()=>console.log("DB Connected"))
}
