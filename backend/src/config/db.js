import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(ENV.MONGO_URI)
        console.log("mongoDB connected successfully",conn.connection.host)
    } catch (error) { 
        console.log("Error in connecting database",error)
        process.exit(1)
    }
}