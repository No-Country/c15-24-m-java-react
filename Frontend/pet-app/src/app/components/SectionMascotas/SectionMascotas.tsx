
"use client"
import { useState } from 'react';

import notificacion from "../../../../public/images/btn-notificacion.png";
import arrow from "../../../../public/images/arrow-up.png";
import puntos from "../../../../public/images/tres-puntos.png";
import perro from "../../../../public/images/perro.jpg";
import arrowBelow from '../../../../public/images/arrow-below.png'
import Image from "next/image";

const SectionMascotas = () => {
 
 const [acordeonAbierto, setAcordeonAbierto] = useState<boolean>(false);


  const toggleAcordeon = (): void => {
    setAcordeonAbierto(!acordeonAbierto); 
  };




  return (
    <section>
      <div className="max-w-[1000px] mx-auto ">
        <h2>Mis Mascotas</h2>
      
        <div className={`caja bg-slate-400 grid grid-cols-3 p-3 ${acordeonAbierto ? 'overflow-y-scroll scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500' : ''}`}>
            
          <div className="imagen">
            <Image className="h-60  mx-auto block"
              src={perro}
            
              alt="imagen_perro"
            ></Image>
          </div>

        <div className="contenido p-3">
            <h2 className="font-bold ">Nombre de Mascota</h2>
            <h3 className="mt-2">Especie : </h3>
            <h3>Raza : </h3>
            <h3>Color : </h3>
            <h3>Edad : </h3>
        </div>

        <div className="flex justify-end ">
            <Image alt="Campana" className="w-6 h-6" src={notificacion}></Image>
            <Image alt="Flecha" onClick={toggleAcordeon} className="w-6 h-6" src={arrow}></Image>
            <Image alt="Tres_puntos"  className="w-6 h-6" src={puntos}></Image>
        </div>

       {acordeonAbierto && (
        <div className="flex items-center  ">
        <Image alt='flecha-abajo ' className='w-5 h-5' src={arrowBelow}></Image>
        <h3 className='mr-3 mt-2 '>Tarea</h3>
        <button className='bg-gray-700 text-white rounded flex px-4 items-center mt-2 ' >Agregar Tarea</button>
        </div>
       )}
        

    





        </div>
      </div>
    </section>
  );
};

export default SectionMascotas;
