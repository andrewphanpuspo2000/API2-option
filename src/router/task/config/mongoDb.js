import mongoose from "mongoose";
//connect to mongo db
export const mongoConnect = async () => {
  try {
    const db =
      process.env.NODE_ENV !== "production"
        ? "mongodb://localhost:27017/nottododb"
        : process.env.MONGO_CLIENT;

    const con = await mongoose.connect(db);

    console.log(con);
  } catch (e) {
    throw new Error(error.message);
  }
};
