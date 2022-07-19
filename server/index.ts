import express from "express"
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import cors from "cors";

const app = express()
app.use(cors());
app.use(json());
const Port= 2000 



//conservatory
import { ConservatoryRouter } from "./Router/conservatoryRouter";

app.use(ConservatoryRouter);


mongoose.connect("mongodb://localhost:27017/symphony-p", () => {
  console.log("Connected to database...");
});

app.listen(Port, () => {
  console.log("server connected successfully on port " + Port);
});
