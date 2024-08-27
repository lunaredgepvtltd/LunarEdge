import express from 'express'
import { register } from '../controller/userContoller.js';
import { AdminLoginController } from '../controller/adminLoginController.js';
const router = express.Router();

router.post('/register',register);
router.post('/adminLogin',AdminLoginController)

export default router;