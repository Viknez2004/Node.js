import express from 'express';
import dotenv from 'dotenv';
import connectDb from './Day_9/config/db.js';
import cors from 'cors';
import AuthRouteshandler from './Day_9/routes/AuthRouteshandler.js';

dotenv.config();

connectDb();

const app=express();

app.use(express.json());

app.use(cors());

const PORT=process.env.PORT;

app.listen(PORT , ()=>{

    console.log(`http://localhost:${PORT}`);
});

app.use(  "/api/basetoroute" , AuthRouteshandler  );




// http://localhost:3000/api/basetoroute

