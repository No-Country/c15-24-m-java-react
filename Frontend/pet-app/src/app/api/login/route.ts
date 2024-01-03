import { NextResponse, NextRequest } from "next/server";
import { connectMongo } from "../../../db/connect";
import {User} from '../../../db/models/User'
import {comparePasswords} from '../../../backendUtils/password'
import { generateToken} from '../../../backendUtils/jwt'





export async function POST(request: NextRequest, res: NextResponse){
    await connectMongo();
    
    const body = await request.json();
    const { email, password } = body;

    const userFound = await User.findOne({email: email})
    const userPassword = userFound?.password ?? ""
    const compare = await comparePasswords(password, userPassword)

    if(!compare){
        return NextResponse.json({message: "invalid credentials"}, {status: 401})
    }

    const payload = JSON.stringify(userFound)
    const token = generateToken(payload)
    // Crear una nueva instancia de NextResponse con un mensaje de éxito
 let response = NextResponse.json({ message: 'Login successful' });

 // Agregar el token JWT al encabezado de la respuesta
 response.cookies.set('token', token);

 return response;

}



 

  