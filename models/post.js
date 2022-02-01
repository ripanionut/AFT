import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    enteredH1: { type: String, required: false },
    enteredH2: { type: String, required: false },
    enteredH3: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
const Post =
  mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
