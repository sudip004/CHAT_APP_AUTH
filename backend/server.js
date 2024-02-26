import express from 'express';
import dotenv from 'dotenv'

// Router config
import authRoutes from './routes/auth.routes.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;


// using middleware routing better less code
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>console.log(`connnection successfully on port ${PORT}`))

