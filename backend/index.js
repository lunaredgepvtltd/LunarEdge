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

app.use(cors({
  origin: 'http://13.201.243.29:3000'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',router);

app.use(errorHandler);
dbConnect();

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
