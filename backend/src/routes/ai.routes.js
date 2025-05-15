// routes/ai.route.js
import express from "express";
import { getResponse } from "../controllers/ai.controller.js";
const router = express.Router();

router.get("/get-response", getResponse);

export default router;
