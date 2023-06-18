import express from "express";
import {
  createTask,
  deleteManyId,
  readTasks,
  switchTask,
} from "../../model/Taskmodel.js";

const router = express.Router();

// router.all("/", (req, res) => {
//   console.log("first");
// });
router.get("/", async (req, res) => {
  // get data from db
  try {
    const taskList = await readTasks();

    console.log(taskList);
    res.json({ status: "success", taskList: taskList });
  } catch (error) {
    console.log(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    const result = await createTask(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "success to post",
        })
      : res.json({
          status: "failed",
          message: "unable to add data",
        });
  } catch (error) {
    console.log(error);
  }
});
router.patch("/", async (req, res) => {
  const { _id, type } = req.body;
  const result = await switchTask(_id, type);
  console.log(req.body);
  console.log(result);
  res.json({ status: "success", message: "data has been updated" });
});

router.delete("/", async (req, res) => {
  try {
    const result = await deleteManyId(req.body);
    console.log(req.body);
    res.json({ status: "success", message: "id have been deleted" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
