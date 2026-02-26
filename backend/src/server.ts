import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Cloud-ready CORS: accepts requests from FRONTEND_URL if set, or defaults to everything
const allowedOrigins = process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : '*';
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// Routes
app.use('/api', routes);
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

// Health Check
app.get('/', (req, res) => {
    res.send('Un Matecito Backend is Running! 🧉🚗');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

