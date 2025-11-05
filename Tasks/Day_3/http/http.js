import http from 'http'


const ser = http.createServer(  ()=>{
       
          console.log("server created");

}  );

const PORT = 3000;

ser.listen( PORT,()=>{   console.log(  `  https:/sample/${PORT}  `  )   }  );

 
