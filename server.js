import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(cors());
const port = process.env.port || 8000;

console.log("test");

const __dirname = path.resolve();
//connect mongodb

//api Endpoint
import taskrouter from "./src/router/task/task.js";
app.use(express.json());
app.use("/api/v1/task", taskrouter);
app.use(express.static(__dirname + "/build"));

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/", (req, res) => {
  res.json({ message: "server is running properly in port 8000" });
});

//open port
const db =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_CLIENT
    : "mongodb://localhost:27017/nottododb";

mongoose
  .connect(process.env.MONGO_CLIENT)
  .then(() => {
    console.log("Connected to mongo");
    app.listen(port, (error) => {
      console.log("Connected to port");
      error
        ? console.log(error.message)
        : console.log(`server run in port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
// app.post("/:id/:name", (req, res) => {
//   const result = req.params;
//   res.json({
//     id: result.id,
//     name: result.name,
//   });
// });
