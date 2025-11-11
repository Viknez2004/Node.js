import mongoose from 'mongoose';

const dbconn=async()=>{

       const db=await mongoose.connect( process.env.MONGO );

       console.log( `${process.env.MONGO}` );

       console.log( `${db.connection.host}` );

};

export default dbconn;