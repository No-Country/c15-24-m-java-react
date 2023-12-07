import {FC} from 'react'

interface ButtonProps{
    type: 'button' | 'submit';
    label: string;
}

const Button: FC<ButtonProps> =({type, label}) =>{
    return <button type={type}>{label}</button>;
};

export default Button;