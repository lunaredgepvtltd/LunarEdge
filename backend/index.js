import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import errorHandler from './middleware/ErrorHandler.js';
import dbConnect from './dbConnection/index.js';
import cors from 'cors';
import router from './routes/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Define allowed origins (could be configured using an environment variable)
const allowedOrigins = [
  'http://13.201.243.29:3000',
  'http://lunaredge.in',
  'http://localhost:3000'
];

// CORS middleware with dynamic origin checking
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps, Postman) or match origin from allowedOrigins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
  allowedHeaders: 'Content-Type,Authorization', // Allowed headers
  credentials: true, // If credentials (cookies, HTTP auth) are needed
  optionsSuccessStatus: 204 // Response status for preflight
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Main route setup
app.use('/api', router);

// Custom error handling middleware
app.use(errorHandler);

// Database connection
dbConnect();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
