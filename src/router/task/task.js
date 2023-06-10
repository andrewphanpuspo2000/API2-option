import express from "express";

const router = express.Router();

let fakeDB = [
  {
    _id: "1",
    type: "bad",
    task: "Complete project report",
    hour: "9:00 AM",
  },
  {
    _id: "2",
    type: "entry",
    task: "Attend team meeting",
    hour: "2:30 PM",
  },
];
// router.all("/", (req, res) => {
//   console.log("first");
// });
router.get("/", (req, res) => {
  res.json({ status: "success get", fakeDB: fakeDB });
});
router.post("/", (req, res) => {
  fakeDB.push(req.body);
  res.json({ status: "success post" });
});
router.patch("/", (req, res) => {
  const { _id, type } = req.body;
  fakeDB.map((item, i) => {
    if (item._id === _id) return { ...item, type };
    return item;
  });
  res.json({ status: "success patch" });
});

router.delete("/sip", (req, res) => {
  fakeDB = fakeDB.filter((item, i) => item._id !== req.body._id);
  res.json({ status: "success delete" });
});

export default router;
