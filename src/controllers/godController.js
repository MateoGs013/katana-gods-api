import God from "../models/godModel.js";

export async function getGods(req, res) {
  const gods = await God.find().populate("katana");
  res.json(gods);
}

export async function getGodById(req, res) {
  const god = await God.findById(req.params.id).populate("katana");
  if (!god) return res.status(404).json({ error: "God not found" });
  res.json(god);
}

export async function createGod(req, res) {
  const god = await God.create(req.body);
  res.status(201).json(god);
}

export async function updateGod(req, res) {
  const god = await God.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!god) return res.status(404).json({ error: "God not found" });
  res.json(god);
}

export async function deleteGod(req, res) {
  const god = await God.findByIdAndDelete(req.params.id);
  if (!god) return res.status(404).json({ error: "God not found" });
  res.json({ message: "God deleted" });
}
