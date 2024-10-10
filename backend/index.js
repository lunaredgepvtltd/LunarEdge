import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import errorHandler from './middleware/ErrorHandler.js';
import dbConnect from './dbConnection/index.js';
import cors from 'cors';
import fs from 'fs';
import https from 'https';
import router from './routes/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Load SSL certificate and private key
const sslOptions = {
  key: fs.readFileSync('C:/Users/Administrator/Desktop/lunaredge.in (1)/Privatekey.pem'),
  cert: fs.readFileSync('C:/Users/Administrator/Desktop/lunaredge.in (1)/ea9fadbc35cb5560.crt')
};

// Define allowed origins (could be configured using an environment variable)
const allowedOrigins = [
  'http://13.201.243.29:3000',
  'http://lunaredge.in',
  'http://localhost:3000'
];

// CORS middleware with dynamic origin checking
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
  optionsSuccessStatus: 204
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Main route setup
app.use('/api', router);

// Custom error handling middleware
app.use(errorHandler);

// Database connection
dbConnect();

// Start the HTTPS server
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Server running securely on https://localhost:${PORT}`);
});
