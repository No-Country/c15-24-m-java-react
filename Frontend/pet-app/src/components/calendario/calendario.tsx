"use client";

import "../calendario/calendario.css";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import arrow from "./assets/arrow.png";
import arrow_rigth from "./assets/arrow-right.png";
import Image from "next/image";

export const CalendarioComponent = () => {
  const [fechas, setFechas] = useState([]);

  let fechasMarcadas = [
    "2023-12-22",
    "2023-12-13",
    "2023-12-04",
    "2023-12-01 ",
    "2024-01-06",
    "2023-12-25",
    "2023-12-28",
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
    setDate((prevDate) => {
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() - 1,
        prevDate.getDate()
      );
      setMonth(newDate.toLocaleString("default", { month: "long" }));
      setYear(newDate.getFullYear());
      return newDate;
    });
  };

  const changeMonthNext = () => {
    setDate((prevDate) => {
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + 1,
        prevDate.getDate()
      );
      setMonth(newDate.toLocaleString("default", { month: "long" }));
      setYear(newDate.getFullYear());
      return newDate;
    });
  };

  return (
    <div className={"containerCalendario"}>
      <div className="containerComp">
        <div className="navigation_calendar">
          <p className="navigate_title">
            {month} {year}
          </p>
          <button className="svgLeft" onClick={changeMonthPrevious}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
            >
              <path
                d="M12 0L0 12L2.82 14.82L12 5.66L21.18 14.82L24 12L12 0Z"
                fill="#000000"
              />
            </svg>
          </button>
          <button className="svgRigth" onClick={changeMonthNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
            >
              <path
                d="M12 0L0 12L2.82 14.82L12 5.66L21.18 14.82L24 12L12 0Z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>
        <Calendar
          calendarType="gregory"
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
    </div>
  );
};
