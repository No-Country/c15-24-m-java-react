import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  breed: String,
  color: String,
  age: Number,
  gender: String,
  species: String,
  neutered: Boolean,
  allergies: String,
  treatment: String,
  diet: String,
  photo: String,
});

export const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);
