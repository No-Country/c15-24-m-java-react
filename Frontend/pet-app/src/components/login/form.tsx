"use client";
import { BtnRecuperar } from "./BtnRecuperar";
import { BtnRegistrar } from "./BtnRegistrar";
import { useState } from "react";
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
        <h2 className="text-secundario3 text-xl">Ingrese sus datos</h2>
      </div>
      <form className="w-full">
        <input
          type="email"
          className="bg-gray-100 w-full py-3 pl-4 pr-12 outline-none rounded-xl mb-5"
          placeholder="Email"
        />
        <input
          type="password"
          className="bg-gray-100 w-full py-3 pl-4 pr-12 outline-none rounded-xl"
          placeholder="Password"
        />
        <button className="w-full bg-secundario2 text-grey py-3 px-4 rounded-xl mb-5 border-2 border-transparent hover:bg-transparent hover:border-secundario2 hover:text-black transition-colors duration-300 mt-3 ">
          Login
        </button>

        {/* <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" /> */}
        {/* <Button type="submit" label="Login" /> */}
      </form>
      <div className="flex flex-col items-end mt-4">
        <BtnRecuperar />
        <BtnRegistrar />
      </div>
    </div>
  );
};

export default Form;
