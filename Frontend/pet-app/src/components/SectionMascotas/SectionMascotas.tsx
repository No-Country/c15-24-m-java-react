"use client";
import { useState, useEffect } from "react";

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

import { useDataContext } from "../Context/DataContext";
import { DivGenerado } from "./DivGenerado";
import Formulario from "../Formulario/Formulario";
import Controlador from "../NuevoGasto/Controlador/Controlador";
import redondo from "../../../public/images/redondo.svg";
import { TareasInterface } from "../interface/interface";
// fonts
const nunito = Nunito({
  subsets: ["latin"],
});

interface CardProps {
  idUnico: string | undefined;
  nombre: string;
  color: string;
  especie: string;
  sexo: string;
  edad: number;
  raza: string;
  esterilizado: string;
  alergias: string;
  tratamiento: string;
}

interface Task {
  fecha: string;
  hora: string;
  mascota: string;
  recordatorio: string;
  notas: string;
  completed: boolean;
  id: string;
}

export const Card: React.FC<CardProps> = ({
  idUnico,
  nombre,
  color,
  especie,
  sexo,
  edad,
  raza,
  esterilizado,
  alergias,
  tratamiento,
}) => {
  const { data, cards, deleteCard, addCard, setAddgasto, addGasto, image } =
    useDataContext();
  

  const [generarDiv, setGenerarDiv] = useState<{ [key: string]: boolean }>({});
  const [acordeonAbierto, setAcordeonAbierto] = useState<
    Record<string, boolean>
  >({});

  const [dataTarea, setDataTarea] = useState<TareasInterface>({
    fecha: "",
    hora: "",
    mascota: "",
    recordatorio: "",
    notas: "",
  });

  const [modalTasks, setModalTasks] = useState<boolean>(false);

  const [tasks, setTasks] = useState<Task[]>([]);

  const [mostrarTareas, setMostrarTareas] = useState<boolean>(false);

  



  const abrirModal = () => {
    console.log(modalTasks);
    setModalTasks(!modalTasks);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
      return newTasks;
    });
  };

  const handleOption = (id: string, callback: (id: string) => void) => {
    setGenerarDiv((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleMostrarTareas = (): void => {
    setMostrarTareas(!mostrarTareas);
  };

  const handleChangeTasks = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setDataTarea((prevData) => ({
      ...prevData, // copiar el obj dataTarea
      [name]: value, // reemplazar
    }));
  };

  const save = (e: any) => {
    e.preventDefault();

    const id = crypto.randomUUID();

    // datos de modal de tareas objeto: fecha,hora,mascota,recordatorio,notas.

    setTasks((prevTasks) => [
      ...prevTasks,
      { ...dataTarea, id, completed: false },
    ]);

  
    // cerrar modal

    setModalTasks(!modalTasks);

    //
  };



  const toggleAcordeon = (id: string): void => {
    setAcordeonAbierto((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setMostrarTareas(false);
  };







  return (
    <div key={idUnico}>
      {modalTasks ? (
        <Formulario>
          <form className={`${styles.animationFormTaks}  `}>
            <div className={`${styles.contenedor}  `}>
              <h2 className="absolute top-0 left-0 ml-4 mt-4 text-black text-3xl ">
                Nueva Tarea
              </h2>

              <Controlador handleSubmit={save} toggleForm={abrirModal} />

              <div className="flex flex-col "></div>

              <div className="flex flex-col gap-4 ">
                <div className="">
                  <div className="flex gap-2 ">
                    <Image alt="redondo" src={redondo}></Image>

                    <label htmlFor="">Fecha</label>
                  </div>

                  <input
                    className="w-full  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 "
                    type="date"
                    onChange={(e) => handleChangeTasks(e)}
                    name="fecha"
                  />
                </div>

                <div className="">
                  <div className="flex gap-2 ">
                    <Image alt="redondo" src={redondo}></Image>

                    <label htmlFor="">Hora</label>
                  </div>

                  <input
                    className="w-full  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 "
                    type="time"
                    name="hora"
                    onChange={(e) => handleChangeTasks(e)}
                  />
                </div>

                <div className="">
                  <div className="flex gap-2 ">
                    <Image alt="redondo" src={redondo}></Image>

                    <label htmlFor="">Mascota</label>
                  </div>

                  <input
                    className="w-full  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                    type="text"
                    name="mascota"
                    onChange={(e) => handleChangeTasks(e)}
                  />
                </div>

                <div className="">
                  <div className="flex gap-2 ">
                    <Image alt="redondo" src={redondo}></Image>

                    <label htmlFor="">Recordatorio</label>
                  </div>

                  <input
                    className="w-full  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                    type="text"
                    id="recordatorio"
                    name="recordatorio"
                    onChange={(e) => handleChangeTasks(e)}
                  />
                </div>

                <div className="">
                  <div className="flex gap-2 ">
                    <Image alt="redondo" src={redondo}></Image>

                    <label htmlFor="">Notas</label>
                  </div>

                  <textarea
                    className="w-full  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                    name="notas"
                    id=""
                    onChange={(e) => handleChangeTasks(e)}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </Formulario>
      ) : (
        ""
      )}

      <div
        className={`caja bg-white mb-5 px-5 ${
          styles.bgShadow
        } shadow-2xl p-3 rounded-3xl ${
          acordeonAbierto[idUnico as keyof typeof acordeonAbierto]
            ? "grid grid-cols-1" // Cuando el acordeón está abierto, cambia a una sola columna
            : "grid sm:grid-cols-1 md:grid-cols-3 " // Cuando está cerrado, utiliza tres columnas
        } ${
          acordeonAbierto[idUnico as keyof typeof acordeonAbierto] ? "" : ""
        }`}
      >
        <div className="imagen">
          <Image
            className="h-60  mx-auto block"
            src={pet}
            alt="imagen_perro"
          ></Image>
        </div>

        <div className={`${styles.contenidoMascota}`}>
          {/* titulo*/}
          <h2
            className={`${styles.textoOscuro} px-3 uppercase font-bold  ${
              acordeonAbierto[idUnico as keyof typeof acordeonAbierto]
                ? " text-center"
                : "text-start"
            }`}
          >
            {nombre}
          </h2>

          {/* categorias */}

          <div
            className={`${
              acordeonAbierto[idUnico as keyof typeof acordeonAbierto]
                ? styles.contenedorCategoriasAbierto
                : styles.contenedorCategorias
            }  p-3 `}
          >
            <div className="mb-2">
              <h3 className={`${styles.categoryOscuro}`}>Especie </h3>
              <h4 className={`${styles.resultsData}`}> {especie} </h4>
            </div>

            <div className="mb-2">
              <h3 className={`${styles.categoryOscuro}`}>Color </h3>
              <h4 className={`${styles.resultsData}`}> {color} </h4>
            </div>
            <div className="mb-2">
              <h3 className={`${styles.categoryOscuro}`}>Sexo </h3>
              <h4 className={`${styles.resultsData}`}> {sexo} </h4>
            </div>

            <div className="mb-2">
              <h3 className={`${styles.categoryOscuro}`}>Edad </h3>
              <h4 className={`${styles.resultsData}`}> {edad} </h4>
            </div>
            <div className="mb-2">
              <h3 className={`${styles.categoryOscuro}`}>Raza </h3>
              <h4 className={`${styles.resultsData}`}> {raza} </h4>
            </div>
            <div className="mb-2">
              <h3 className={`${styles.categoryOscuro}`}>Esterilizado </h3>
              <h4 className={`${styles.resultsData}`}> {esterilizado} </h4>
            </div>
          </div>
        </div>

        <div className={`${styles.contenedorCfg}`}>
          <Image
            alt="Campana"
            className="w-6 h-6 cursor-pointer"
            src={notificacion}
          ></Image>
          <Image
            alt="Flecha"
            onClick={() => {
              if (idUnico) toggleAcordeon(idUnico);
            }}
            className="w-6 h-6 cursor-pointer"
            src={arrow}
          ></Image>
          <Image
            alt="Tres_puntos"
            className="w-6 cursor-pointer h-6"
            src={puntos}
            onClick={() =>
              idUnico !== undefined && handleOption(idUnico, deleteCard)
            }
          ></Image>
        </div>

        <div className="mt-10 absolute top-0 -right-10  -z-10">
          {idUnico && idUnico in generarDiv && generarDiv[idUnico] && (
            <DivGenerado deleteCard={deleteCard} idUnico={idUnico} />
          )}
        </div>
        {acordeonAbierto[idUnico as keyof typeof acordeonAbierto] && (
          <>
            <div className="flex items-center flex-col w-full  ">
              <div className="flex items-center  w-full ">
                <h3 className={`${styles.titleTarea}`}>Tarea</h3>
                <Image
                  alt="flecha-abajo "
                  className="w-5 h-5 ml-2 cursor-pointer "
                  src={arrowBelow}
                  onClick={toggleMostrarTareas}
                ></Image>

                <Image
                  alt="añadir_tareas"
                  className="ml-1 cursor-pointer"
                  src={addTasks}
                  onClick={abrirModal}
                ></Image>
              </div>

              {mostrarTareas && (
                <div className={`${styles.contenedorTasks}`}>
                  {/* Aquí colocas los cuadraditos para marcar las tareas */}
                  {/* Por ejemplo: */}

                  {tasks.map((task) => (
                    <div
                      className={`p-2 ${task.completed ? "line-through" : ""}`}
                      key={task.id}
                    >
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                      />
                      <span> {task.notas} </span>
                    </div>
                  ))}

                  {/* ... */}
                </div>
              )}

              <div className={`${styles.contenedorMascota} `}>
                <h3 className={`${styles.titularLabel} `}>Salud</h3>

                <div className="pl-20">
                  <h4 className={`${styles.titleData}`}>Esterilizado</h4>
                  <h5> {esterilizado} </h5>
                </div>

                <div className="pl-20">
                  <h4 className={`${styles.titleData}`}>Alergias</h4>
                  <h5> {alergias} </h5>
                </div>

                <div className="pl-20">
                  <h4 className={`${styles.titleData}`}>Tratamientos</h4>
                  <h5> {tratamiento} </h5>
                </div>

                <h3 className={`${styles.titularLabel}`}>Alimentacion</h3>
                <textarea
                  readOnly
                  className={`${styles.textarea} w-full`}
                  name=""
                  id=""
                >
                  {data?.mensaje}
                </textarea>

                <h3 className={`${styles.titularLabel}`}>Contactos</h3>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
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
  );
};

export const SectionMascotas = () => {
  const { data, cards, deleteCard, addCard, setAddgasto, addGasto, image } =
    useDataContext(); // OBJETO DEL FORMULARIO : ESPECIE;RAZA,COLOR,etc

   
  const [generarDiv, setGenerarDiv] = useState<{ [key: string]: boolean }>({});
  const [showAddedAlert, setShowAddedAlert] = useState<boolean>(false); // Estado para la alerta
  const [modalTasks, setModalTasks] = useState<boolean>(false);

    
  const [isLoading, setIsLoading] = useState <boolean> (false);

const showAddAlert = async () => {
  setIsLoading(true);
  // Aquí va el código de tu función
  setIsLoading(false);
 };
  const [dataTarea, setDataTarea] = useState<TareasInterface>({
    fecha: "",
    hora: "",
    mascota: "",
    recordatorio: "",
    notas: "",
  });

  console.log(cards);

  const handleChangeTasks = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setDataTarea((prevData) => ({
      ...prevData, // copiar el obj dataTarea
      [name]: value, // reemplazar
    }));
  };

  // alerta

  useEffect(() => {
    if (cards.length > 0) {
      setShowAddedAlert(true); // Mostrar la alerta si hay tarjetas agregadas

      const timeout = setTimeout(() => {
        setShowAddedAlert(false); // Ocultar la alerta después de 2 segundos
      }, 2000);

      // Limpiar el temporizador cuando el componente se desmonta o cuando cards.length cambia
      return () => clearTimeout(timeout);
    }
  }, [cards.length]);

  const handleOption = (id: string, callback: (id: string) => void) => {
    setGenerarDiv((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const [mostrarTareas, setMostrarTareas] = useState<boolean>(false);

  interface Task {
    fecha: string;
    hora: string;
    mascota: string;
    recordatorio: string;
    notas: string;
    completed: boolean;
    id: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);

  const toggleMostrarTareas = (): void => {
    setMostrarTareas(!mostrarTareas);
  };

  // guardar Tarea
  const save = (e: any) => {
    e.preventDefault();

    const id = crypto.randomUUID();

    // datos de modal de tareas objeto: fecha,hora,mascota,recordatorio,notas.

    setTasks((prevTasks) => [
      ...prevTasks,
      { ...dataTarea, id, completed: false },
    ]);

    // cerrar modal

    setModalTasks(!modalTasks);

    //
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
      return newTasks;
    });
  };

  // modal
  const abrirModal = () => {
    setModalTasks(!modalTasks);
  };

  return (
    <div className="">
      {modalTasks ? (
        <Formulario>
          <form className={`${styles.animationFormTaks}  `}>
            <div className={`${styles.contenedor}  `}>
              <h2 className="absolute top-0 left-0 ml-4 mt-4 text-black text-3xl ">
                Nueva Tarea
              </h2>

              <Controlador handleSubmit={save} toggleForm={abrirModal} />

              <div className="flex flex-col "></div>

              <div className="flex flex-col gap-4 ">
                <div className="">
                  <div className="flex gap-2 ">
                    <Image alt="redondo" src={redondo}></Image>

                    <label htmlFor="">Fecha</label>
                  </div>

                  <input
                    className="w-full  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 "
                    type="date"
                    onChange={(e) => handleChangeTasks(e)}
                    name="fecha"
                  />
                </div>

                <div className="">
                  <div className="flex gap-2 ">
                    <Image alt="redondo" src={redondo}></Image>

                    <label htmlFor="">Hora</label>
                  </div>

                  <input
                    className="w-full  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 "
                    type="time"
                    name="hora"
                    onChange={(e) => handleChangeTasks(e)}
                  />
                </div>

                <div className="">
                  <div className="flex gap-2 ">
                    <Image alt="redondo" src={redondo}></Image>

                    <label htmlFor="">Mascota</label>
                  </div>

                  <input
                    className="w-full  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                    type="text"
                    name="mascota"
                    onChange={(e) => handleChangeTasks(e)}
                  />
                </div>

                <div className="">
                  <div className="flex gap-2 ">
                    <Image alt="redondo" src={redondo}></Image>

                    <label htmlFor="">Recordatorio</label>
                  </div>

                  <input
                    className="w-full  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                    type="text"
                    id="recordatorio"
                    name="recordatorio"
                    onChange={(e) => handleChangeTasks(e)}
                  />
                </div>

                <div className="">
                  <div className="flex gap-2 ">
                    <Image alt="redondo" src={redondo}></Image>

                    <label htmlFor="">Notas</label>
                  </div>

                  <textarea
                    className="w-full  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                    name="notas"
                    id=""
                    onChange={(e) => handleChangeTasks(e)}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </Formulario>
      ) : (
        ""
      )}

      <section className="p-20">
        <div className="max-w-[720px]  mx-auto ">
          {data ? (
            <h2 className={`${styles.titulo_mascotas}  `}>Mis Mascotas</h2>
          ) : (
            <h2 className={`${styles.titulo_mascotas}  `}>
              Aún no se han registrado mascota
            </h2>
          )}

            



          {showAddedAlert && (
            <div className="bg-green-500  text-white py-2 px-4 rounded-md shadow-md">
              <p className="text-sm md:text-base">
                ¡Mascotas añadidas correctamente!
              </p>
            </div>
          )}

          {/* Card*/}

          {cards &&
            cards.map(
              ({
                idUnico,
                nombre,
                color,
                especie,
                sexo,
                edad,
                raza,
                esterilizado,
                alergias,
                tratamiento,
              }) => (
                <Card
                  idUnico={idUnico}
                  nombre={nombre}
                  color={color}
                  especie={especie}
                  sexo={sexo}
                  edad={edad}
                  raza={raza}
                  esterilizado={esterilizado}
                  alergias={alergias}
                  tratamiento={tratamiento}
                />
              )
            )}
        </div>
      </section>
    </div>
  );
};
