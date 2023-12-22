import bcrypt from 'bcrypt';

const saltRounds = 10; // Puedes ajustar este valor según tus necesidades

export async function hashPassword(password: string) {
 const salt = await bcrypt.genSalt(saltRounds);
 const hash = await bcrypt.hash(password, salt);
 return hash;
}


export async function comparePasswords(password:string, hashedPassword:string) {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
   }
   