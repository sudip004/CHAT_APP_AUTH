import mongoose from "mongoose";

 export const ConnectDB = async()=>{
    try {
        mongoose.connect(process.env.MONGO_DB_URI)
        console.log("DataBase connect successfully");
    } catch (error) {
        console.log("MongoDB connection error");
    }
}