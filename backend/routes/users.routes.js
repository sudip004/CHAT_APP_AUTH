import express from "express";
const router = new express.Router();

import { protectedRoute } from "../middleware/protectedRoute.js";
import {getUsersForSidebar,getUsers} from '../controllers/userController.js'

router.get("/", protectedRoute, getUsersForSidebar);
router.get("/user", getUsers);

export default router;
