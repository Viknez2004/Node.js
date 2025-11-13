import mongoose from 'mongoose';

const connectDb=async()=>{

       const connn= await mongoose.connect(process.env.MONGO);

       console.log(connn.connection.host);

};

export default connectDb;