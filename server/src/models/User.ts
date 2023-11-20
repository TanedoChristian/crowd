import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  age: Number,
  username: String,
  phoneNumber: String,
});

const User = new mongoose.Model("User", userSchema);
