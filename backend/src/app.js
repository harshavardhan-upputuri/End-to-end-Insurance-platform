import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000", // Replace with your frontend URL
        credentials: true, // Allow cookies to be sent
    })
);

//common midddleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({ extended:true, limit:"16kb"}))
app.use(express.static("public")) 

app.use(cookieParser())

//import routes
import healthcheckRouter from "./routes/healthcheck.rotues.js";
import userRouter from "./routes/users.routes.js"
import policy from "./routes/policies.routes.js"
import cart from "./routes/cart.routes.js"

//routes

app.use("/", healthcheckRouter)
app.use("/user", userRouter )
app.use("/policies", policy)
app.use("/cart", cart)

export { app }