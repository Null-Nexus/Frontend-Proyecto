import styles from "./AsesoriasA.module.css";

type Asesoria = {
  titulo: string;
  tutor: string;
  fecha: string;
  duracion: string;
  estado: "Completada" | "Confirmada";
  rating?: number;
};

const asesorias: Asesoria[] = [
  {
    titulo: "Física Cuántica",
    tutor: "Dr. Carlos Méndez",
    fecha: "2024-12-15",
    duracion: "2 horas",
    estado: "Completada",
    rating: 5,
  },
  {
    titulo: "Programación en Python",
    tutor: "Ing. Ana López",
    fecha: "2024-12-20",
    duracion: "1.5 horas",
    estado: "Completada",
    rating: 5,
  },
  {
    titulo: "Cálculo Integral",
    tutor: "Mtra. Patricia Ramírez",
    fecha: "2024-12-28",
    duracion: "2 horas",
    estado: "Completada",
    rating: 4,
  },
  {
    titulo: "Mecánica Clásica",
    tutor: "Dr. Carlos Méndez",
    fecha: "2025-01-10",
    duracion: "2 horas",
    estado: "Confirmada",
  },
  {
    titulo: "Estructuras de Datos",
    tutor: "Ing. Ana López",
    fecha: "2025-01-13",
    duracion: "1.5 horas",
    estado: "Confirmada",
  },
];

export default function AsesoriasA() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mis Asesorías</h1>
      <p className={styles.subtitle}>
        Gestiona tus sesiones de asesoría y mantén un registro completo de tu aprendizaje
      </p>

      <div className={styles.grid}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.cardHeader}>
            <h2>Historial de Asesorías</h2>
            <p>Revisa tus sesiones pasadas y próximas</p>
          </div>

          <div className={styles.filters}>
            <button className={styles.active}>Todas</button>
            <button>Completadas</button>
            <button>Próximas</button>
          </div>

          <div className={styles.list}>
            {asesorias.map((a, i) => (
              <div
                key={i}
                className={`${styles.item} ${
                  a.estado === "Completada" ? styles.completed : styles.upcoming
                }`}
              >
                <div className={styles.itemHeader}>
                  <div>
                    <h3>{a.titulo}</h3>
                    <span className={styles.tutor}>con {a.tutor}</span>
                  </div>
                  <span
                    className={`${styles.badge} ${
                      a.estado === "Completada"
                        ? styles.badgeCompleted
                        : styles.badgeUpcoming
                    }`}
                  >
                    {a.estado}
                  </span>
                </div>

                <div className={styles.meta}>
                  <span>📅 {a.fecha}</span>
                  <span>⏱ {a.duracion}</span>
                </div>

                {a.estado === "Completada" && (
                  <div className={styles.rating}>
                    {"⭐".repeat(a.rating || 0)}
                  </div>
                )}

                {a.estado === "Confirmada" && (
                  <button className={styles.rateBtn}>
                    Calificar Asesoría
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.summaryCard}>
            <div className={styles.summaryNumber}>12</div>
            <p>Asesorías Completadas</p>
          </div>

          <div className={styles.nextCard}>
            <h3>Próxima Asesoría</h3>
            <div className={styles.nextInner}>
              <h4>Mecánica Clásica</h4>
              <p>con Dr. Carlos Méndez</p>
              <span>📅 2025-01-10</span>
              <span>⏰ 16:00 - 18:00</span>
              <button>Ver Detalles</button>
            </div>
          </div>

          <div className={styles.stats}>
            <h3>Estadísticas</h3>
            <div className={styles.statRow}>
              <span>Horas totales</span>
              <strong>24h</strong>
            </div>
            <div className={styles.statRow}>
              <span>Calificación promedio</span>
              <strong>⭐ 4.8</strong>
            </div>
            <div className={styles.statRow}>
              <span>Tutores diferentes</span>
              <strong>5</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}