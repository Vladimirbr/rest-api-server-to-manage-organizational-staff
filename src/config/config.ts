import dotenv from "dotenv";

// ENV var config
dotenv.config();

export const PORT = process.env.PORT ? process.env.PORT : "3000";

export const MONGO_URI = process.env.MONGO_URI ? process.env.MONGO_URI : "mongodb://localhost:27017/greeninvoice";
