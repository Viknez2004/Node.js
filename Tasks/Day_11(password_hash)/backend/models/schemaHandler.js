import mongoose from 'mongoose';


const ticketschema = mongoose.Schema(  {

          name:String , fromjn:String , tojn:String , date:String

} , { timestamps:true  } );


const ticketmodel = mongoose.model( "passengers" , ticketschema );

export default ticketmodel;