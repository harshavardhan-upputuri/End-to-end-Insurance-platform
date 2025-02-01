import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path"; // ✅ Import path

dotenv.config({ path: path.resolve(process.cwd(), "src/.env") }); // ✅ Adjusted path

const mongoUrl = "mongodb+srv://dbyashwanth:dbyashwanth@books-store-mern.7jdpz.mongodb.net/insurance?retryWrites=true&w=majority&appName=Books-Store-MERN"

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dbyashwanth:dbyashwanth@books-store-mern.7jdpz.mongodb.net/insurance?retryWrites=true&w=majority&appName=Books-Store-MERN");
        console.log(`MongoDB connected!`);
    } catch (error) {
        console.log("MongoDB Connection error", error);
        process.exit(1);
    }
};

export default connectDB;
