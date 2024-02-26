import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

try {
    dotenv.config();
    console.log(process.env); // Log all loaded environment variables
  } catch (error) {
    console.error("Error loading environment variables:", error);
  }
  
const uri = process.env.MONGO;
const app = express();

console.log(uri);


mongoose.connect(uri).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log(err);
    
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});