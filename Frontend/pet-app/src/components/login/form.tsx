import Input from "@/components/login/input";
import { BtnRecuperar } from "./BtnRecuperar";
import { BtnRegistrar } from "./BtnRegistrar";
import Button from "./button";
import { Nunito } from "next/font/google";
import Image from "next/image";

export const title = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Form = () => {
  return (
      <div className="w-full max-w-md">
        <div className="mb-5 text-center">
          <h2 className="text-secundario3 text-xl">
            Ingrese sus datos
          </h2>
        </div>
        <form className="w-full">
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type='submit' label='Login'  />
        </form>
        <div className="flex flex-col items-end mt-4">
          <BtnRecuperar /> 
          <BtnRegistrar />
        </div>
      </div>   
  );
};

export default Form;
