import { NextResponse, NextRequest } from "next/server";
import { connectMongo } from "../../../db/connect";
import {User} from '../../../db/models/User'
import {comparePasswords} from '../../../backendUtils/password'



export async function POST(request: NextRequest){
    await connectMongo();
    
    const body = await request.json();
    const { email, password } = body;

    const userFound = await User.findOne({email: email})
    const userPassword = userFound?.password ?? ""
    const compare = await comparePasswords(password, userPassword)

    if(!compare){
        return NextResponse.json({message: "invalid credentials"}, {status: 401})
    }

    return NextResponse.json({message: "pass"})
}
  