import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";

export interface RequestWithUser extends Request {
    user: {
        id: number;
    };
}

export const verifyToken = (req: RequestWithUser, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({message: "Unauthorized"});
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = {
            // @ts-ignore
            id: decoded.id,
        };
        next();
    } catch (e) {
        return res.status(401).json({message: "Unauthorized"});
    }
};