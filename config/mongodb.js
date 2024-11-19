import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Databse Connected"));
  // await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
  await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;
