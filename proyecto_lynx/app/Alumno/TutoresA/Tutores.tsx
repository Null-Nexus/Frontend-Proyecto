import styles from "./Tutores.module.css";

const tutores = [
  {
    nombre: "Dr. Carlos Méndez",
    area: "Física Cuántica y Mecánica",
    rating: "4.9 (127 reseñas)",
    facultad: "Facultad de Ciencias",
    experiencia: "15 años de experiencia",
    asesorias: "342 asesorías dadas",
  },
  {
    nombre: "Ing. Ana López",
    area: "Programación y Algoritmos",
    rating: "4.8 (98 reseñas)",
    facultad: "Facultad de Ingeniería",
    experiencia: "8 años de experiencia",
    asesorias: "256 asesorías dadas",
  },
  {
    nombre: "Mtra. Patricia Ramírez",
    area: "Cálculo y Álgebra",
    rating: "4.7 (156 reseñas)",
    facultad: "Facultad de Ciencias",
    experiencia: "12 años de experiencia",
    asesorias: "428 asesorías dadas",
  },
  {
    nombre: "Dr. Roberto Sánchez",
    area: "Química Orgánica",
    rating: "4.9 (203 reseñas)",
    facultad: "Facultad de Química",
    experiencia: "20 años de experiencia",
    asesorias: "567 asesorías dadas",
  },
  {
    nombre: "Lic. María Fernández",
    area: "Literatura y Redacción",
    rating: "4.6 (89 reseñas)",
    facultad: "Facultad de Filosofía y Letras",
    experiencia: "6 años de experiencia",
    asesorias: "178 asesorías dadas",
  },
  {
    nombre: "Ing. Jorge Martínez",
    area: "Termodinámica y Mecánica de Fluidos",
    rating: "4.8 (134 reseñas)",
    facultad: "Facultad de Ingeniería",
    experiencia: "10 años de experiencia",
    asesorias: "298 asesorías dadas",
  },
];

export default function Tutores() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Tutores Certificados</h2>

      <p className={styles.subtitle}>
        Conecta con tutores verificados de la UNAM para recibir asesorías
        personalizadas
      </p>

      <div className={styles.grid}>
        {tutores.map((tutor, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <div className={styles.placeholder}>
                {tutor.nombre
                  .split(" ")
                  .filter(
                    (palabra) =>
                      !["Dr.", "Ing.", "Mtra.", "Lic."].includes(palabra)
                  )
                  .slice(0, 2)
                  .map((palabra) => palabra.charAt(0))
                  .join("")}
              </div>

              <span className={styles.badge}>✔</span>
            </div>

            <div className={styles.cardBody}>
              <h3>{tutor.nombre}</h3>

              <p className={styles.area}>{tutor.area}</p>

              <p className={styles.rating}>⭐ {tutor.rating}</p>

              <ul className={styles.info}>
                <li>{tutor.facultad}</li>
                <li>{tutor.experiencia}</li>
                <li>{tutor.asesorias}</li>
              </ul>

              <button className={styles.button}>
                Ver Perfil Completo
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <button className={styles.allBtn}>
          Ver Todos los Tutores
        </button>
      </div>
    </section>
  );
}