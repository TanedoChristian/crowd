require("dotenv").config();

import mongoose from "mongoose";
export default async function connectMongo() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/crowd")
    .then(() => {
      console.log(`Connected to mongo`);
    })
    .catch((err) => {
      console.log(err);
    });
}
