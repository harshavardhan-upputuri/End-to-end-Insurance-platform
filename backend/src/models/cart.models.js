import mongoose, { Schema } from 'mongoose';

const cartSchema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        policies: [
            {
                type: Schema.Types.ObjectId,
                ref: "Policy",
            },
        ],
    },
    { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);