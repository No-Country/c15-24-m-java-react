import styles from "./tareas.module.css";

interface Tareas {
  data: number[];
}

export const Tareas = ({ data }: Tareas) => {
  console.log(data);

  return (
    <div className={styles.containerTareas}>
      <div>
        <div className={styles.encabezado}>
          <span className={styles.circulo}></span>
          <h3 className={styles.text}>Tareas de hoy</h3>
        </div>
        <div className={styles.containerCheck}>
          {data.map((object) => {
            return (
              <div className={styles.checkbox}>
                <input
                  id={object.id}
                  className={styles.inputCheckbox}
                  type="checkbox"
                />
                <label htmlFor={object.id} className={styles.tareaTexto}>
                  {object.tarea}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
