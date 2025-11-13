import express from 'express';
import { createregister, favperregcreate, showfavperdatas, showregdatas } from '../controllers/AuthControllershandler.js';

const router = express.Router();


router.post("/createregister" , createregister);

router.get( "/showreg" , showregdatas );

router.post(  "/favperreg" , favperregcreate  );

router.get(  "/getfavper" , showfavperdatas )



export default router;


// http://localhost:3000/api/basetoroute/createregister
// http://localhost:3000/api/basetoroute/showreg
// http://localhost:3000/api/basetoroute/favperreg
// http://localhost:3000/api/basetoroute/getfavper