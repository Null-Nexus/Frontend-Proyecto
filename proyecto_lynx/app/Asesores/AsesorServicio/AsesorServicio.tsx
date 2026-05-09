import styles from "./AsesorServicio.module.css";

import {
  Clock3,
  BookOpen,
  Star,
  CalendarDays,
  ShieldCheck,
  CheckCircle2,
  Info,
  Upload,
} from "lucide-react";

export default function AsesorServicio() {
  return (
    <section className={styles.container}>
      {/* HEADER */}

      <div className={styles.header}>
        <h1>Servicio Social</h1>

        <p>
          Libera tu servicio social dando asesorías y ayudando a otros
          estudiantes de la UNAM
        </p>
      </div>

      {/* TOP CARDS */}

      <div className={styles.cards}>
        {/* MAIN */}

        <div className={`${styles.card} ${styles.mainCard}`}>
          <div className={styles.cardTop}>
            <div className={styles.iconBox}>
              <Clock3 size={30} />
            </div>

            <span className={styles.badge}>
              30.2% completado
            </span>
          </div>

          <h2>145h</h2>

          <p>de 480h requeridas</p>

          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: "30%" }}
            />
          </div>
        </div>

        {/* CARD 2 */}

        <div className={styles.card}>
          <div className={styles.blueIcon}>
            <BookOpen size={28} />
          </div>

          <h2>72</h2>

          <h3>Asesorías Completadas</h3>

          <span>18 este mes</span>
        </div>

        {/* CARD 3 */}

        <div className={styles.card}>
          <div className={styles.yellowIcon}>
            <Star size={28} />
          </div>

          <h2>4.8</h2>

          <h3>Calificación Promedio</h3>

          <span>45 estudiantes ayudados</span>
        </div>
      </div>

      {/* CONTENT */}

      <div className={styles.content}>
        {/* LEFT */}

        <div className={styles.left}>
          <div className={styles.historyHeader}>
            Historial de sesiones para servicio social
          </div>

          <div className={styles.filters}>
            <button className={styles.activeBtn}>
              Todas
            </button>

            <button>Servicio Social</button>

            <button>Otras</button>
          </div>

          <div className={styles.sessions}>
            {/* SESIÓN 1 */}

            <div className={styles.sessionCard}>
              <div>
                <h2>Química Orgánica</h2>

                <p>
                  Estudiante: María González
                </p>

                <div className={styles.sessionInfo}>
                  <span>
                    <CalendarDays size={18} />
                    2024-12-10
                  </span>

                  <span>
                    <Clock3 size={18} />
                    2 horas
                  </span>
                </div>
              </div>

              <div className={styles.tags}>
                <span className={styles.socialTag}>
                  <ShieldCheck size={16} />
                  Servicio Social
                </span>

                <span className={styles.doneTag}>
                  Completada
                </span>
              </div>
            </div>

            {/* SESIÓN 2 */}

            <div className={styles.sessionCard}>
              <div>
                <h2>Química Inorgánica</h2>

                <p>
                  Estudiante: Juan Pérez
                </p>

                <div className={styles.sessionInfo}>
                  <span>
                    <CalendarDays size={18} />
                    2024-12-18
                  </span>

                  <span>
                    <Clock3 size={18} />
                    1.5 horas
                  </span>
                </div>
              </div>

              <div className={styles.tags}>
                <span className={styles.socialTag}>
                  <ShieldCheck size={16} />
                  Servicio Social
                </span>

                <span className={styles.doneTag}>
                  Completada
                </span>
              </div>
            </div>

            {/* SESIÓN 3 */}

            <div className={styles.sessionCard}>
              <div>
                <h2>Bioquímica</h2>

                <p>
                  Estudiante: Laura Martínez
                </p>

                <div className={styles.sessionInfo}>
                  <span>
                    <CalendarDays size={18} />
                    2024-12-22
                  </span>

                  <span>
                    <Clock3 size={18} />
                    2 horas
                  </span>
                </div>
              </div>

              <div className={styles.tags}>
                <span className={styles.socialTag}>
                  <ShieldCheck size={16} />
                  Servicio Social
                </span>

                <span className={styles.doneTag}>
                  Completada
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className={styles.right}>
          {/* VERIFY */}

          <div className={styles.verifyCard}>
            <div className={styles.verifyItem}>
              <div className={styles.greenCircle}>
                <CheckCircle2 size={20} />
              </div>

              <div>
                <h3>Credenciales Verificadas</h3>
                <p>Documentos aprobados</p>
              </div>
            </div>

            <div className={styles.verifyItem}>
              <div className={styles.greenCircle}>
                <CheckCircle2 size={20} />
              </div>

              <div>
                <h3>Foto de Perfil</h3>
                <p>Imagen actualizada</p>
              </div>
            </div>

            <div className={styles.verifyItem}>
              <div className={styles.yellowCircle}>
                <Clock3 size={20} />
              </div>

              <div>
                <h3>480 Horas Totales</h3>
                <p>145h completadas</p>
              </div>
            </div>
          </div>

          {/* INFO */}

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Info size={34} />
            </div>

            <h2>¿Cómo funciona?</h2>

            <ul>
              <li>
                Sube tus credenciales académicas
              </li>

              <li>
                Ofrece asesorías en tus materias
              </li>

              <li>
                Acumula horas automáticamente
              </li>

              <li>
                Descarga tu constancia al completar
              </li>
            </ul>
          </div>

          {/* BUTTON */}

          <button className={styles.uploadBtn}>
            <Upload size={24} />
            Subir Credenciales
          </button>
        </div>
      </div>
    </section>
  );
}