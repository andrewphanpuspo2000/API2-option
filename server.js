import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = 8000;
console.log("test");
//connect mongodb
import { mongoConnect } from "./src/router/task/config/mongoDb.js";
mongoConnect();
//api Endpoint
import taskrouter from "./src/router/task/task.js";
app.use(express.json());
app.use("/api/v1/task", taskrouter);
//open port
app.listen(port, (error) => {
  error
    ? console.log(error.message)
    : console.log(`server run in port http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "server is running properly in port 8000" });
});

app.post("/:id/:name", (req, res) => {
  const result = req.params;
  res.json({
    id: result.id,
    name: result.name,
  });
});
