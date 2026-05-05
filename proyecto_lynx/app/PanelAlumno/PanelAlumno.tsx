import styles from "./PanelAlumno.module.css"

export default function PanelAlumno() {
    return (

        <section className={styles.panel}>
            <div className={styles.userInfo}>
                <div className={styles.avatar}>JD</div>
                <div>
                    <h1>Hola, Fernando Martinez</h1>
                    <p>Panel de Alumno - Fes Acatlan</p>
                </div>
            </div>

            {/* Cards */}
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h2>8</h2>
                    <p>Tareas Pendientes</p>
                </div>

                <div className={styles.card}>
                    <h2>3</h2>
                    <p>Asesorías Próximas</p>
                </div>

                <div className={styles.card}>
                    <h2>4</h2>
                    <p>Equipos Activos</p>
                </div>

                <div className={styles.card}>
                    <h2>4.8</h2>
                    <p>Promedio Asesorías</p>
                </div>
            </div>
        </section>
    );
}