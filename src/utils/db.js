import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI; //mongodb://127.0.0.1:27017/task_management
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

export default connectToDB;
