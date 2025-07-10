import express from "express";
import { getMessage, sendMessage } from "../Controller/message.controller.js";
import secureroute from "../middleware/secureroute.js";

const router = express.Router();
router.post("/send/:id",secureroute, sendMessage);
router.get("/get/:id",secureroute, getMessage);

export default router;