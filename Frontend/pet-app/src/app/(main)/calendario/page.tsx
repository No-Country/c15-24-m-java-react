"use client";
import { ProximasTareas } from "@/components/tareas/proximasTareas";
import { Tareas } from "@/components/tareas/tareas";
import React, { useState } from "react";
import { CalendarioComponent } from "@/components/calendario/calendario";
import styles from "./page.module.css";
import { Nunito } from "next/font/google";
import { NavbarSup } from "@/components/navbarSuperior/navbarSup";

const mock = [
  {
    tarea: "Banar",
    isCheck: false,
    id: "alksdjf-asdlfkja",
  },
  {
    tarea: "Pasarle el peine",
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
    date: "Lunes 25 Dic",
  },
  {
    tarea: "Dar pastilla",
    isCheck: true,
    id: "lkas123djie-lasdflka",
    date: "Jueves 28 Dic",
  },
  {
    tarea: "Comprar alimento",
    isCheck: false,
    id: "laks31jdf-lskdjf",
    date: "Sabado 6 Ene",
  },
];

function Loader() {
  return (
    <div className="relative flex w-64 animate-pulse gap-2 p-4">
      <div className="h-12 w-12 rounded-full bg-slate-400"></div>
      <div className="flex-1">
        <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
        <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
      </div>
      <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
    </div>
  );
}

export default function Calendario() {
  return (
    <div className={`${styles.containerCalendarioPage}  antialiased`}>
      <CalendarioComponent />
      <div className={styles.asideTareas}>
        <Tareas data={mock} />
        <ProximasTareas data={mockProximas} />
      </div>
    </div>
  );
}
