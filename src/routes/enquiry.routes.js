import { Router } from "express";
import { createEnquiry } from "../controllers/enquiry.controller.js";
import { de, en } from "zod/v4/locales";

const router = Router();

// Define your enquiry routes here
// Example:
// router.post('/enquiries', (req, res) => { ... });

router.route("/createEnquiry").post(createEnquiry);

export default router;