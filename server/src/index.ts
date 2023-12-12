require("dotenv").config();

import express from "express";
import { createServer } from "http";
import connectMongo from "./database/mongoDbConnect";
import cors from "cors";
import router from "./routes/router";

connectMongo();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const http = createServer(app);

http.listen(PORT, () => {
  console.log(`App is listeining in port ${PORT}`);
});
