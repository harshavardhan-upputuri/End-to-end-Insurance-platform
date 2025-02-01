import express from "express";
import { 
    createPolicy, 
    getAllPolicies, 
    getPolicyById, 
    updatePolicy, 
    deletePolicy 
} from "../controllers/policies.controllers.js";

const router = express.Router();

// Routes
router.post("/create-policy", createPolicy); // Create a new policy
router.get("/", getAllPolicies); // Get all policies
router.get("/:id", getPolicyById); // Get a single policy by ID
router.put("/:id", updatePolicy); // Update a policy by ID
router.delete("/:id", deletePolicy); // Delete a policy by ID

export default router;