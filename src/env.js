import dotenv from "dotenv";
dotenv.config();

export const FIREBASE_KEY = process.env.FIREBASE_KEY;
export const PORT = process.env.PORT || 3000;