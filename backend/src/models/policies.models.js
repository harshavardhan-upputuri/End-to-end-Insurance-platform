import mongoose, { Schema } from 'mongoose';

const policySchema = new Schema(
    {
        category: {
            type: String,
            required: true,
        },
        image: {
            type: String, // URL for the policy image
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        head: {
            type: String,
            required: false, // Optional field
        },
        sub_name: {
            type: String,
            required: true,
        },
        type: {
            type: String, // Type of the policy (e.g., "RETAIL")
        },
        premium: {
            type: Number, // Policy premium amount
            required: true,
        },
        coverage: {
            type: String, // Coverage amount (e.g., "Rs. 2,00,000")
            required: true,
        },
        desc: {
            desc1: {
                type: String,
                required: true, // Description point 1
            },
            desc2: {
                type: String,
                required: true, // Description point 2
            },
            desc3: {
                type: String,
                required: true, // Description point 3
            },
        },
        rating: {
            type: Number, // Rating for the policy (e.g., out of 5)
            min: 0,
            max: 5,
            default: 0,
        },
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"], // Enum to track policy status
            default: "INACTIVE",
        },
    },
    { 
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

export const Policy = mongoose.model('Policy', policySchema);
