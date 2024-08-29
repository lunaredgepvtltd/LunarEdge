import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import errorHandler from './middleware/ErrorHandler.js';
import dbConnect from './dbConnection/index.js';
import cors from 'cors';
import query from './controller/userContoller.js';
import AdminLoginController from './controller/adminLoginController.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// router
app.post('/api/query',query); 
app.post('/api/adminLogin', AdminLoginController);

app.use(errorHandler);
dbConnect();

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
