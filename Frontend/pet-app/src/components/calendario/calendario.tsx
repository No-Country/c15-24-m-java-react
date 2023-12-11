"use client";

import "../calendario/calendario.css";
import Calendar from "react-calendar";

export const CalendarioComponent = () => {
  const fechasMarcadas = [
    "2024-01-01",
    "2024-02-14",
    "2024-12-25",
    "2024-04-16",
  ];

  return (
    <div className={"containerCalendario"}>
      <Calendar
        tileClassName={({ date, view }) => {
          // Convertir la fecha a un string en el formato 'YYYY-MM-DD'
          const fechaString = date.toISOString().split("T")[0];
          // Verificar si la fecha está en el array de fechas marcadas
          if (fechasMarcadas.includes(fechaString)) {
            return "fecha-marcada";
          }
        }}
      />
    </div>
  );
};
