import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';

export function generateToken(payload: string) {
  const secretKey = process.env.SECRET_KEY_JWT! ; // Debes reemplazar esto con tu propia clave secreta
 
  return jwt.sign(payload, secretKey);
}




interface MyApiRequest extends NextApiRequest {
 authData?: any;
}

interface MyApiResponse extends NextApiResponse {}

function verifyToken(req: MyApiRequest, res: MyApiResponse, next: Function) {
 const cookieStore = cookies();
 const token = cookieStore.get('token')?.value;

 if (typeof token !== 'undefined') {
 jwt.verify(token, "alksjdflkasdfjla090909as8fd09a8sj209wiuf029joiij", (err, authData) => {
   if (err) {
     res.status(403).json({ message: 'Forbidden' });
   } else {
     req.authData = authData;
     return true
   }
 });
 } else {
 res.status(403).json({ message: 'Forbidden' });
 }
}

export default verifyToken;