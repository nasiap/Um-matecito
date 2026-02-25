import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Middleware — allow all origins during development
app.use(cors({ origin: '*' }));
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

