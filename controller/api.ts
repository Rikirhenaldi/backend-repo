import { Request, Response } from 'express';
import { getUserById, updateUserById } from '../repository/userCollection';
import { ApiError } from '../entities/apiError';

export const fetchUserData = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const userData = await getUserById(userId);

        if (!userData) {
            throw new ApiError('User not found', 404);
        }

        res.json(userData);
    } catch (error) {
        if (error instanceof ApiError) {
            res.status(error.statusCode).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

export const updateUserData = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const updatedUser = await updateUserById(userId, updateData);

        res.json(updatedUser);
    } catch (error) {
        if (error instanceof ApiError) {
            res.status(error.statusCode).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};