import {FC} from 'react'

interface ButtonProps{
    type: 'button' | 'submit';
    label: string;
}

const Button: FC<ButtonProps> =({type, label}) =>{
    return <button type={type} className='w-full bg-secondary text-white py-3 px-4 rounded-xl mb-5 boder-2 border-transparent hover:bg-transparent hover:border-secondary hover:text-secondary transition-colors duration-300'>{label}</button>;
};

export default Button;