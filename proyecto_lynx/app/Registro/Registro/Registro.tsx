"use client";

import { useState } from "react";
import styles from "./Registro.module.css";

export default function Registro() {

  const [rol, setRol] = useState("alumno");

  return (
    <div className={styles.container}>

      {/* IZQUIERDA */}
      <section className={styles.leftSection}>

        <div className={styles.overlay}></div>

        <div className={styles.leftContent}>

          <div className={styles.logo}>
            <div className={styles.logoCircle}></div>
            <h1>UNAM Estudia</h1>
          </div>

          <div className={styles.heroText}>
            <h2>
              Únete a la comunidad
            </h2>

            <p>
              Organiza tu vida académica, encuentra asesorías y conecta con estudiantes.
            </p>
          </div>

          <div className={styles.cards}>

            <div className={styles.infoCard}>
              <span>🔒</span>
              <p>Datos seguros</p>
            </div>

            <div className={styles.infoCard}>
              <span>🎓</span>
              <p>100% Gratuito</p>
            </div>

            <div className={styles.infoCard}>
              <span>⭐</span>
              <p>Asesorías reales</p>
            </div>

          </div>

        </div>

      </section>

      {/* DERECHA */}
      <section className={styles.rightSection}>

        <form className={styles.form}>

          <div className={styles.formHeader}>
            <h2>Crear Cuenta</h2>
            <p>Selecciona tu rol y completa tus datos</p>
          </div>

          {/* ROLES */}
          <div className={styles.roles}>

            <div
              className={`${styles.roleCard} ${
                rol === "alumno" ? styles.active : ""
              }`}
              onClick={() => setRol("alumno")}
            >
              <h3>🎓 Soy Alumno</h3>
              <p>Busco asesorías y organización</p>
            </div>

            <div
              className={`${styles.roleCard} ${
                rol === "asesor" ? styles.active : ""
              }`}
              onClick={() => setRol("asesor")}
            >
              <h3>👨‍🏫 Soy Asesor</h3>
              <p>Quiero ayudar estudiantes</p>
            </div>

          </div>

          {/* INPUTS */}
          <div className={styles.inputGroup}>
            <label>Nombre</label>
            <input type="text" placeholder="Juan" />
          </div>

          <div className={styles.doubleInput}>

            <div className={styles.inputGroup}>
              <label>Apellido Paterno</label>
              <input type="text" placeholder="Pérez" />
            </div>

            <div className={styles.inputGroup}>
              <label>Apellido Materno</label>
              <input type="text" placeholder="López" />
            </div>

          </div>

          <div className={styles.inputGroup}>
            <label>Correo Institucional</label>

            <input
              type="email"
              placeholder="usuario@unam.mx"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Número de Cuenta</label>

            <input
              type="text"
              placeholder="123456789"
              maxLength={9}
            />
          </div>

          <div className={styles.doubleInput}>

            <div className={styles.inputGroup}>
              <label>Semestre</label>

              <select>
                <option>Selecciona</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Contraseña</label>

              <input
                type="password"
                placeholder="********"
              />
            </div>

          </div>

          <div className={styles.inputGroup}>
            <label>Descripción</label>

            <textarea
              placeholder="Cuéntanos un poco sobre ti..."
            ></textarea>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" />
            <p>Acepto los términos y condiciones</p>
          </div>

          <button className={styles.submitBtn}>
            Crear Cuenta
          </button>

          <div className={styles.loginText}>
            <p>
              ¿Ya tienes cuenta?
              <span> Iniciar Sesión</span>
            </p>
          </div>

        </form>

      </section>

    </div>
  );
}