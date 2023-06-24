import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.port || 8000;
console.log("test");

const ___dirname = path.resolve();
//connect mongodb
import { mongoConnect } from "./src/router/task/config/mongoDb.js";
//api Endpoint
import taskrouter from "./src/router/task/task.js";
app.use(express.json());
app.use("/api/v1/task", taskrouter);
app.use(express.static(___dirname + "/build"));

app.use("/", (req, res) => {
  res.sendFile(___dirname + "/index.html");
});
//open port
mongoConnect().then(() => {
  app.listen(port, (error) => {
    error
      ? console.log(error.message)
      : console.log(`server run in port http://localhost:${port}`);
  });
});

app.get("/", (req, res) => {
  res.json({ message: "server is running properly in port 8000" });
});

// app.post("/:id/:name", (req, res) => {
//   const result = req.params;
//   res.json({
//     id: result.id,
//     name: result.name,
//   });
// });
