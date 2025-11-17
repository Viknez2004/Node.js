import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conxDB from './config/db.js';
import AuthRouteHandler from './routes/AuthRouteHandler.js';
import loginrouter from './routes/Loginrouteshandler.js'

dotenv.config();

const PORT=process.env.PORT;

conxDB();

const appx=express();

appx.use( cors() );

appx.use(  express.json()  );

appx.listen(  PORT , ()=>{  console.log(  `http://localhost:${PORT}`  )  }  );

appx.use(  '/api/base' , AuthRouteHandler );

appx.use(  '/api/login' , loginrouter  );