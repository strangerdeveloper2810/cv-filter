import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/jwt";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid token" });
    }
};

const authorize = (roles: string[]) => (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user?.role)) {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
};

export {
    authenticate,
    authorize
};