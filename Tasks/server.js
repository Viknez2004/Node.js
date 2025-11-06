import http from 'http';

import fs from 'fs';

import express from 'express';

import env from 'dotenv';

env.config();

const app = express();

const PORT = process.env.Port   ||  4007  ;

app.listen(  PORT , ()=>{   console.log(`  http:/localhost:${PORT}  `)   }  );


















// const port = 3000;

// let server = http.createServer(    );


// server.listen(  port , (err)=>{ if(err){throw err;} else{  console.log(  `https/leomoviebooking/${port}`  ) }   }  );


if(  fs.existsSync("Day_3/leoserver/Home.js")==false  )
{
      fs.writeFile(  "Day_3/leoserver/Home.js" , "Leo Movie" , (  )=>console.log("Home File created succesfully")  );

};

if(   fs.existsSync( "Day_3/leoserver/Movies.txt")==false )
{
      fs.writeFile("Day_3/leoserver/Movies.txt" , "Movie: Leo , Date: 05:11:2025 /n"+
        ", Time :9:00am , Fare:200rs      ,       Movie: Leo , Date: 05:11:2025 , Time :02:00pm , Fare:200rs    ,      Movie: Leo , Date: 05:11:2025 , Time :9:00pm , Fare:250rs " , ()=>console.log("Movies files created and scheduled")  );


};

if(  fs.existsSync(  "Day_3/leoserver/Booking.js"  )==false  )
{
     fs.writeFile(  "Day_3/leoserver/Booking.js" , "booking page" , ()=>console.log(  "Booking file created"  )  );
};
