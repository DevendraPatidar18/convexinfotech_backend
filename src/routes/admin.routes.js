import { Router } from "express";

import { adminLogin } from "../controllers/admin.controller.js";

const adminUserRouter = Router();


adminUserRouter.route("/login").post(adminLogin);

export default adminUserRouter;