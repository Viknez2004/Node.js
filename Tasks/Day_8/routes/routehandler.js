import express from 'express';
import { createUser, getUsers } from '../controllers/controllerhandler.js';

const router=express.Router();


router.post(  "/createlogin" , createUser  );

router.get(  "/getusers" , getUsers  );


export default router;

// http://localhost:3000/api/base/createlogin

// http://localhost:3000/api/base/getusers

