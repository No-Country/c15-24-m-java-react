import Input from "@/components/login/input";
import { BtnRecuperar } from "./BtnRecuperar";
import { BtnRegistrar } from "./BtnRegistrar";
import Button from "./button";


const Form = () => {

  

  return (
    <div className="w-full max-w-md">
      <div className="mb-5">
        <h2 className="text-gray-500 font-semibold text- justify-center">
          Por favor, ingrese su mail y contraseña
        </h2>
      </div>
      <form className="w-full">
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div className="flex flex-col items-end ">
          <BtnRecuperar /> 
          <BtnRegistrar />
        </div>
        <Button type='submit' label='Login' />
      </form>
    </div>
  );
};

export default Form;
