import express from 'express';
import { createUser , getUsers , paramsId , updateUser , delUser } from '../controllers/toControllers.js';

const router = express.Router();

router.post(  '/create' ,  createUser  );

router.get(  '/get' , getUsers  );

router.get(  '/user/:id' , paramsId  );

router.put(  '/update/:id' , updateUser  );

router.delete('/del/:id' , delUser );

export default router;

//tocreate
// http://localhost:3000/api/base/create

//toget
// http://localhost:3000/api/base/get

//togettoedit
// http://localhost:3000/api/base/user/:id

//toupdate
// http://localhost:3000/api/base/update/:id

//todelete
// http://localhost:3000/api/base/del/:id