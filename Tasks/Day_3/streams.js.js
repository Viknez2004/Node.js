import fs from 'fs'


// if(fs.existsSync("zhuge.txt"))
// {
//       fs.readFile(  "zhuge.txt" ,"utf-8" ,  (  er , datas  )=>{   if(er){  console.log(er)   }     else{  console.log(datas)  }    }  )
// }
// else
// {
//     console.log("file not exist");
// }


const stream = fs.createReadStream(  "zhuge.txt" , "utf-8"  );


   stream.on(  "data" , (  buffer  )=>{  console.log(buffer)  }  );




const writez = fs.createWriteStream("zhugecopy.txt");

writez.write("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

