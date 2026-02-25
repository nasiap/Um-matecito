import { Router } from 'express';
import type { Request, Response } from 'express';
import prisma from './prismaClient.js';
import { PaymentController } from './controllers/PaymentController.js';

const router = Router();

// ==========================================
// TRIP ROUTES (Radar Logic & PostGIS)
// ==========================================

// Create a Trip with PostGIS Coordinates
router.post('/trips', async (req: Request, res: Response) => {
  const {
    driver_id,
    origin_lat, origin_lng, origin_address,
    dest_lat, dest_lng, dest_address,
    departure_time, seats_available, price, currency, women_only
  } = req.body;

  try {
    // PostGIS Geometry Insert using Raw SQL for atomicity
    const result = await prisma.$queryRaw`
      INSERT INTO "Trip" (
        id, driver_id, origin_coords, dest_coords, origin_address, dest_address,
        departure_time, seats_available, price, currency, "women_only", "updatedAt"
      ) VALUES (
        gen_random_uuid(),
        ${driver_id},
        ST_SetSRID(ST_MakePoint(${parseFloat(origin_lng)}, ${parseFloat(origin_lat)}), 4326),
        ST_SetSRID(ST_MakePoint(${parseFloat(dest_lng)}, ${parseFloat(dest_lat)}), 4326),
        ${origin_address},
        ${dest_address},
        ${new Date(departure_time)},
        ${parseInt(seats_available)},
        ${parseFloat(price)},
        ${currency}::"Currency",
        ${women_only},
        NOW()
      )
      RETURNING id;
    `;

    const newTripId = (result as any)[0]?.id;

    res.status(201).json({
      success: true,
      message: 'Trip created successfully',
      tripId: newTripId
    });

  } catch (error) {
    console.error('Error creating trip:', error);
    res.status(500).json({ error: 'Failed to create trip', details: error });
  }
});

// "Radar" Logic: Find Trips Nearby
router.get('/trips/search', async (req: Request, res: Response) => {
  const { lat, lng, radius_km } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'Missing lat or lng parameters' });
  }

  const radius = parseFloat(radius_km as string) || 10; // Default 10km

  try {
    // High-performance geospatial query
    const trips = await prisma.$queryRaw`
      SELECT 
        id, driver_id, origin_address, dest_address, price, currency, seats_available, "women_only", departure_time,
        ST_AsText(origin_coords) as origin_wkt,
        ST_AsText(dest_coords) as dest_wkt
      FROM "Trip"
      WHERE ST_DWithin(
        origin_coords::geography, 
        ST_SetSRID(ST_MakePoint(${parseFloat(lng as string)}, ${parseFloat(lat as string)}), 4326)::geography, 
        ${radius * 1000}
      )
      AND seats_available > 0
      AND status = 'SCHEDULED'::"TripStatus"
      ORDER BY departure_time ASC;
    `;

    res.json(trips);
  } catch (error) {
    console.error('Error searching trips:', error);
    res.status(500).json({ error: 'Failed to search trips' });
  }
});

// ==========================================
// PAYMENT ROUTES (Chameleon Logic)
// ==========================================

router.get('/payment-config', PaymentController.getPaymentConfig);
router.post('/payments/preference', PaymentController.createPreference);
router.post('/payments/webhook', PaymentController.handleWebhook);

export default router;
