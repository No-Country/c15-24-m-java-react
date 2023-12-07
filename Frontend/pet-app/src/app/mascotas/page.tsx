import React from "react";
import { SectionMascotas } from "../../components/SectionMascotas/SectionMascotas";
import { NuevoGasto } from "@/components/NuevoGasto/NuevoGasto";

export default function Mascotas() {
  return (
    <div>
      <SectionMascotas />
      <NuevoGasto />
    </div>
  );
}
