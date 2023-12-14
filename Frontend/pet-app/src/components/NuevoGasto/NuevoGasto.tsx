"use client";
import { useState } from "react";
import Image from "next/image";
import agregar from "../../../public/images/agregar.svg";
import Formulario from "../Formulario/Formulario";
import close from "../../../public/images/Close.svg";
import tres from "../../../public/images/tresPuntos.svg";
import redondo from "../../../public/images/redondo.svg";
import styles from "../NuevoGasto/NuevoGasto.module.css";
import CardContact from "./CardContact/CardContact";


export interface Animal {
  especie: string;
  raza: string;
  color: string;
  edad: number;
  sexo: string;
  esterilizado: string;
  tratamiento: string;
  alergias: string;
}

export const NuevoGasto = () => {
  const [addGasto, setAddgasto] = useState<boolean>(false);
  const [datos, setDatos] = useState<Animal>({
    especie: "",
    raza: "",
    color: "",
    edad: 0,
    sexo: "",
    esterilizado: "",
    tratamiento: "",
    alergias: "",
  });

  const [data, setData] = useState<Animal | null>(null);
  const [alerta, setAlerta] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    //agregar mascotas validacion
    const valoresDatos = Object.values(datos);

    if (valoresDatos.includes("") || datos.edad === 0) {
      setAlerta("Por favor, verifica que todos los campos estén llenos.");
      setTimeout(() => {
        setAlerta("");
      }, 2000);
    } else {
      setData(datos);
    }

    //
  };

  const handleChangeDatos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "edad") {
      const newValue = parseInt(value, 10); // Convertir a número entero con base 10
      setDatos({
        ...datos,
        [name]: newValue || 0, // Si el valor no es numérico, se establece a 0
      });
    } else {
      setDatos({
        ...datos,
        [name]: value,
      });
    }
  };

  const toggleForm = (): void => {
    setAddgasto(!addGasto);
  };

  return (
  
      <div className="">
        <div className="btn fixed bottom-10 right-8 cursor-pointer z-20">
          <Image
            onClick={toggleForm}
            className="h-20 w-20  "
            alt="boton_agregar"
            src={agregar}
          ></Image>
        </div>

        <div className="bg-black text-center text-white flex flex-col justify-center">
          <h2>Especie: {data?.especie}</h2>
          <h2>Raza: {data?.raza}</h2>
          <h2>Color: {data?.color}</h2>
          <h2>Edad: {data?.edad}</h2>
          <h2>Sexo: {data?.sexo}</h2>
          <h2>Esterilizado: {data?.esterilizado}</h2>
          <h2>Tratamiento: {data?.tratamiento}</h2>
          <h2>Alergias: {data?.alergias}</h2>{" "}
        </div>

        {addGasto && (
          <>
            <Formulario datos={datos}>
              <div className={`${styles.contenedor_form} `}>
                <div className="add_file">
                  <label
                    htmlFor="file-upload"
                    className={`${styles.fileUpload}`}
                  >
                    Agregar foto
                  </label>

                  <input
                    id="file-upload"
                    className={`${styles.fileInput}`}
                    type="file"
                  />
                </div>

                <div className="content">
                  <div className="nombre  w-full">
                    <h2 className={`${styles.titularLabel}`}>Nombre</h2>

                    <div className="grid grid-cols-2">
                      <div className="izq">
                        <div className="redondo  gap-2 flex">
                          <Image alt="redondo" src={redondo}></Image>
                          <label htmlFor="">Especie</label>
                        </div>
                        <input
                          onChange={(e) => handleChangeDatos(e)}
                          name="especie"
                          className="bg-gray-100 text-black w-36 text-md"
                          type="text"
                        />

                        <div className="redondo  gap-2 flex">
                          <Image alt="redondo" src={redondo}></Image>
                          <label htmlFor="">Raza</label>
                        </div>

                        <input
                          onChange={(e) => handleChangeDatos(e)}
                          className="bg-gray-200 w-36"
                          name="raza"
                          type="text"
                        />

                        <div className="redondo  gap-2 flex">
                          <Image alt="redondo" src={redondo}></Image>
                          <label htmlFor="">Color</label>
                        </div>
                        <input
                          onChange={(e) => handleChangeDatos(e)}
                          className="bg-gray-200 w-36"
                          name="color"
                          type="text"
                        />
                      </div>

                      <div className="derecha">
                        <div className="redondo gap-2 flex">
                          <Image alt="redondo" src={redondo}></Image>
                          <label htmlFor="">Edad</label>
                        </div>

                        <input
                          onChange={(e) => handleChangeDatos(e)}
                          className="bg-gray-200 w-36"
                          name="edad"
                          type="number"
                        />

                        <div className="redondo  gap-2 flex">
                          <Image alt="redondo" src={redondo}></Image>
                          <label htmlFor="">Sexo</label>
                        </div>

                        <input
                          onChange={(e) => handleChangeDatos(e)}
                          className="bg-gray-200 w-36"
                          name="sexo"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <h2 className={`${styles.titularLabel} relative `}>Salud</h2>

                  <div className="grid grid-cols-2 ">
                    <div className="izq">
                      <div className="redondo flex gap-2">
                        <Image alt="redondo" src={redondo}></Image>
                        <label htmlFor="">Esterilizado</label>
                      </div>
                      <input
                        onChange={(e) => handleChangeDatos(e)}
                        className="bg-gray-100 w-36"
                        name="esterilizado"
                        type="text"
                      />

                      <div className="redondo  gap-2 flex">
                        <Image alt="redondo" src={redondo}></Image>
                        <label htmlFor="">Alergias</label>
                      </div>

                      <input
                        onChange={(e) => handleChangeDatos(e)}
                        className="bg-gray-200 w-36"
                        name="alergias"
                        type="text"
                      />
                    </div>

                    <div className="derecha">
                      <div className="redondo  gap-2 flex">
                        <Image alt="redondo" src={redondo}></Image>
                        <label htmlFor="">Tratamiento</label>
                      </div>

                      <input
                        onChange={(e) => handleChangeDatos(e)}
                        className="bg-gray-200 w-36"
                        name="tratamiento"
                        type="text"
                      />
                    </div>
                  </div>

                  <h2 className={`${styles.titularLabel} relative`}>
                    Alimentacion
                  </h2>
                  <div className="w-full">
                    <textarea
                      className={`${styles.textarea}`}
                      name=""
                      id=""
                    ></textarea>
                  </div>

                  <h2 className={`${styles.titularLabel} relative`}>
                    Contactos
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {/* CARD CONTACT */}
                    <CardContact />

                    {/* CARD CONTACT */}

                    <CardContact />
                  </div>
                </div>

                <div
                  className={`${styles.config} absolute top-0 right-0 mt-2 gap-2`}
                >
                  <button
                    onClick={handleSubmit}
                    className={`${styles.botonSave}`}
                  >
                    Guardar
                  </button>

                  <Image
                    className="cursor-pointer"
                    onClick={toggleForm}
                    alt="cerrar"
                    src={close}
                  ></Image>
                  <Image
                    className="cursor-pointer"
                    alt="mas info"
                    src={tres}
                  ></Image>
                </div>
              </div>
            </Formulario>
          </>
        )}
      </div>
  
  );
};
