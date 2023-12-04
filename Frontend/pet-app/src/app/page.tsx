import { Tareas } from "../components/tareas/tareas";
import { ProximasTareas } from "../components/tareas/proximasTareas";
import { Navbar } from "../components/navbar/navbar";

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

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Tareas data={mock}></Tareas>
      <ProximasTareas data={mockProximas}></ProximasTareas>
    </>
  );
}
