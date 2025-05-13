import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/jwt";

const prisma = new PrismaClient();

const AuthServices = {
    registerUser: async (name: string, email: string, password: string, role = Role.HR) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await prisma.user.create({
            data: { name, email, password: hashedPassword, role },
        });
    },

    loginUser: async (email: string, password: string) => {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) return null;
        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
        return { user, token };
    }
}

export default AuthServices;