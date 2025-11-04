import fs from "fs"




// if(  fs.existsSync("./././jsprograms")  )
// {
//       fs.writeFile(  "./././jsprograms/Fibo.js" ,"  let a = 0, b = 1; console.log(a); if (n > 1) console.log(b); for (let i = 2; i < n; i++) { let next = a + b        console.log(next)    a = b    b = next }}   ", (err)=>{

//            if(err)
//            {
//               console.log(err.message);
//            }
//            else
//            {
//               console.log("Fibonacci program created");
//            }
           

//       } )
// };



// if(  fs.existsSync("./././jsprograms")  )
// {
//      fs.writeFile(  "./././jsprograms/prime.js" , "  let x=8; for(let i=2; i<x; i++){  if(x/i==0){ console.log(`not a prime number`); }  else{ `prime number`  }  }  " , (e)=>{

//                  if(e)
//                  {
//                      console.log(e.message);
//                  }
//                  else
//                  {
//                      console.log("prime no programm created successfully");
//                  }

//      }  )
// }




// if(  fs.existsSync("./biography/viknez.text")  )
// {
//       fs.rename(  "./biography/viknez.text" , "./biography/theorytask.text" , (err)=>{

//            if(err) throw err;

//            else{
//                   console.log("renamed successfully");
//            }

//       }  )
// }




// if(  fs.existsSync(  "./biography/theorytask.text"  )  )
// {
//        fs.appendFile(  "./biography/theorytask.text" , "  Diff Between setTimeout and setInterval .....     /n                       setTimeout and setInterval both were a functions ,   setTimeout used to executes a function once after a delay we specified manually ,,,,,, whereas setInterval executes a function repeatedly untill we clear it manually,,,,         ",
//         (err)=>{
//                    console.log("added content in theorytask successfully");
//         }
//          )
// }


if(  fs.existsSync(  "./biography/theorytask.text"  )  )
{
      fs.readFile(  "./biography/theorytask.text" ,  "utf-8"  , (e,d)=>{

             if(e)
             {
                  throw e;
             }
             else
             {
                  console.log(d);
             }

      }  )
}









// if(  fs.existsSync("./././jsprograms")==false  )
// {

//     fs.mkdir("./././jsprograms",(err)=>{

//       if(err)
//       {
//           console.log(err.message);
//       }
//       else
//       {
//           console.log("Folder created successfully");
//       }

// })

// }


// fs.writeFile(  "./././jsprograms/palindrome.js", " let x = 11 " , (err)=>{

//             if(err)
//             {
//                  console.log(err.message);
//             }
//             else
//             {
//                  console.log("File created and content added");
//             }

// }  )


// if(  fs.existsSync("./././jsprograms/palindrome.js")  )
// {

//        fs.readFile(  "./././jsprograms/palindrome.js","utf-8",(err,datas)=>{

//                 if(err)
//                 {
//                     console.log(err.message);
//                 }
//                 else
//                 {
//                     console.log(datas);
//                 }

//        }  )

// }



// if(  fs.existsSync("./././jsprograms/palindrome.js")  )
// {

//         fs.appendFile(  "./././jsprograms/palindrome.js" , "   let x = 121; let rev =0; while(x>0){  let y = x%10; let rev=rev*10+y;  }  console.log(rev); "
            
                   

//             , (err)=>{  if(err){  console.log(err.message)  }  else{  console.log("content update successfully");  }  } )

// }


/////////////////////////////////////////////////////////////////////



// if(   fs.existsSync("./biography") == false  )
// {

    
// fs.mkdir( "./biography",(err)=>{

//        if(err)
//        {
//            console.log(err.message);
//        }
//        else
//        {
//            console.log("folder created successfully");
//        }

// }  )

// }                                                                                                                                            
         

// fs.writeFile(  "./biography/viknez.text" , " tappa:paapu " , (err)=>{

//           if(err)
//           {
//               console.log(err.message);
//           }
//           else
//           {
//               console.log("File created and content added successfully");
//           }

// }  )


// if(  fs.existsSync("./biography/viknez.text")  )
// {
//       fs.readFile(  "./biography/viknez.text" , "utf-8" , (err,data)=>{

//               if(err)
//                 {
//                     console.log(err.message);
//                 }    
//               else
//               {
//                    console.log(data);
//               }

//       }  )
// };

// if (  fs.existsSync("./biography/viknez.text")  )
// {
//        fs.appendFile(  "./biography/viknez.text" , "paapu preethi" , (err)=>{

//                if(err)
//                {
//                   console.log(err.message);
//                }
//                else
//                {
//                   console.log("content added successfully");
//                }
//        }  )
// }



// if (  fs.existsSync("./biography/viknez.text")  )
// {
//        fs.unlink(  "./biography/viknez.text" , (err)=>{

//                   console.log("file deleted successfully");

//        }  )
// }
