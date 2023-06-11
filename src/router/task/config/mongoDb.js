import mongoose from "mongoose";
//connect to mongo db
export const mongoConnect = async () => {
  try {
    const con = await mongoose.connect("mongodb://127.0.0.1:27017/nottododb");

    console.log(con);
  } catch (e) {
    console.log(e);
  }
};
