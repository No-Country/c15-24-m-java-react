import { Familia } from "@/components/contactos/Familia";
import { Veterinarios } from "@/components/contactos/Veterinarios";
import { familia, veterinarios } from '@/components/contactos/data/data'

export default function ContactPage() {
  return (
    <div className="container w-10/12 mx-auto mt-20 flex flex-col h-screen">
      <h1 className="text-5xl">Contactos</h1>

      <div className="mt-10 lg:grid grid-cols-2 gap-8">
        <Veterinarios data={veterinarios} />
        <Familia data={familia}/>

      </div>
    </div>
  );
}