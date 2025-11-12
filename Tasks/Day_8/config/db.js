import mongoose from 'mongoose';

const dbConnect =async()=>{

         const con =await mongoose.connect(process.env.MONGO);

         console.log(con.connection.host);

};

export default dbConnect;