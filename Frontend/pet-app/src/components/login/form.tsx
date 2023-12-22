"use client";
import { BtnRecuperar } from "./BtnRecuperar";
import { BtnRegistrar } from "./BtnRegistrar";
import { useState } from "react";
import { Nunito } from "next/font/google";
export const title = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(data: object) {
    const jsonString = JSON.stringify(data);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonString,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          className="bg-gray-100 w-full py-3 pl-4 pr-12 outline-none rounded-xl"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            const object = {
              email: email,
              password: password,
            };
            console.log(object);
            login(object);
          }}
          className="w-full bg-secundario2 text-grey py-3 px-4 rounded-xl mb-5 border-2 border-transparent hover:bg-transparent hover:border-secundario2 hover:text-black transition-colors duration-300 mt-3 "
        >
          Login
        </button>
      </form>
      <div className="flex flex-col items-end mt-4">
        <BtnRecuperar />
        <BtnRegistrar />
      </div>
    </div>
  );
};

export default Form;
