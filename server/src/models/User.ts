import { Schema, model } from "mongoose";
import IUser from "../interfaces/IUser";

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  lastname: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  address: String,
});

const User = model<IUser>("User", userSchema);

export default User;
