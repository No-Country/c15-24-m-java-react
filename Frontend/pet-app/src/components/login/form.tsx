"use client";
import { BtnRecuperar } from "./BtnRecuperar";
import { BtnRegistrar } from "./BtnRegistrar";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(object: object) {
    fetch("https://pet-notes-api.onrender.com/auth/login", {
      method: "POST",
      body: JSON.stringify(object),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-5">
        <h2 className="text-gray-500 font-semibold text- justify-center">
          Por favor, ingrese su mail y contraseña
        </h2>
      </div>
      <form className="w-full">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="bg-gray-100 w-full py-3 pl-4 pr-12 outline-none rounded-xl mb-5"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className="bg-gray-100 w-full py-3 pl-4 pr-12 outline-none rounded-xl mb-4"
          placeholder="Password"
          value={password}
        />
        <div className="flex flex-col items-end ">
          <BtnRecuperar />
          <BtnRegistrar />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            const object = {
              username: email,
              password: password,
            };
            console.log("🚀 ~ file: form.tsx:59 ~ Form ~ object:", object);

            login(object);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
