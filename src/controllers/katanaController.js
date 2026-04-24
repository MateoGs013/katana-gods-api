import Katana from "../models/katanaModel.js";

export async function getKatanas(req, res) {
  const katanas = await Katana.find().populate("god");
  res.json(katanas);
}

export async function getKatanaById(req, res) {
  const katana = await Katana.findById(req.params.id).populate("god");
  if (!katana) return res.status(404).json({ error: "Katana not found" });
  res.json(katana);
}

export async function createKatana(req, res) {
  const katana = await Katana.create(req.body);
  res.status(201).json(katana);
}

export async function updateKatana(req, res) {
  const katana = await Katana.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!katana) return res.status(404).json({ error: "Katana not found" });
  res.json(katana);
}

export async function deleteKatana(req, res) {
  const katana = await Katana.findByIdAndDelete(req.params.id);
  if (!katana) return res.status(404).json({ error: "Katana not found" });
  res.json({ message: "Katana deleted" });
}
