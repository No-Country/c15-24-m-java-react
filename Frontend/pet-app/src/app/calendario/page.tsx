import { ProximasTareas } from "@/components/tareas/proximasTareas";
import { Tareas } from "@/components/tareas/tareas";
import React from "react";
import { CalendarioComponent } from "../../components/calendario/calendario";
import styles from "./page.module.css";

const mock = [
  {
    tarea: "Llevar al verterinario",
    isCheck: false,
    id: "alksdjf-asdlfkja",
  },
  {
    tarea: "Dar pastilla",
    isCheck: true,
    id: "lkasdjie-lasdflka",
  },
  {
    tarea: "sacar a pasear",
    isCheck: false,
    id: "laksjdf-lskdjf",
  },
];

const mockProximas = [
  {
    tarea: "Llevar al verterinario",
    isCheck: false,
    id: "alksda3jf-asdlfkja",
    date: "Lunes 9 Dic",
  },
  {
    tarea: "Dar pastilla",
    isCheck: true,
    id: "lkas123djie-lasdflka",
    date: "Martes 10 Dic",
  },
  {
    tarea: "sacar a pasear",
    isCheck: false,
    id: "laks31jdf-lskdjf",
    date: "Jueves 9 Ene",
  },
];

export default function Calendario() {
  return (
    <div className={styles.containerCalendarioPage}>
      <CalendarioComponent />
      <div className={styles.asideTareas}>
        <Tareas data={mock} />
        <ProximasTareas data={mockProximas} />
      </div>
    </div>
  );
}
