import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path"; // ✅ Import path

dotenv.config({ path: path.resolve(process.cwd(), "src/.env") }); // ✅ Adjusted path

<<<<<<< HEAD
const mongoUrl = "mongodb+srv://dbyashwanth:dbyashwanth@books-store-mern.7jdpz.mongodb.net/insurance?retryWrites=true&w=majority&appName=Books-Store-MERN"

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dbyashwanth:dbyashwanth@books-store-mern.7jdpz.mongodb.net/insurance?retryWrites=true&w=majority&appName=Books-Store-MERN");
        console.log(`MongoDB connected!`);
=======

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            "mongodb+srv://dbyashwanth:dbyashwanth@books-store-mern.7jdpz.mongodb.net/insurance?retryWrites=true&w=majority&appName=Books-Store-MERN"
        );
        console.log(`MongoDB connected! \nDB host: ${connectionInstance.connection.host}`);
>>>>>>> 7673e98b658ff91f66662306cff7fd83af8b6f2f
    } catch (error) {
        console.log("MongoDB Connection error", error);
        process.exit(1);
    }
};

export default connectDB;
