import express from "express";
const router = new express.Router();

import { protectedRoute } from "../middleware/protectedRoute.js";
import {getUsersForSidebar} from '../controllers/userController.js'

router.get("/", protectedRoute, getUsersForSidebar);

export default router;
