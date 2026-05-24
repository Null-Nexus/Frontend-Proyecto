"use client";

import { useState, useEffect } from "react";
import styles from "./calendario.module.css";

export default function Calendario() {
  const [fechaActual, setFechaActual] = useState(new Date());
  
  // 1. Agregamos un estado para saber si el componente ya se montó en el cliente
  const [isMounted, setIsMounted] = useState(false);

  // 2. useEffect solo se ejecuta en el cliente después del primer render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth();

  const primerDia = new Date(año, mes, 1).getDay();
  const diasEnMes = new Date(año, mes + 1, 0).getDate();

  const hoy = new Date();

  const cambiarMes = (direccion: number) => {
    setFechaActual(new Date(año, mes + direccion, 1));
  };

  const dias = [];

  for (let i = 0; i < primerDia; i++) {
    dias.push(null);
  }

  for (let i = 1; i <= diasEnMes; i++) {
    dias.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          {meses[mes]} {año}
        </h2>

        <div className={styles.controls}>
          <button onClick={() => cambiarMes(-1)}>◀</button>
          <button onClick={() => setFechaActual(new Date())}>Hoy</button>
          <button onClick={() => cambiarMes(1)}>▶</button>
        </div>
      </div>

      <div className={styles.weekdays}>
        {diasSemana.map((dia) => (
          <div key={dia}>{dia}</div>
        ))}
      </div>

      <div className={styles.grid}>
        {dias.map((dia, index) => {
          // 3. Verificamos isMounted ANTES de asignar esHoy a true
          const esHoy =
            isMounted && // <--- ESTO EVITA EL ERROR DE HIDRATACIÓN
            dia &&
            hoy.getDate() === dia &&
            hoy.getMonth() === mes &&
            hoy.getFullYear() === año;

          return (
            <div
              key={index}
              className={`${styles.day} ${esHoy ? styles.hoy : ""}`}
            >
              {dia}
            </div>
          );
        })}
      </div>
    </div>
  );
}