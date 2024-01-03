"use client";
import { redirect } from "next/navigation";
import { BtnRecuperar } from "./BtnRecuperar";
import { BtnRegistrar } from "./BtnRegistrar";
import { useState } from "react";
import { Nunito } from "next/font/google";

import FormularioLogin from "./FormularioLogin";
import { useRouter } from "next/navigation";

export const title = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Form = () => {
  const router = useRouter();

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

      .then((data) => {
        console.log(data);
        if (data.message === "Login successful") {
          router.push("/calendario");
        } else {
          router.push("/login");
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  return <FormularioLogin login={login} />;
};

export default Form;
