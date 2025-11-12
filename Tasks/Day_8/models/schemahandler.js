import mongoose from 'mongoose';

const xschema = new mongoose.Schema(  {

          email:String, pass:Number

}  );


const xmodel = mongoose.model(  "employee" , xschema  );

export default xmodel;