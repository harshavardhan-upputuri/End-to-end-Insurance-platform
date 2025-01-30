
import { Policy } from "../models/policies.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Create a new policy
const createPolicy = asyncHandler(async (req, res) => {
    const { category, image, name, head, sub_name, type, premium, coverage, desc, rating, status } = req.body;
    
    if (!category || !image || !name || !sub_name || !premium || !coverage || !desc?.desc1 || !desc?.desc2 || !desc?.desc3) {
        throw new ApiError(400, "All required fields must be provided");
    }
    
    const policy = await Policy.create({ category, image, name, head, sub_name, type, premium, coverage, desc, rating, status });
    
    return res.status(201).json(new ApiResponse(201, policy, "Policy created successfully"));
});

// Get all policies
const getAllPolicies = asyncHandler(async (req, res) => {
    const policies = await Policy.find();
    return res.status(200).json(new ApiResponse(200, policies, "Policies fetched successfully"));
});

// Get a single policy by ID
const getPolicyById = asyncHandler(async (req, res) => {
    const policy = await Policy.findById(req.params.id);
    if (!policy) {
        throw new ApiError(404, "Policy not found");
    }
    return res.status(200).json(new ApiResponse(200, policy, "Policy fetched successfully"));
});

// Update a policy by ID
const updatePolicy = asyncHandler(async (req, res) => {
    const policy = await Policy.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!policy) {
        throw new ApiError(404, "Policy not found");
    }
    return res.status(200).json(new ApiResponse(200, policy, "Policy updated successfully"));
});

// Delete a policy by ID
const deletePolicy = asyncHandler(async (req, res) => {
    const policy = await Policy.findByIdAndDelete(req.params.id);
    if (!policy) {
        throw new ApiError(404, "Policy not found");
    }
    return res.status(200).json(new ApiResponse(200, {}, "Policy deleted successfully"));
});

export { createPolicy, getAllPolicies, getPolicyById, updatePolicy, deletePolicy };
