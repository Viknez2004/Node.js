import fs from 'fs'


if(  fs.existsSync(  "Movies.txt"  )  )
{
      fs.readFile(  "Movies.txt" , "utf-8" , ( err , data  )=>{
  
          if(err)
          {
              console.log(err.message);
          }
          else
          {
              
         console.log( data );
             
          }
                                                                              } );
}
else
{
      console.log("File not exist");
}