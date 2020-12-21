import express from "express";
import path from "path";
import cors from "cors";
import { dirname } from "./helpers.js";
import dotenv from "dotenv";
import connectDB from "./Services/connectAtlas.js";
import Platform from "./Models/Platform.js";
import multer from "multer";

//---------------running the database-----------------
connectDB();

//-------------running the server-----------------
const server = express();
dotenv.config();
server.use(express.json());
server.use(cors());
const __dirname = dirname(import.meta.url);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`server is open at: http://localhost:${port}`);
});

server.use(express.static(path.join(__dirname, "../client/build")));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

//-----------ROUTES-------------
server.get("/api", (req, res) => {
  res.json({
    status: "Welcome",
  });
});

server.get("/platforms", (req, res) => {
  Platform.find()
    .then((platforms) => res.json(platforms))
    .catch((error) => console.log(error));
});

server.post("/platforms", (req, res) => {
  const newPlatform = req.body;
  Platform.create(newPlatform)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
});
