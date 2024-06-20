import express, { Request, Response, NextFunction } from 'express';
import userRoutes from '../routes/userRoutes';
import { ApiError } from '../entities/apiError';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

// Error handling middleware
app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({ message: err.message });
});

export default app;
