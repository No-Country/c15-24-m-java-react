"use client";
import { useState } from "react";

import notificacion from "../../../public/images/Notification.svg";
import arrow from "../../../public/images/Expand.svg";
import puntos from "../../../public/images/tresPuntos.svg";
import pet from "../../../public/images/petPicture.png";
import arrowBelow from "../../../public/images/arrow-below.png";
import { Nunito } from "next/font/google";
import Image from "next/image";
import styles from "./SectionMascotas.module.css";
import addTasks from "../../../public/images/addTasks.svg";
import CardContact from "../NuevoGasto/CardContact/CardContact";


// fonts
const nunito = Nunito({
  subsets: ["latin"],
});

export const SectionMascotas = () => {
 

  const [acordeonAbierto, setAcordeonAbierto] = useState<boolean>(false);

  const toggleAcordeon = (): void => {
    setAcordeonAbierto(!acordeonAbierto);
  };

  return (
    <section className="p-20">
      <div className="max-w-[700px]  mx-auto ">
        <h2 className={`${styles.titulo_mascotas}`}>Mis Mascotas</h2>

        {/* Card*/}
        <div
  className={`caja bg-white mb-5 px-5 ${styles.bgShadow} shadow-2xl p-3 rounded-3xl ${
    acordeonAbierto
      ? 'grid grid-cols-1' // Cuando el acordeón está abierto, cambia a una sola columna
      : 'grid grid-cols-3' // Cuando está cerrado, utiliza tres columnas
  } ${
    acordeonAbierto
      ? 'overflow-y-scroll scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500'
      : ''
  }`}
>
          <div className="imagen">
            <Image
              className="h-60  mx-auto block"
              src={pet}
              alt="imagen_perro"
            ></Image>
          </div>

          <div className={`${styles.contenidoMascota}`} >
            {/* titulo*/}
            <h2 className={`${styles.textoOscuro} px-3`}>Manchitas</h2>

            {/* categorias */}

            <div className={`${styles.contenedorCategorias} p-3 `}>
              <div className="mb-2">
                <h3 className={`${styles.categoryOscuro}`}>Especie </h3>
                <h4 className={`${styles.resultsData}`}>Gato</h4>
              </div>

              <div className="mb-2">
                <h3 className={`${styles.categoryOscuro}`}>Color </h3>
                <h4 className={`${styles.resultsData}`}>Negro y blanco</h4>
              </div>
              <div className="mb-2">
                <h3 className={`${styles.categoryOscuro}`}>Sexo </h3>
                <h4 className={`${styles.resultsData}`}>Macho</h4>
              </div>

              <div className="mb-2">
                <h3 className={`${styles.categoryOscuro}`}>Edad </h3>
                <h4 className={`${styles.resultsData}`}>3 años</h4>
              </div>
              <div className="mb-2">
                <h3 className={`${styles.categoryOscuro}`}>Raza </h3>
                <h4 className={`${styles.resultsData}`}>Comun Europeo</h4>
              </div>
              <div className="mb-2">
                <h3 className={`${styles.categoryOscuro}`}>Esterilizado </h3>
                <h4 className={`${styles.resultsData}`}> Si </h4>
              </div>
            </div>
          </div>

          <div className={`${styles.contenedorCfg}`} >
            <Image
              alt="Campana"
              className="w-6 h-6 cursor-pointer"
              src={notificacion}
            ></Image>
            <Image
              alt="Flecha"
              onClick={toggleAcordeon}
              className="w-6 h-6 cursor-pointer"
              src={arrow}
            ></Image>
            <Image
              alt="Tres_puntos"
              className="w-6 cursor-pointer h-6"
              src={puntos}
            ></Image>
          </div>

          {acordeonAbierto && (
            <>
            
              <div className="flex items-center flex-col w-full  ">
                <div className="flex items-center  w-full ">
                  <h3 className={`${styles.titleTarea}`} >Tarea</h3>
                  <Image
                    alt="flecha-abajo "
                    className="w-5 h-5 ml-2 cursor-pointer "
                    src={arrowBelow}
                  ></Image>

                  <Image alt="añadir_tareas" className="ml-1 cursor-pointer" src={addTasks}></Image>
                </div>
                <div className={`${styles.contenedorMascota} `}>
                  <h3 className={`${styles.titularLabel} `}>Salud</h3>

                  <div className="pl-20">
                    <h4 className={`${styles.titleData}`} >Esterilizado</h4>
                    <h5>Si</h5>
                  </div>

                  <div className="pl-20">
                    <h4 className={`${styles.titleData}`}>Alergias</h4>
                    <h5>Si</h5>
                  </div>

                  <div className="pl-20">
                    <h4 className={`${styles.titleData}`}>Tratamientos</h4>
                    <h5>Ninguno</h5>
                  </div>

                  <h3 className={`${styles.titularLabel}`}>Alimentacion</h3>
                  <textarea className={`${styles.textarea} w-full`} name="" id=""></textarea>

                  <h3 className={`${styles.titularLabel}`}>Contactos</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                  {/* CARD CONTACT */}
                  <CardContact />

                  {/* CARD CONTACT */}

                  <CardContact />
                </div>
                



                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
