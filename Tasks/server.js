import express from 'express';
import dotenv from 'dotenv';
import routehandler from './Day_8/routes/routehandler.js';
import cors from 'cors';
import dbConnect from './Day_8/config/db.js';

dotenv.config();

const app=express();

app.use( express.json() );

app.use( cors() );

const PORT = process.env.PORT;

app.listen( PORT ,  ()=>{  console.log(`http://localhost:${PORT}`)  }  );

dbConnect();


app.use(  "/api/base" , routehandler  );



