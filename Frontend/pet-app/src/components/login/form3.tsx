import Input from "@/components/login/input";
import { Nunito } from "next/font/google"

export const title = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Form3 = () => {
  return (
    <div className="w-full max-w-md">
      <div className="mb-5">
        <h2 className="text-gray-500 text-lg text-center">
          Complete sus datos
        </h2>
      </div>
      <form className="w-full">
        <Input type="text" placeholder="Nombre" />
        <Input type="password" placeholder="Password" />
        <Input type="text" placeholder="Telefono" />
        <Input type="email" placeholder="Email" />
        <div className="flex justify-end ">
          <button type="button" className="w-full bg-secundario2 text-grey py-3 px-4 rounded-xl mb-5 border-2 border-transparent hover:bg-transparent hover:border-secundario2 transition-colors duration-300">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
