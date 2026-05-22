import Link from "next/link";
import styles from "./SinSesion.module.css";

export default function SinSesion() {
  return (
    <main className={styles.container}>

      <div className={styles.card}>

        <h1 className={styles.title}>
          No has iniciado sesión
        </h1>

        <p className={styles.text}>
          Debes iniciar sesión para acceder a esta página.
        </p>

        <Link href="/login">
          <button className={styles.button}>
            Ir al Login
          </button>
        </Link>

      </div>

    </main>
  );
}