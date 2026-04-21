import styles from './ProxAct.module.css';

export default function Actividades() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3>Próximas Actividades</h3>
          <button className={styles.btn}>+ Nueva</button>
        </div>

        <div className={styles.list}>
          {/* Alta prioridad */}
          <div className= {` ${styles.alta} item`}>
            <h4>Entrega de Proyecto Final - Cálculo Diferencial</h4>
            <p>📅 2025-01-15</p>
            <p>⏰ 23:59</p>
            <p>👥 Equipo Delta</p>
          </div>

          <div className={`item ${styles.media}`}>
            <h4>Asesoría de Física Cuántica</h4>
            <p>📅 2025-01-10</p>
            <p>⏰ 16:00</p>
            <p>👨‍🏫 Dr. Carlos Méndez</p>
          </div>

          <div className={`item ${styles.media}`}>
            <h4>Reunión Equipo - Proyecto de Química</h4>
            <p>📅 2025-01-12</p>
            <p>⏰ 14:00</p>
          </div>
        </div>
      </div>

      <div className={styles.legend}>
        <h4>Leyenda</h4>
        <div className={styles['legend-item']}>
          <span className={`dot ${styles.alta}`}></span> Prioridad Alta
        </div>
        <div className={styles['legend-item']}>
          <span className={`dot ${styles.media}`}></span> Prioridad Media
        </div>
        <div className={styles['legend-item']}>
          <span className={`dot ${styles.baja}`}></span> Prioridad Baja
        </div>
      </div>
    </div>
  );
}