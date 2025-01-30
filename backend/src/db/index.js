import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
import path from "path"; // ✅ Import path

dotenv.config({ path: path.resolve(process.cwd(), "src/.env") }); // ✅ Adjusted path

console.log("MONGODB_URL:", process.env.MONGODB_URL);

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL + "/" + DB_NAME);
        console.log(`MongoDB connected! \nDB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection error", error);
        process.exit(1);
    }
};

export default connectDB;
