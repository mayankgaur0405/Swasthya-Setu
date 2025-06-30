import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "E:/Mayank/PROJECTS/after_learning/CLONED_PROJECTS/MERN-Stack-Hospital-Management-System-Web-Application/backend/config/config.env" });


export const dbConnection = () => {
  console.log("MONGO_URI:", process.env.MONGO_URI); // optional debug
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Swasthya-Seti-DB",
    })
    .then(() => {
      console.log("✅ Connected to database!");
    })
    .catch((err) => {
      console.log("❌ Some error occurred while connecting to database:", err);
    });
};
