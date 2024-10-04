import express from 'express'
import query from '../controller/userContoller.js';
import  AdminLoginController  from '../controller/adminLoginController.js';
import { addVacancyContoller, deleteVacancy, getAllVacancy, updateVacancy } from '../controller/vacancyController.js';
import multer from 'multer'
import path from 'path';
import { FormFill } from '../controller/FormFill.js';
import { sendEmail } from '../controller/sendEmail.js';

const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
  });
  
  const upload = multer({ storage: storage });

// user-query 
router.post('/query',query);

// admin-login 
router.post('/adminLogin',AdminLoginController)

// vacancy-add 
router.post('/addNewVacancy',addVacancyContoller);

// all-vacancy 
router.get('/getAllVacancy',getAllVacancy)

// vacancy-delete 
router.delete('/deleteVacancy',deleteVacancy)

// vacancy-update 

// formFill 
router.post('/Formfill', upload.single('cv'),FormFill)

// sendemail 
router.post('/sendEmail',sendEmail)


export default router;



