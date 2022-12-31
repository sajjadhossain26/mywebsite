import mongoose from "mongoose";

const mongoDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_STRING);
    console.log(`MongoDB connection successful`.bgGreen.white);
  } catch (error) {
    console.log("error");
  }
};

export default mongoDB;
