import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import listingsRouter from "../src/routes/listingsRouter";
import authRouter from "./routes/auth";

dotenv.config();

const uri = process.env.MONGO_URI || "";

async function connect(connectionString: string) {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connect(uri);

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use("/api", listingsRouter);
app.use("/api", authRouter);
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
