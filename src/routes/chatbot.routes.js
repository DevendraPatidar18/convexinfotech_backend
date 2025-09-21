import { Router } from "express";

import { chat } from "../controllers/chatbot.controller.js";

const router = Router();


router.route("/chat").post(chat);

export default router;