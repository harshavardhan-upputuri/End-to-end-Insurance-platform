import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import path from "path"; // ✅ Import path

dotenv.config({ path: path.resolve(process.cwd(), "src/.env") }); // ✅ Fixed path issue

const PORT = process.env.PORT || 5000; // ✅ Add default PORT in case .env is missing

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

