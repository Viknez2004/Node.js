import mongoose from 'mongoose';


const connDB=async()=>{

       
       const conx = await mongoose.connect(process.env.MONGO);

       console.log(`${conx.connection.host}`);


};

export default connDB;