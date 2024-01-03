import { useState } from "react";
import styles from "./tareas.module.css";

interface Tarea {
  tarea: string;
  isCheck: boolean;
  id: string;
  date: string;
}

interface Tareas {
  data: Tarea[];
}

export const ProximasTareas = ({ data }: Tareas) => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 2500);

  return (
    <div className={styles.containerTareas}>
      <div>
        <div className={styles.encabezado}>
          <span className={styles.circulo}></span>
          <h3 className={styles.text}>Proximas tareas</h3>
        </div>

        {show ? (
          <div className="relative flex w-64 animate-pulse gap-2 p-4">
            <div className="flex-1">
              <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-300 text-lg"></div>
              <div className="h-5 w-[90%] rounded-lg bg-slate-300 text-sm"></div>
            </div>
            <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-300"></div>
          </div>
        ) : (
          <div className={styles.containerCheck}>
            {data.map((object) => {
              return (
                <div key={object.id}>
                  <h4 className={styles.fecha}>{object.date}</h4>
                  <div key={object.id} className={styles.checkbox}>
                    <input
                      id={object.id}
                      className={styles.inputCheckbox}
                      type="checkbox"
                    />
                    <label htmlFor={object.id} className={styles.tareaTexto}>
                      {object.tarea}
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
