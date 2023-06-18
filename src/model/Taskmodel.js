import TaskModelSchema from "./TaskModelSchema.js";
// Create data in db
export const createTask = (taskObj) => {
  return TaskModelSchema(taskObj).save();
};

export const readTasks = () => {
  return TaskModelSchema.find();
};
//id is a string
export const switchTask = (_id, type) => {
  return TaskModelSchema.findByIdAndUpdate(_id, { type });
};

export const deleteManyId = (ids) => {
  return TaskModelSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
