import { Document, Schema, model } from "mongoose";

interface ICons extends Document {
  name: string;
  description: string;
  img: string;
}

const ConsSchema = new Schema<ICons>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
export const ConservatoryModel = model<ICons>("cons", ConsSchema);
