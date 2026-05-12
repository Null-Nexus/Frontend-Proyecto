"use client";
import React, { useState } from 'react';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [role, setRole] = useState<'alumno' | 'asesor'>('alumno');

  return (
    <div className={styles.container}>
      {/* Lado Izquierdo */}
      <section className={styles.heroSection}>
        <div className={styles.logo}>UNAM Estudia.🎒 </div>
        <h1>Organiza tu vida académica</h1>
        <p>
          Conecta con tutores certificados, forma equipos de trabajo 
          y gestiona tus asesorías en un solo lugar.
        </p>

        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <h3>2,500+</h3>
            <span>Estudiantes</span>
          </div>
          <div className={styles.statCard}>
            <h3>150+</h3>
            <span>Asesores</span>
          </div>
          <div className={styles.statCard}>
            <h3>1,000+</h3>
            <span>Asesorías</span>
          </div>
        </div>
      </section>

      {/* Lado Derecho */}
      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          <div className={styles.roleSelector}>
            <div 
              className={`${styles.roleCard} ${role === 'alumno' ? styles.active : ''}`}
              onClick={() => setRole('alumno')}
            >
              <strong>Soy Alumno. 🧑‍🎓 </strong>
              <p>Busco asesorías y organizar mis tareas</p>
            </div>
            <div 
              className={`${styles.roleCard} ${role === 'asesor' ? styles.active : ''}`}
              onClick={() => setRole('asesor')}
            >
              <strong>Soy Asesor. 🧑‍🏫 </strong>
              <p>Quiero dar asesorías y compartir conocimiento</p>
            </div>
          </div>

          <form>
            <div className={styles.inputGroup}>
              <label>Correo Institucional</label>
              <div className={styles.inputWrapper}>
                <input type="email" placeholder="tu.correo@unam.mx" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Contraseña</label>
              <div className={styles.inputWrapper}>
                <input type="password" placeholder="••••••••" />
              </div>
            </div>

            <div className={styles.formOptions}>
              <label>
                <input type="checkbox" /> Recordarme
              </label>
              <a href="#" className={styles.forgotPass}>¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className={styles.loginBtn}>
              Iniciar Sesión →
            </button>
          </form>

          <p className={styles.registerText}>
            ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;