import {FC} from 'react'

interface ButtonProps{
    type: 'button' | 'submit';
    label: string;
}

const Button: FC<ButtonProps> =({type, label}) =>{
    return <button type={type} className='w-full bg-secundario2 text-grey py-3 px-4 rounded-xl mb-5 border-2 border-transparent hover:bg-transparent hover:border-secundario2 hover:text-black transition-colors duration-300'>{label}</button>;
};
 
export default Button;