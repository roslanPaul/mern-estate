import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';




try {
    dotenv.config();
    console.log(process.env); // Log all loaded environment variables
  } catch (error) {
    console.error("Error loading environment variables:", error);
  }
  
const uri = process.env.MONGO;
const app = express();

mongoose.connect(uri).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log(err);
    
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);




