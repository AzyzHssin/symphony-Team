import express, { Request, Response } from "express";
import { ConservatoryModel } from "../dataBase/conservatory";
import mongoose from "mongoose";

const router=express.Router();


//get
router.get("/cons",async(req: Request, res: Response) => {
    const cons = await ConservatoryModel.find({});
    return res.status(200).send(cons);
  });





  export { router as ConservatoryRouter };
