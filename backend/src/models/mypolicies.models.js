import mongoose, { Schema } from 'mongoose';

const myPolicySchema = new Schema(
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
        paymentId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const MyPolicy = mongoose.model("MyPolicy", myPolicySchema);



