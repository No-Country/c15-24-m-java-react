"use client";

import "../calendario/calendario.css";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import arrow from "./assets/arrow.png";
import arrow_rigth from "./assets/arrow-right.png";
import Image from "next/image";

export const CalendarioComponent = () => {
  const fechasMarcadas = [
    "2024-01-01",
    "2024-02-14",
    "2024-12-25",
    "2024-04-16",
  ];

  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(
    date.toLocaleString("default", { month: "long" })
  );
  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    setMonth(date.toLocaleString("default", { month: "long" }));
  }, [date]);

  const changeMonthPrevious = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
    setMonth(date.toLocaleString("default", { month: "long" }));
    setYear(date.getFullYear());
  };

  const changeMonthNext = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
    setMonth(date.toLocaleString("default", { month: "long" }));
    setYear(date.getFullYear());
  };

  return (
    <div className={"containerCalendario"}>
      <div className="navigation_calendar">
        <p className="navigate_title">
          {month} {year}
        </p>
        <button onClick={changeMonthPrevious}>
          <Image src={arrow} alt="icon" height={30} />
        </button>
        <button onClick={changeMonthNext}>
          <Image src={arrow_rigth} alt="icon" height={30} />
        </button>
      </div>
      <Calendar
        className="my-custom-calendar"
        activeStartDate={date}
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
