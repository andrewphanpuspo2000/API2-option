import express from "express";

const app = express();

const port = 8000;

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
  res.json({ message: "server is running properly" });
});
