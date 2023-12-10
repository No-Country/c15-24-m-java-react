import {FC} from 'react';
import { IconType } from "react-icons";

interface ButtonIconProps{
    icon:IconType;
}

const ButtonIcon: FC<ButtonIconProps> =({icon: Icon})=>{
   return (
   <button type='button'className='w-full bg-secondary text-white py-3 px-4 rounded-xl mb-5 boder-2 border-transparent hover:bg-transparent hover:border-secondary hover:text-secondary transition-colors duration-300'>
    <Icon/>
   </button>
   ); 
};

export default ButtonIcon