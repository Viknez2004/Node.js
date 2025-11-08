import express from 'express';

import dotenv from 'dotenv';

import cors from 'cors';

import authRoutes from './Day_5/Routes/authRoutes.js';

dotenv.config();

const PORT = process.env.PORT;


const app = express();

app.listen(  PORT  ,  ()=>{  console.log(`http://localhost:${PORT}`)}  );

app.use(cors());

app.use(  express.json()  );

app.use(  "/api/auth" , authRoutes  );





















// const port = 3000;

// let server = http.createServer(    );


// server.listen(  port , (err)=>{ if(err){throw err;} else{  console.log(  `https/leomoviebooking/${port}`  ) }   }  );


// if(  fs.existsSync("Day_3/leoserver/Home.js")==false  )
// {
//       fs.writeFile(  "Day_3/leoserver/Home.js" , "Leo Movie" , (  )=>console.log("Home File created succesfully")  );

// };

// if(   fs.existsSync( "Day_3/leoserver/Movies.txt")==false )
// {
//       fs.writeFile("Day_3/leoserver/Movies.txt" , "Movie: Leo , Date: 05:11:2025 /n"+
//         ", Time :9:00am , Fare:200rs      ,       Movie: Leo , Date: 05:11:2025 , Time :02:00pm , Fare:200rs    ,      Movie: Leo , Date: 05:11:2025 , Time :9:00pm , Fare:250rs " , ()=>console.log("Movies files created and scheduled")  );


// };

// if(  fs.existsSync(  "Day_3/leoserver/Booking.js"  )==false  )
// {
//      fs.writeFile(  "Day_3/leoserver/Booking.js" , "booking page" , ()=>console.log(  "Booking file created"  )  );
// };
