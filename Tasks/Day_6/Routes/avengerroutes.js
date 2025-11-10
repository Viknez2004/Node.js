import express from 'express';
import { bodycontrol, headercontroller, paramscontroller, querycontroller } from '../Controllers/avengercontroller.js';

const router = express.Router();

router.post(  "/bodydatas" ,  bodycontrol );

router.get(  "/params/:id" , paramscontroller  );

router.get( "/querydatas" , querycontroller );

router.get( "/headerdatas" ,  headercontroller);

export default router;