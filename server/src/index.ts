require("dotenv").config();

import express from "express";
import { createServer } from "http";

const PORT = process.env.PORT;
const app = express();
const http = createServer(app);

http.listen(PORT, () => {
  console.log(`App is listeining in port ${PORT}`);
});
