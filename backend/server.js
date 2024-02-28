import express from 'express';
import dotenv from 'dotenv'
import path from "path"
import cookieParser from 'cookie-parser'
// Router config
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import usersRoutes from './routes/users.routes.js'
// data base
import{ConnectDB} from './db/connectDB.js'

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
ConnectDB()

 // to parse the  incoming requests with JSON payloads
 app.use(express.json()) 
 app.use(cookieParser())
// using middleware routing better less code
app.use("/api/auth",authRoutes);
// For Message Routes
app.use("/api/message",messageRoutes)
// User Routes
app.use("/api/users",usersRoutes)


app.listen(PORT,()=>console.log(`connnection successfully on port ${PORT}`))

