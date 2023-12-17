import mongoose from "mongoose";

const connectMongoDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI as string)
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));
};

export default connectMongoDB;