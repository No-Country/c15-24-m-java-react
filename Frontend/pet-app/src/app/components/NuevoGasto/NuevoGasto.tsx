"use client";
import { useState } from "react";
import Image from "next/image";
import cerrar from "../../../../public/images/cerrar.png";
import agregar from "../../../../public/images/boton agregar.svg";
import styles from "./NuevoGasto.module.css";

const NuevoGasto = () => {
  const [addGasto, setAddgasto] = useState<boolean>(false);
  const toggleForm = (): void => {
    setAddgasto(!addGasto);
  };
  return (
    <div>
      <div className="btn fixed bottom-10 right-8 cursor-pointer z-20">
        <Image
          onClick={toggleForm}
          className="h-20 w-20  "
          alt="boton_agregar"
          src={agregar}
        ></Image>
      </div>

      {addGasto && (
        <>
          <div className="absolute top-5  right-5 z-20 cursor-pointer">
            <Image
              className="w-14 h-14"
              onClick={toggleForm}
              src={cerrar}
              alt="cerrar_btn"
            ></Image>
          </div>

          <div
            className={`${styles.modal}  p-8 justify-center items-center h-screen flex fixed left-0 right-0 top-0 bottom-0 `}
          >
            <form
              className={`${styles.animationForm} flex flex-col bg-white w-2/4 p-3`}
            >
              <label className="mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="mb-4 bg-gray-200 shadow-inner rounded-l p-2 flex-1"
                id="nombre"
                type="text"
              />

              <label className="mb-2" htmlFor="especie">
                Especie
              </label>
              <input
                className="mb-4 bg-gray-200 shadow-inner rounded-l p-2 flex-1"
                id="especie"
                type="text"
              />

              <label className="mb-2" htmlFor="raza">
                Raza
              </label>
              <input
                className="mb-4 bg-gray-200 shadow-inner rounded-l p-2 flex-1"
                id="raza"
                type="text"
              />

              <label className="mb-2" htmlFor="color">
                Color
              </label>
              <input
                className="mb-4 bg-gray-200 shadow-inner rounded-l p-2 flex-1"
                id="color"
                type="text"
              />

              <label className="mb-2" htmlFor="edad">
                Edad
              </label>
              <input
                className="mb-4 bg-gray-200 shadow-inner rounded-l p-2 flex-1"
                id="edad"
                type="number"
              />

              <button
                className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default NuevoGasto;
