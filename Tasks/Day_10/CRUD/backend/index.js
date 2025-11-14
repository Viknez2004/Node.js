import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connDB from './config/db.js';
import toRouter from './routes/toRouter.js';

dotenv.config();

connDB();

const PORT = process.env.PORT;

const appx=express();

appx.use(  express.json()  );

appx.use(  cors()  );

appx.listen(  PORT  , ()=>{   console.log(  `http://localhost:${PORT}`  )   }  );

appx.use(  "/api/base"  , toRouter  );