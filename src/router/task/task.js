import express from "express";
import {
  createTask,
  deleteById,
  readTasks,
  switchTask,
} from "../../model/Taskmodel.js";

const router = express.Router();

// router.all("/", (req, res) => {
//   console.log("first");
// });
router.get("/", async (req, res) => {
  // get data from db
  const taskList = await readTasks();

  console.log(taskList);
  res.json({ status: "success", taskList: taskList });
});
router.post("/", async (req, res) => {
  try {
    const result = await createTask(req.body);
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
  res.json({ status: "success patch", db: result });
});

router.delete("/:_id?", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await deleteById(_id);
    console.log(req.params);
    res.json({ status: "success delete", db: result });
  } catch (error) {
    console.log(error);
  }
});

export default router;
