import { Cart } from "../models/cart.models.js";
import { Policy } from "../models/policies.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

// Add item to cart
const addToCart = asyncHandler(async (req, res) => {
    const { policyId } = req.body;
    const customerId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(policyId)) {
        throw new ApiError(400, "Invalid policy ID");
    }

    let cart = await Cart.findOne({ customer: customerId });
    if (!cart) {
        cart = await Cart.create({ customer: customerId, policies: [policyId] });
    } else {
        if (!cart.policies.includes(policyId)) {
            cart.policies.push(policyId);
            await cart.save();
        }
    }

    return res.status(200).json(new ApiResponse(200, cart, "Item added to cart successfully"));
});

// Remove item from cart
const removeFromCart = asyncHandler(async (req, res) => {
    const { policyId } = req.body;
    const customerId = req.user._id;

    let cart = await Cart.findOneAndUpdate(
        { customer: customerId },
        { $pull: { policies: policyId } },
        { new: true }
    );

    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }

    return res.status(200).json(new ApiResponse(200, cart, "Item removed from cart successfully"));
});

// Get cart details with aggregation pipeline
const getCart = asyncHandler(async (req, res) => {
    const customerId = req.user._id;

    const cart = await Cart.aggregate([
        { $match: { customer: new mongoose.Types.ObjectId(customerId) } },
        {
            $lookup: {
                from: "policies",
                localField: "policies",
                foreignField: "_id",
                as: "policyDetails",
            },
        },
    ]);

    if (!cart.length) {
        throw new ApiError(404, "Cart not found");
    }

    return res.status(200).json(new ApiResponse(200, cart[0], "Cart fetched successfully"));
});

export { addToCart, removeFromCart, getCart };
