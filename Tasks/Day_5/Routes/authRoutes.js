import express from 'express';
import { authcontroller } from '../controller/authController.js';



const router = express.Router();

router.post(  "/data" , authcontroller  );

export default router;


