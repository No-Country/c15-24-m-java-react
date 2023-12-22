import jwt from 'jsonwebtoken';

export function generateToken(payload: string) {
  const secretKey = process.env.SECRET_KEY_JWT! ; // Debes reemplazar esto con tu propia clave secreta
 
  return jwt.sign(payload, secretKey);
}
