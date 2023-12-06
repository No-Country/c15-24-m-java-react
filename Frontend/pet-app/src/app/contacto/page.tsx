'use client'

import { Cuidadores } from "@/components/contactos/Cuidadores";
import { Familia } from "@/components/contactos/Familia";
import { Veterinarios } from "@/components/contactos/Veterinarios";
import { familia, veterinarios } from '@/components/contactos/data/data'
import { cuidadores } from '../../components/contactos/data/data';
import Modal from '@/components/contactos/Modal'
import FormUser from '@/components/contactos/FormUser'
import { useState } from "react";

export default function ContactPage() {

  const [ isModalOpen, setIsModalOpen ] = useState<Boolean>(false); 

  return (
    <div className="container w-10/12 mx-auto mt-20 flex flex-col mb-20">
      <h1 className="text-5xl">Contactos</h1>

      <div className="mt-10 lg:grid grid-cols-2 gap-8">
        <div>
          <Veterinarios data={veterinarios} />
          <Cuidadores data={cuidadores} />
        </div>
        <Familia data={familia}/>

        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        > 
            <FormUser />
        </Modal>

        <button 
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full absolute top-5 right-5 text-5xl flex items-center justify-center -z-50"

        >
          + 
        </button>

      </div>
    </div>
  );
}