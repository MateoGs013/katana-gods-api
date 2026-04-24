import mongoose from "mongoose";

const katanaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    forger: { type: String },
    origin: { type: String },
    forgedYear: { type: Number },
    element: { type: String },
    broken: { type: Boolean, default: false },
    god: { type: mongoose.Schema.Types.ObjectId, ref: "gods" },
  },
  { timestamps: true }
);

export default mongoose.model("katanas", katanaSchema);
