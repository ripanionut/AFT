import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    Id: { type: String, required: false },
    nume: { type: String, required: true },
    prenume: { type: String, required: true },
    pluton: { type: String, required: true },
    companie: { type: String, required: true },
    batalion: { type: String, required: true },
    telefon: { type: Number, required: true },
    istoric: { type: String, required: false },
    puncte: { type: String, required: false },
    punctearr: { type: Array, required: false,default:[{ date: '1', motiv: '1', puncte: '1' }] },
  
  },
  {
    timestamps: true,
  }
);
let Post =
  mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
