import express from 'express'
const router = new express.Router()

import { sendMessage,getMessage } from '../controllers/messageController.js'
import { protectedRoute } from '../middleware/protectedRoute.js' // This is for MiddleWare

router.post("/send/:id",protectedRoute,sendMessage)
router.get("/:id",protectedRoute,getMessage)



export default router

