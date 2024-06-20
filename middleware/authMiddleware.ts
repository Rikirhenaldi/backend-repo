import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../entities/apiError';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        throw new ApiError('Unauthorized: No token provided', 401);
    }

    // Replace the following with your actual token validation logic
    if (token !== 'valid-token') {
        throw new ApiError('Unauthorized: Invalid token', 401);
    }

    next();
};
