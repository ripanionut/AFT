import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nume: { type: String, required: true },
    prenume: { type: String, required: true },
    email: { type: String, required: true },
    telefon : { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const User =
  mongoose.models.User || mongoose.model("User", userSchema);
export default User;
