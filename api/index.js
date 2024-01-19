import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

import cors from "cors"; 
import bodyParser from "body-parser";

import userRouter from "./routes/user.route.js"


mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.static('client'));

app.use('/api/user', userRouter);


app.listen(3000, () => {
  console.log("Server is runnung on port 3000");
});

