import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import katanaRoutes from "./routes/katanaRoutes.js";
import godRoutes from "./routes/godRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Katana Gods API" });
});

app.use("/api/katanas", katanaRoutes);
app.use("/api/gods", godRoutes);

await connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
