import mongoose from 'mongoose';

const regschema = new mongoose.Schema(  {

           email :String ,  password : String

}  );


const regmodel = mongoose.model(  "regusers" , regschema  );

export default regmodel;

const favperschema = new mongoose.Schema( {

        name:{  type:String ,unique:true  } , role:String , city:String , networth:String

} );

export const favperregmodel = mongoose.model( "favpersons" , favperschema );