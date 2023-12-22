import { connect } from "mongoose";

export async function connectMongo() {
  await connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
}
