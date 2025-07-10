import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";
import morgan from "morgan";
import { app,server } from "./SocketIO/server.js";

dotenv.config();
app.use(morgan("dev"));

// Configure CORS with specific origin and credentials allowed
app.use(cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoute);
app.use("/message", messageRoute);

const PORT = process.env.PORT || 5002;
const URI = process.env.MONGODB_URL;

mongoose.connect(URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

server.listen(PORT, () => {
    console.log(`Service is running on port ${PORT}`);
});
