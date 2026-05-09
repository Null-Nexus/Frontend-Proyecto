import styles from './Inicio.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Organiza tu Vida Académica <br /> en la UNAM
          </h1>
          <p className={styles.description}>
            Gestiona tus tareas, forma equipos de trabajo, conecta con tutores
            certificados y lleva el control de tu servicio social en una sola plataforma.
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.btnPrimary}>Registrarme como Alumno</button>
            <button className={styles.btnSecondary}>Registrarme como Asesor</button>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.iconBox}>📅</div>
              <h2 className={styles.statNumber}>500+</h2>
              <p className={styles.statText}>Tareas Organizadas</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.iconBox}>👤</div>
              <h2 className={styles.statNumber}>150+</h2>
              <p className={styles.statText}>Tutores Activos</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.iconBox}>👥</div>
              <h2 className={styles.statNumber}>200+</h2>
              <p className={styles.statText}>Equipos Formados</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.iconBox}>📖</div>
              <h2 className={styles.statNumber}>1000+</h2>
              <p className={styles.statText}>Asesorías Realizadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}