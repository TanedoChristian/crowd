import mongoose, { Connection } from "mongoose";

const mongoUrl = "mongodb://localhost:27017/crowd";

async function connecToMongo() {
  try {
    const connection = await mongoose.connect(mongoUrl);
    console.log(`Connected to database`);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}
