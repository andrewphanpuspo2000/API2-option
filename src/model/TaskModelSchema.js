import mongoose from "mongoose";
// create the meta data of table
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default: "entry",
  },
});
//creating table
export default mongoose.model("Task", taskSchema);
