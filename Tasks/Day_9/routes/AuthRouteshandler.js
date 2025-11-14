import express from 'express';
import { createregister, editfavper, favperregcreate, findid, showfavperdatas, showregdatas } from '../controllers/AuthControllershandler.js';

const router = express.Router();


router.post("/createregister" , createregister);

router.get( "/showreg" , showregdatas );

router.post(  "/favperreg" , favperregcreate  );

router.get(  "/getfavper" , showfavperdatas );

router.get(  "/find/:id" , findid  );

router.put(  "/editfav" , editfavper  );



export default router;


// http://localhost:3000/api/basetoroute/createregister
// http://localhost:3000/api/basetoroute/showreg
// http://localhost:3000/api/basetoroute/favperreg
// http://localhost:3000/api/basetoroute/getfavper
// http://localhost:3000/api/basetoroute/find/:id
// http://localhost:3000/api/basetoroute/editfav