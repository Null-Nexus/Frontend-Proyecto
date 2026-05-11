import styles from "./PanelAsesor.module.css";

import {
  BookOpen,
  Star,
  Users,
  Clock3,
  BadgeCheck,
} from "lucide-react";

export default function PanelAsesor() {
  return (
    <section className={styles.panel}>
      {/* HEADER */}

      <div className={styles.header}>
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Asesor"
          className={styles.avatar}
        />

        <div>
          <h1 className={styles.name}>
            Dr. Carlos Méndez
          </h1>

          <div className={styles.info}>
            <span>Panel de Asesor</span>

            <span>•</span>

            <span>Facultad de Ciencias</span>

            <span>•</span>

            <span className={styles.verified}>
              <BadgeCheck size={20} />
              Verificado
            </span>
          </div>
        </div>
      </div>

      {/* CARDS */}

      <div className={styles.cards}>
        {/* CARD 1 */}

        <div className={styles.card}>
          <div className={styles.iconBox}>
            <BookOpen size={28} />
          </div>

          <h2 className={styles.value}>342</h2>

          <p className={styles.label}>
            Asesorías Dadas
          </p>
        </div>

        {/* CARD 2 */}

        <div className={styles.card}>
          <div className={styles.iconBox}>
            <Star size={28} />
          </div>

          <h2 className={styles.value}>4.9</h2>

          <p className={styles.label}>
            Calificación
          </p>
        </div>

        {/* CARD 3 */}

        <div className={styles.card}>
          <div className={styles.iconBox}>
            <Users size={28} />
          </div>

          <h2 className={styles.value}>127</h2>

          <p className={styles.label}>
            Reseñas
          </p>
        </div>

        {/* CARD 4 */}

        <div className={styles.card}>
          <div className={styles.iconBox}>
            <Clock3 size={28} />
          </div>

          <h2 className={styles.value}>145h</h2>

          <p className={styles.label}>
            Servicio Social
          </p>
        </div>
      </div>
    </section>
  );
}