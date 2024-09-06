import express from 'express'
import query from '../controller/userContoller.js';
import  AdminLoginController  from '../controller/adminLoginController.js';
import { addVacancyContoller, deleteVacancy, getAllVacancy, updateVacancy } from '../controller/vacancyController.js';

const router = express.Router();

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
router.put('/updateVacancy',updateVacancy)


export default router;



