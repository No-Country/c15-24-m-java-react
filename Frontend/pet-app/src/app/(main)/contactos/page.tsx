import { Cuidadores } from "@/components/contactos/Cuidadores";
import { Familia } from "@/components/contactos/Familia";
import { Veterinarios } from "@/components/contactos/Veterinarios";
import { familia, veterinarios } from "@/components/contactos/data/data";
import { cuidadores } from "@/components/contactos/data/data";
import { OpenMod } from "@/components/contactos/OpenMod";
import { NuevoGasto } from "@/components/NuevoGasto/NuevoGasto";

export const metadata = {
  title: "Agenda de contactos",
  description: "Esta página es una agenda de contactos",
};

export default function ContactPage() {
  return (
    <div className="container w-10/12 mx-auto mt-20 flex flex-col mb-20">
      <h1 className="text-5xl">Contactos</h1>

      <div className="mt-10 lg:grid grid-cols-2 gap-8">
        <div>
          <Veterinarios data={veterinarios} />
          <Cuidadores data={cuidadores} />
        </div>
        <Familia data={familia} />

        
      </div>
      <NuevoGasto />
    </div>
  );
}
