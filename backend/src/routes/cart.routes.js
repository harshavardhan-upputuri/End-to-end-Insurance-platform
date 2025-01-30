import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cart.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Routes
router.post("/add", verifyJWT, addToCart); // Add item to cart
router.delete("/remove", verifyJWT, removeFromCart); // Remove item from cart
router.get("/", verifyJWT, getCart); // Get cart details

export default router;
