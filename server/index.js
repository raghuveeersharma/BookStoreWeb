import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
// Env variables
dotenv.config();
const PORT = process.env.PORT || 3001;
const MongoDBURI = process.env.MongoDBURI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://book-store-web-flame.vercel.app", // Allow requests from this origin
  })
);

// connect to mongoDB
try {
  await mongoose.connect(MongoDBURI, {});
  console.log("connected to mongodb");
} catch (err) {
  console.log(err);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log("server is running");
});
