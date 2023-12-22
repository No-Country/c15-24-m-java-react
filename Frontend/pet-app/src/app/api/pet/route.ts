import { NextResponse, NextRequest } from "next/server";
import { connectMongo } from "../../../db/connect";
import { Pet } from "../../../db/models/Pet";
import { comparePasswords } from "../../../backendUtils/password";
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'


export async function POST(request: NextRequest) {
  await connectMongo();

  const body = await request.json();            
//   const cookieStore = cookies();
//   const token = cookieStore.get('token')?.value;
  
  const {
    nombre,
    raza,
    color,
    edad,
    genero,
    especie,
    castrado,
    alergias,
    tratamiento,
    dieta,
    foto,
    tareas,
    dueño
  } = body;

  const newPet = new Pet({
    nombre: nombre,
    raza: raza,
    color: color,
    edad: edad,
    genero: genero,
    especie: especie,
    castrado: castrado,
    alergias: alergias,
    tratamiento: tratamiento,
    dieta: dieta,
    foto: foto,
    tareas: tareas,
    dueño: dueño
  });


  await newPet.save();

  return NextResponse.json({message: "pet created"})

}

export async function GET(){
    const petsFound = await Pet.find();
    return NextResponse.json(petsFound)
}