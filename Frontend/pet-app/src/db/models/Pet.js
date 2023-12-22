import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  nombre: String,
  raza: String,
  color: String,
  edad: Number,
  genero: String,
  especie: String,
  castrado: Boolean,
  alergias: String,
  tratamiento: String,
  dieta: String,
  foto: String,
  tareas: Array,
  dueño: String,
});

export const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);
