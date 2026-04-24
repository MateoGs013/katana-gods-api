import mongoose from "mongoose";

const godSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    title: { type: String },
    domain: { type: String, required: true },
    power: { type: Number, min: 0, max: 100, default: 50 },
    description: { type: String },
    sealed: { type: Boolean, default: true },
    katana: { type: mongoose.Schema.Types.ObjectId, ref: "katanas" },
  },
  { timestamps: true }
);

export default mongoose.model("gods", godSchema);
