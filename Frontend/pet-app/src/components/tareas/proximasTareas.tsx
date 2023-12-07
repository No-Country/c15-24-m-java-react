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
  return (
    <div className={styles.containerTareas}>
      <div>
        <div className={styles.encabezado}>
          <span className={styles.circulo}></span>
          <h3 className={styles.text}>Proximas tareas</h3>
        </div>
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
      </div>
    </div>
  );
};
