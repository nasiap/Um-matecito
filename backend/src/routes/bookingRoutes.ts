import { Router } from 'express';
import { BookingController } from '../controllers/BookingController.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

// All booking routes require authentication
router.post('/', verifyToken, BookingController.createBooking);
router.get('/mine', verifyToken, BookingController.getMyBookings);

export default router;
