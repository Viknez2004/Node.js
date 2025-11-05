import path from 'path'

//   path used to give utilities to work with files and directory path , 
//   it is used to work with all os system   ....eg :  ios , linux , android etc.....

let x ="E:/Node.js/Tasks/Day_3/path/path.js";



console.log( "folder name" , path.dirname(x)  );  

console.log( "file name" , path.basename(x)  );

console.log( "ext name" , path.extname(x)  );

console.log( "full path" , path.resolve()  );



