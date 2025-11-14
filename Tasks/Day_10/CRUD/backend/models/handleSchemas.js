import mongoose from 'mongoose';


 const inpSchema =  mongoose.Schema(  {

      
            name:String ,   age:String

    
 } , {  timestamps:true  }  );


  

const inpModel = mongoose.model(  "  cruddatas  " , inpSchema  );


export default inpModel;