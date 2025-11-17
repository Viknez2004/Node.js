import express from 'express';
import { createreg , login } from '../controllers/logincontrollerHandler.js';


const router = express.Router();

router.post(  '/create' , createreg  );

router.post(  '/loginzz' , login  );


export default router;

// http://localhost:3000/api/login/create

// http://localhost:3000/api/login/loginzz