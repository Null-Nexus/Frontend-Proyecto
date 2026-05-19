import styles from "./PanelAlumno.module.css";

type Estudiante = {
  id_estudiante: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  numero_de_cuenta: string;
  correo_institucional: string;
  semestre: string;
  descripcion: string;
};

type Props = {
  estudiante: Estudiante;
};

export default function PanelAlumno({ estudiante }: Props) {

  const iniciales =
    `${estudiante.nombre?.[0] ?? ""}${estudiante.apellido_paterno?.[0] ?? ""}`;

  return (
    <section className={styles.panel}>

      <div className={styles.userInfo}>

        <div className={styles.avatar}>
          {iniciales}
        </div>

        <div>
          <h1>
            Hola, {estudiante.nombre} {estudiante.apellido_paterno}
          </h1>

          <p>
            Panel de Alumno - FES Acatlán
          </p>
        </div>

      </div>

      <div className={styles.cards}>

        <div className={styles.card}>
          <h2>8</h2>
          <p>Tareas Pendientes</p>
        </div>

        <div className={styles.card}>
          <h2>3</h2>
          <p>Asesorías Próximas</p>
        </div>

      </div>

    </section>
  );
}