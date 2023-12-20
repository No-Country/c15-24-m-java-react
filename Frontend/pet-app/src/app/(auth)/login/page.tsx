import Form from "@/components/login/form";
import { BtnRecuperar } from "../../../components/login/BtnRecuperar";
import { BtnRegistrar } from "../../../components/login/BtnRegistrar";



export default function LoginPage() {
  return (
    <>
      <section className="h-full flex flex-col  items-center justify-center bg-primary">
        <div className="pb-6">
          <h2 className="text-secundario2 text-xl ">Ingrese sus datos</h2>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Form />
        </div> 
        <div className="flex flex-col items-end ">
          <BtnRecuperar /> 
          <BtnRegistrar />
        </div>     
      </section>
    </>
    
  );
}