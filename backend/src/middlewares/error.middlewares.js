import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
    let error;

    // Normalize error to ApiError instance
    if (err instanceof ApiError) {
        error = err;
    } else {
        const statusCode =
            err.statusCode || (err instanceof mongoose.Error ? 400 : 500);
        const message = err.message || "Something went wrong";
        error = new ApiError(statusCode, message, err?.errors || [], err.stack);
    }

    // Build the response
    const response = {
        statusCode: error.statusCode,
        message: error.message,
        errors: error.errors || [],
        ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    };

    // Send the error response
    res.status(error.statusCode).json(response);
};

export { errorHandler };
