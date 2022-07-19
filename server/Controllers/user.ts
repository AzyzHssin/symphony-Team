import express, { Request, Response } from "express";
import { userModel } from "../database/users";
import mongoose from "mongoose";

// const client = new MongoClient("mongodb://localhost:27017/betterB");
// const database = client.db("insertDB");

const router = express.Router();

//get
router.get("/user", async (req: Request, res: Response) => {
  const Allusers = await userModel.find({});
  return res.status(200).send(Allusers);
});

//post
router.post("/user", async (req: Request, res: Response) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newuser = new userModel({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    email:email,
    password: password,
  });

  newuser.save().then((result) => {
     
      res.json("saved");
    }).catch((error) => {
      console.log(error);
      res.json(error);
    });
});

//delete
router.delete("/user", (req: Request, res: Response) => {
  const id = req.body._id;
  userModel.findByIdAndDelete(id)
    .then((result) => {
      
      res.json(result);
      console.log("deleted");
    })
    .catch((error) => {
      console.log(error);
    });
});

//update
router.put("/user", (req: Request, res: Response) => {
  const id = req.body._id;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  userModel.updateOne(
    { _id: id },
    {
      $set: {
        username: username,
        email: email,
        password: password,
      },
    }
  )
    .then((result) => {
      res.send(result);
      console.log("user updated");
    })
    .catch((error) => {
      console.log(error);
    });
});

export { router as userRouter };
