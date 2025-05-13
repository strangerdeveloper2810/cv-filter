import { Request, Response, NextFunction } from 'express';
import { AuthServices } from '../services';

const AuthController = {
    register: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email, password, role } = req.body;
            if (!name || !email || !password)
                return res.status(400).json({ message: "Missing fields" });
            const user = await AuthServices.registerUser(name, email, password, role);
            res.json({
                message: "Registered",
                user: { id: user.id, name: user.name, email: user.email, role: user.role }
            });
        } catch (err) {
            next(err);
        }
    },

    login: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;
            const result = await AuthServices.loginUser(email, password);
            if (!result)
                return res.status(401).json({ message: "Invalid credentials" });
            const { user, token } = result;
            res.json({
                token,
                user: { id: user.id, name: user.name, email: user.email, role: user.role }
            });
        } catch (err) {
            next(err);
        }
    }
};

export default AuthController;
