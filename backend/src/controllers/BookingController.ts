import type { Request, Response } from 'express';
import prisma from '../prismaClient.js';

export const BookingController = {
    /**
     * Create a booking for a trip.
     * Uses Prisma $transaction to atomically:
     *   1. Verify seats are available
     *   2. Decrement seats_available on the Trip
     *   3. Create the Booking record
     */
    createBooking: async (req: Request, res: Response): Promise<void> => {
        try {
            const passengerId = (req as any).userId as string;
            const { trip_id, payment_method } = req.body;

            if (!trip_id) {
                res.status(400).json({ error: 'trip_id is required.' });
                return;
            }

            // Validate payment method
            const validMethods = ['PIX', 'CREDIT_CARD', 'MERCADO_PAGO_QR', 'EFECTIVO'];
            const method = payment_method && validMethods.includes(payment_method)
                ? payment_method
                : 'EFECTIVO';

            // Use interactive transaction to prevent race conditions
            const booking = await prisma.$transaction(async (tx) => {
                // 1. Fetch the trip and lock the row
                const trip = await tx.trip.findUnique({
                    where: { id: trip_id },
                });

                if (!trip) {
                    throw new Error('TRIP_NOT_FOUND');
                }

                // 2. Prevent driver from booking their own trip
                if (trip.driver_id === passengerId) {
                    throw new Error('SELF_BOOKING');
                }

                // 3. Check seat availability
                if (trip.seats_available <= 0) {
                    throw new Error('NO_SEATS');
                }

                // 4. Check for duplicate booking
                const existing = await tx.booking.findFirst({
                    where: {
                        trip_id,
                        passenger_id: passengerId,
                        status: { in: ['PENDING', 'CONFIRMED'] },
                    },
                });

                if (existing) {
                    throw new Error('ALREADY_BOOKED');
                }

                // 5. Decrement seats
                await tx.trip.update({
                    where: { id: trip_id },
                    data: { seats_available: { decrement: 1 } },
                });

                // 6. Create booking
                const newBooking = await tx.booking.create({
                    data: {
                        trip_id,
                        passenger_id: passengerId,
                        status: 'CONFIRMED',
                        payment_method: method,
                    },
                    include: {
                        trip: {
                            select: {
                                origin_address: true,
                                dest_address: true,
                                departure_time: true,
                                price: true,
                                currency: true,
                                seats_available: true,
                            },
                        },
                    },
                });

                return newBooking;
            });

            res.status(201).json({
                success: true,
                message: '¡Asiento reservado con éxito! 🎉',
                booking,
            });
        } catch (error: any) {
            console.error('Create booking error:', error);

            // Map business errors to user-friendly responses
            const errorMap: Record<string, { status: number; message: string }> = {
                TRIP_NOT_FOUND: { status: 404, message: 'El viaje no existe.' },
                SELF_BOOKING: { status: 400, message: 'No podés reservar tu propio viaje.' },
                NO_SEATS: { status: 400, message: 'No hay asientos disponibles.' },
                ALREADY_BOOKED: { status: 400, message: 'Ya tenés una reserva en este viaje.' },
            };

            const mapped = errorMap[error.message];
            if (mapped) {
                res.status(mapped.status).json({ error: mapped.message });
                return;
            }

            res.status(500).json({ error: 'Error interno al crear la reserva.' });
        }
    },

    /**
     * Get all bookings for the logged-in user.
     */
    getMyBookings: async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = (req as any).userId as string;

            const bookings = await prisma.booking.findMany({
                where: { passenger_id: userId },
                include: {
                    trip: {
                        select: {
                            id: true,
                            origin_address: true,
                            dest_address: true,
                            departure_time: true,
                            price: true,
                            currency: true,
                            status: true,
                            driver_id: true,
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
            });

            res.json(bookings);
        } catch (error) {
            console.error('Get bookings error:', error);
            res.status(500).json({ error: 'Error al obtener las reservas.' });
        }
    },
};
