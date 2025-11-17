import express from 'express';
import { createticket , getticket , editticket , updateticket } from '../controllers/AuthControllerHandler.js';


const router=express.Router();


router.post(  "/create" , createticket  );

router.get(  "/get" , getticket  );

router.get(  "/edit/:id" , editticket  );

router.put(  "/upd/:id" , updateticket );




export default router;
 

// for create
// http://localhost:3000/api/base/create

// for fetch
// http://localhost:3000/api/base/get

// for edit
// http://localhost:3000/api/base/edit/:id

// for update
// http://localhost:3000/api/base/upd/:id