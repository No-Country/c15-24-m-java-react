"use client";
import { useState } from "react";
import Image from "next/image";
import agregar from "../../../public/images/agregar.svg";
import Formulario from "../Formulario/Formulario";

import redondo from "../../../public/images/redondo.svg";
import styles from "../NuevoGasto/NuevoGasto.module.css";
import CardContact from "./CardContact/CardContact";
import { Animal } from "../interface/interface";
import { useDataContext } from "../Context/DataContext";
import Controlador from "./Controlador/Controlador";



export const NuevoGasto = () => {
  const { setData, addCard, setAlerta, alerta,addGasto,setAddgasto,setImage } = useDataContext();


 



  const [datos, setDatos] = useState<Animal>({
    nombre: "",
    especie: "",
    raza: "",
    color: "",
    edad: 0,
    sexo: "",
    esterilizado: "",
    tratamiento: "",
    alergias: "",
    mensaje: "",
  
  });




  const handleSubmit = (e: any) => {
    e.preventDefault();

    //agregar mascotas validacion
    const valoresDatos = Object.values(datos);

    if (valoresDatos.includes("") || datos.edad === 0) {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(!true);
      }, 2000);
    } else {
      setData(datos);
      addCard(datos);

      // limpiar formulario
      setDatos({
        nombre: "",

        raza: "",
        color: "",
        edad: 0,
        sexo: "",
        esterilizado: "",
        tratamiento: "",
        alergias: "",
        mensaje: "",
        especie: "",
     
      });

      // cerrar Formulario
      setAddgasto(false);
    }
  };

  // Capturar Datos de los input

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

  // Datos de Textarea
  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
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

      <div className="bg-black text-center text-white flex flex-col justify-center"></div>

      {addGasto && (
        <>
       
     

          <Formulario >

          <form className={`${styles.animationForm}  `}>

            <div className={`${styles.contenedor_form} `}>
              <div className="add_file">
                <label htmlFor="file-upload" className={`${styles.fileUpload}`}>
                  Agregar foto
                </label>

                <input
                  id="file-upload"
                  className={`${styles.fileInput}`}
                  type="file"
                  onChange={handleChangeDatos}

                />
              </div>

              <div className="content">
                <div className="nombre  w-full">
                  <h2 className={`${styles.titularLabel} `}>
                    Información de la mascota
                  </h2>

                  <div className="grid grid-cols-2">
                    <div className="izq">
                      <div className="redondo  gap-2 flex">
                        <Image alt="redondo" src={redondo}></Image>
                        <label htmlFor="">Nombre</label>
                      </div>

                      <input
                        onChange={(e) => handleChangeDatos(e)}
                        name="nombre"
                        className="w-36  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                        type="text"
                      />

                      <div className="redondo  gap-2 flex">
                        <Image alt="redondo" src={redondo}></Image>
                        <label htmlFor="">Raza</label>
                      </div>

                      <input
                        onChange={(e) => handleChangeDatos(e)}
                        className="w-36  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                        name="raza"
                        type="text"
                      />

                      <div className="redondo  gap-2 flex">
                        <Image alt="redondo" src={redondo}></Image>
                        <label htmlFor="">Color</label>
                      </div>
                      <input
                        onChange={(e) => handleChangeDatos(e)}
                        className="w-36  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
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
                        className="w-36  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                        name="edad"
                        type="number"
                      />

                      <div className="redondo  gap-2 flex">
                        <Image alt="redondo" src={redondo}></Image>
                        <label htmlFor="">Sexo</label>
                      </div>

                      <input
                        onChange={(e) => handleChangeDatos(e)}
                        className="w-36  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                        name="sexo"
                        type="text"
                      />

                      <div className="redondo  gap-2 flex">
                        <Image alt="redondo" src={redondo}></Image>
                        <label>Especie</label>
                      </div>

                      <input
                        onChange={(e) => handleChangeDatos(e)}
                        className="w-36  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                        name="especie"
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
                      className="w-36  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                      name="esterilizado"
                      type="text"
                    />

                    <div className="redondo  gap-2 flex">
                      <Image alt="redondo" src={redondo}></Image>
                      <label htmlFor="">Alergias</label>
                    </div>

                    <input
                      onChange={(e) => handleChangeDatos(e)}
                      className="w-36  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
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
                      className="w-36  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
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
                    onChange={(e) => handleChangeTextArea(e)}
                    className={`${styles.textarea}`}
                    name="mensaje"
                    id="mensaje"
                  ></textarea>
                </div>

                <h2 className={`${styles.titularLabel} relative`}>Contactos</h2>
                <div className="grid grid-cols-2 gap-4">
                  {/* CARD CONTACT */}
                  <CardContact />

                  {/* CARD CONTACT */}

                  <CardContact />
                </div>

                {alerta && (
                  <div className="bg-red-200 mt-2 mx-auto w-full flex justify-center text-red-800 px-4 py-2 rounded-md mb-4">
                    <p className="text-sm text-center md:text-base">
                      ¡Faltan campos por completar! Por favor, verifica los
                      campos obligatorios.
                    </p>
                  </div>
                )}
              </div>


                <Controlador handleSubmit={handleSubmit}
                             toggleForm={toggleForm}
                
                />



            </div>

          </form>



          

          </Formulario>
     
      
        </>
      )}
    </div>
  );
};
