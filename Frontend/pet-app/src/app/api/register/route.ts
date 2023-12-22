import { NextResponse, NextRequest } from "next/server";
import { connectMongo } from "../../../db/connect";
import {User} from '../../../db/models/User'
import { hashPassword} from '../../../backendUtils/password'


export async function POST(request: NextRequest): Promise<NextResponse> {
  await connectMongo();
  
  const body = await request.json();
  const { name, email, password } = body;
  
  
  if (!name || !email || !password) {
    return NextResponse.json({message: "missing data"})
  }
  
  const hash = await hashPassword(password)
  
  const newUser = new User({
    name: name, 
    email: email, 
    password: hash
  })
  
  await newUser.save()
  
  return NextResponse.json({message: "user created"}, { status: 201 });
}

