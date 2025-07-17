import mongoose from "mongoose";

const connectDB = async () => {

  try {
    
    mongoose.connection.on('connected', () => {
      console.log('connected to database successfully');
    });

    mongoose.connection.on('disconnected', () => {
      console.log('failed to connected to db');
    });

    await mongoose.connect(`${process.env.MONGODB_URL}myblogs`);

  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;