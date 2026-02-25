import { Router } from 'express';
import { AuthController } from '../controllers/AuthController.js';
import { verifyToken } from '../middleware/auth.js';

const authRouter = Router();

// Public routes
authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);

// Protected route (requires valid JWT)
authRouter.get('/me', verifyToken, AuthController.me);
authRouter.put('/me', verifyToken, AuthController.updateProfile);

export default authRouter;
