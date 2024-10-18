import express, { application } from 'express'
import query from '../controller/queryFormContoller.js';
import  AdminLoginController  from '../controller/adminLoginController.js';
import { addVacancyContoller, deleteVacancy, getAllVacancy, getParticularVacancy, updateVacancy } from '../controller/vacancyController.js';
import multer from 'multer'
import path from 'path';
import { vacancyFormFill } from '../controller/vacancyFormFill.js';
import { sendEmail } from '../controller/sendEmail.js';
import { applicantsDetails } from '../controller/applicantsDetails.js';

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

//  particular-vacancy 
router.post('/getParticularVacancy',getParticularVacancy);

// vacancy-delete 
router.delete('/deleteVacancy',deleteVacancy)

// vacancy-update 

router.put('/updateVacancy',updateVacancy)

// formFill 
router.post('/Formfill', upload.single('cv'),vacancyFormFill)

// applicant-form-details

router.post('/getApplicantsDetails',applicantsDetails);

// sendemail 
router.post('/sendEmail',sendEmail)


export default router;



