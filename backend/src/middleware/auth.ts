import type { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_change_me';

/**
 * Express middleware that verifies a JWT from the Authorization header.
 *
 * Expected header format: `Authorization: Bearer <token>`
 *
 * On success: attaches `req.userId` (string) and calls next().
 * On failure: returns 401 Unauthorized.
 */
export function verifyToken(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Access denied. No token provided.' });
        return;
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({ error: 'Access denied. Malformed token.' });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        (req as any).userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token.' });
    }
}
