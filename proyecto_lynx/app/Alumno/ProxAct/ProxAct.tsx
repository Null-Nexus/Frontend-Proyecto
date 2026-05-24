import React from "react";
import { FileText, GraduationCap, Users, CalendarDays, Clock3, MapPin } from "lucide-react";
import styles from './ProxAct.module.css';

const actividades: {
  titulo: string;
  fecha: string;
  hora: string;
  extra: string;
  prioridad: string;
  icono: React.ReactNode;
}[] = [
  {
    titulo: "Entrega de Proyecto Final - Cálculo Diferencial",
    fecha: "2025-01-15",
    hora: "23:59",
    extra: "Equipo Delta",
    prioridad: "alta",
    icono: <FileText size={16} />,
  },
  {
    titulo: "Asesoría de Física Cuántica",
    fecha: "2025-01-10",
    hora: "16:00",
    extra: "Dr. Carlos Méndez",
    prioridad: "media",
    icono: <GraduationCap size={16} />,
  },
  {
    titulo: "Reunión Equipo - Proyecto de Química",
    fecha: "2025-01-12",
    hora: "14:00",
    extra: "Sala Virtual",
    prioridad: "media",
    icono: <Users size={16} />,
  },
];

export default function Actividades() {
  return (
    <div className={styles.container}>

      <div className={styles.card}>

        <div className={styles.header}>
          <h3>Próximas Actividades</h3>

          <button className={styles.btn}>
            + Nueva
          </button>
        </div>

        <div className={styles.list}>

          {actividades.map((actividad, index) => (

            <div
              key={index}
              className={`${styles.item} ${styles[actividad.prioridad]}`}
            >

              <h4>
                {actividad.icono} {actividad.titulo}
              </h4>

              <p><CalendarDays size={14} /> {actividad.fecha}</p>

              <p><Clock3 size={14} /> {actividad.hora}</p>

              <p><MapPin size={14} /> {actividad.extra}</p>

            </div>
          ))}

        </div>

      </div>

      <div className={styles.legend}>

        <h4>Leyenda</h4>

        <div className={styles["legend-item"]}>
          <span className={`${styles.dot} ${styles.alta}`}></span>
          Prioridad Alta
        </div>

        <div className={styles["legend-item"]}>
          <span className={`${styles.dot} ${styles.media}`}></span>
          Prioridad Media
        </div>

        <div className={styles["legend-item"]}>
          <span className={`${styles.dot} ${styles.baja}`}></span>
          Prioridad Baja
        </div>

      </div>

    </div>
  );
}