import { Tareas } from "../components/tareas/tareas";

const mock = [
  {
    tarea: "Llevar al verterinario",
    isCheck: false,
    id: "alksdjf-asdlfkja",
  },
  {
    tarea: "Dar pastilla",
    isCheck: false,
    id: "lkasdjie-lasdflka",
  },
  {
    tarea: "sacar a pasear",
    isCheck: false,
    id: "laksjdf-lskdjf",
  },
];

export default function Home() {
  return (
    <>
      <Tareas data={mock}></Tareas>
    </>
  );
}
