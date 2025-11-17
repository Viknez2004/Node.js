import mongoose from 'mongoose';

const conxDB = async()=>{

      const co_y=await mongoose.connect(process.env.MONGO);

      console.log(`${co_y.connection.host}`);


};

export default conxDB;