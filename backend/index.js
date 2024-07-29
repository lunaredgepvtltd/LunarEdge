import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/userRoute.js';
import errorHandler from './middleware/ErrorHandler.js';
import dbConnect from './dbConnection/index.js';
import cors from 'cors'


const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin : 'http://localhost:3001'
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

dbConnect()
app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});
