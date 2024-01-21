import express from "express";
import mongoose from "mongoose";



import dotenv from "dotenv";

import cors from "cors"; 
import bodyParser from "body-parser";

import userRouter from "./routes/user.route.js"

import path from 'path';

const __dirname = path.resolve();

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

app.use(express.static('public'));

app.use('/api/user', userRouter);

// app.use(express.static(path.join(__dirname, '/client/dist')));
// // console.log(__dirname + '/client/dist', "DIRECTORY PARTH");

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })



app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const PORT = process.env.PORT || 3000;

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
