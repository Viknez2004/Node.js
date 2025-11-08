import express from 'express';

import env from 'dotenv';


const app = express();

env.config();

const PORT = process.env.port  ||   3000;

app.listen(  PORT , ()=>{  console.log( `  https://localhost${PORT}  ` )   }  );