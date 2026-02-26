import type { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient.js';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_change_me';
const SALT_ROUNDS = 12;

function signToken(userId: string): string {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

export const AuthController = {
    /**
     * POST /api/auth/register
     * Body: { email, password, phone?, dni_cpf?, country?, name? }
     */
    register: async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password, phone, dni_cpf, country, name } = req.body;

            // --- Validation ---
            if (!email || !password) {
                res.status(400).json({ error: 'Email and password are required.' });
                return;
            }

            if (password.length < 8) {
                res.status(400).json({ error: 'Password must be at least 8 characters.' });
                return;
            }

            // Check if user already exists
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                res.status(409).json({ error: 'A user with this email already exists.' });
                return;
            }

            // --- Hash password ---
            const password_hash = await bcrypt.hash(password, SALT_ROUNDS);

            // --- Create user ---
            const user = await prisma.user.create({
                data: {
                    email,
                    password_hash,
                    phone: phone ?? null,
                    dni_cpf: dni_cpf ?? null,
                    country: country ?? 'BR',
                    name: name ?? null,
                },
            });

            // --- Generate JWT ---
            const token = signToken(user.id);

            res.status(201).json({
                success: true,
                message: 'User registered successfully.',
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    country: user.country,
                },
            });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ error: 'Internal server error during registration.' });
        }
    },

    /**
     * POST /api/auth/login
     * Body: { email, password }
     */
    login: async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            // --- Validation ---
            if (!email || !password) {
                res.status(400).json({ error: 'Email and password are required.' });
                return;
            }

            // --- Find user ---
            const user = await prisma.user.findUnique({ where: { email } });
            if (!user) {
                // Generic message to prevent email enumeration
                res.status(401).json({ error: 'Invalid email or password.' });
                return;
            }

            // --- Verify password ---
            const isPasswordValid = await bcrypt.compare(password, user.password_hash);
            if (!isPasswordValid) {
                res.status(401).json({ error: 'Invalid email or password.' });
                return;
            }

            // --- Generate JWT ---
            const token = signToken(user.id);

            res.json({
                success: true,
                message: 'Login successful.',
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    country: user.country,
                    reputation: user.reputation,
                    is_driver_verified: user.is_driver_verified,
                },
            });
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Internal server error during login.' });
        }
    },

    /**
     * GET /api/auth/me
     * Returns the currently authenticated user's profile.
     * Requires verifyToken middleware.
     */
    me: async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = (req as any).userId as string;

            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    phone: true,
                    country: true,
                    reputation: true,
                    is_driver_verified: true,
                    createdAt: true,
                },
            });

            if (!user) {
                res.status(404).json({ error: 'User not found.' });
                return;
            }

            res.json({ success: true, user });
        } catch (error) {
            console.error('Get profile error:', error);
            res.status(500).json({ error: 'Internal server error.' });
        }
    },

    /**
     * PUT /api/auth/me
     * Updates the currently authenticated user's profile.
     * Body: { name?, phone?, dni_cpf?, country? }
     * Requires verifyToken middleware.
     */
    updateProfile: async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = (req as any).userId as string;
            const { name, phone, dni_cpf, country } = req.body;

            // Build update data — only include fields that were provided
            const updateData: Record<string, string | null> = {};
            if (name !== undefined) updateData.name = name;
            if (phone !== undefined) updateData.phone = phone;
            if (dni_cpf !== undefined) updateData.dni_cpf = dni_cpf;
            if (country !== undefined) updateData.country = country;

            if (Object.keys(updateData).length === 0) {
                res.status(400).json({ error: 'No fields provided to update.' });
                return;
            }

            const user = await prisma.user.update({
                where: { id: userId },
                data: updateData,
                select: {
                    id: true,
                    email: true,
                    name: true,
                    phone: true,
                    country: true,
                    dni_cpf: true,
                    reputation: true,
                    is_driver_verified: true,
                    createdAt: true,
                },
            });

            res.json({
                success: true,
                message: 'Profile updated successfully.',
                user,
            });
        } catch (error) {
            console.error('Update profile error:', error);
            res.status(500).json({ error: 'Internal server error during profile update.' });
        }
    },
};
