import { Document, Schema, model } from "mongoose";
interface user extends Document{
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<user>({
    username: {
      type: String,
      required: true
    },
    email :{
        type: String,
        required: true
      },
      password:{
        type: String,
        required: true
      }
    

  });
  export const userModel = model<user>("receipes", userSchema);
  export {user}

