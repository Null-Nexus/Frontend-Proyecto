// AsesorAlumno.tsx
import styles from "./AsesorAlumno.module.css";
import { MessageSquare, FileText } from "lucide-react";

export default function AsesorAlumno() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Mis Estudiantes</h1>

        <p>
          Seguimiento del progreso de los estudiantes que asesoras
        </p>
      </div>

      <div className={styles.grid}>
        {/* CARD 1 */}

        <div className={styles.card}>
          <div className={styles.top}>
            <div>
              <h2>María González</h2>
              <span>Química Orgánica</span>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.row}>
              <p>Sesiones completadas</p>
              <strong>8</strong>
            </div>

            <div className={styles.row}>
              <p>Última sesión</p>
              <strong>2024-12-15</strong>
            </div>

            <div className={styles.progressHeader}>
              <p>Progreso</p>
              <strong>75%</strong>
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: "75%" }}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.messageBtn}>
              <MessageSquare size={18} />
              Mensaje
            </button>

            <button className={styles.historyBtn}>
              <FileText size={18} />
              Historial
            </button>
          </div>
        </div>

        {/* CARD 2 */}

        <div className={styles.card}>
          <div className={styles.top}>
            <div>
              <h2>Juan Pérez</h2>
              <span>Química Inorgánica</span>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.row}>
              <p>Sesiones completadas</p>
              <strong>5</strong>
            </div>

            <div className={styles.row}>
              <p>Última sesión</p>
              <strong>2024-12-18</strong>
            </div>

            <div className={styles.progressHeader}>
              <p>Progreso</p>
              <strong>60%</strong>
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: "60%" }}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.messageBtn}>
              <MessageSquare size={18} />
              Mensaje
            </button>

            <button className={styles.historyBtn}>
              <FileText size={18} />
              Historial
            </button>
          </div>
        </div>

        {/* AGREGA MÁS CARDS AQUÍ */}
      </div>
    </section>
  );
}