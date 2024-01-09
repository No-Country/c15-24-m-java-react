import React from "react";
import { SectionMascotas } from "@/components/SectionMascotas/SectionMascotas";
import { NuevoGasto } from "@/components/NuevoGasto/NuevoGasto";
import { Navbar } from "@/components/navbar/navbar";

export default function Mascotas() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <SectionMascotas />
        <NuevoGasto />
      </div>
    </>
  );
}
