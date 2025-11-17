import mongoose from 'mongoose';


const regSchema= mongoose.Schema( {

         email:{type:String , unique:true , required:true} , 
         pass:{type:String , unique:true , required:true}


} , {timestamps:true} );


const regmodel=mongoose.model( "registers" , regSchema );

export default regmodel;