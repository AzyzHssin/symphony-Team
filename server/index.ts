import express from "express"
import { json } from "body-parser";
import mongoose from "mongoose";
// import cors from "cors";
import cors from "cors";

const app = express()
const Port= 2000 

import { userRouter } from "./Controllers/user";
app.use(userRouter);

app.use(cors());
app.use(json());
mongoose.connect("mongodb://localhost:27017/symphony-p", () => {
  console.log("Connected to database...");
});

app.listen(Port, () => {
  console.log("server connected successfully on port " + Port);
});
