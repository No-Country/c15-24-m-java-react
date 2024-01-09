"use client";
import { useState } from "react";
import { BtnRecuperar } from "./BtnRecuperar";
import { BtnRegistrar } from "./BtnRegistrar";
import Link from "next/link";

interface PropsLogin {
  login: any;
}

const FormularioLogin: React.FC<PropsLogin> = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="w-full max-w-md">
        <div className="mb-5 text-center">
          <h2 className="text-secundario3 text-xl">Ingrese sus datos</h2>
        </div>
        <form className="w-full">
          <input
            type="email"
            className="bg-gray-100 w-full py-3 pl-4 pr-12 outline-none rounded-xl mb-5"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            type="password"
            className="bg-gray-100 w-full py-3 pl-4 pr-12 outline-none rounded-xl"
            placeholder="Contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <Link href="/calendario">
            <button
              // onClick={(e) => {
              //   e.preventDefault();
              //   const object = {
              //     email: email,
              //     password: password,
              //   };
              //   console.log(object);

              //   login(object);
              // }}

              className="w-full bg-secundario2 text-grey py-3 px-4 rounded-xl mb-5 border-2 border-transparent hover:bg-transparent hover:border-secundario2 hover:text-black transition-colors duration-300 mt-3 "
            >
              Login
            </button>
          </Link>
        </form>
        <div className="flex flex-col items-end mt-4">
          <BtnRecuperar />
          <BtnRegistrar />
        </div>
      </div>
    </div>
  );
};

export default FormularioLogin;
