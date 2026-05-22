"use client";
import React, { useState } from 'react';
import styles from './Login.module.css';
import { supabase } from "../../lib/supabase";

const Login: React.FC = () => {
  const [role, setRole] = useState<'alumno' | 'asesor'>('alumno');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    correo: "",
    contrasenia: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Buscamos al usuario por su correo institucional
      // Usamos .trim() para evitar errores por espacios accidentales al inicio o final
      const { data: usuarios, error } = await supabase
        .from("estudiante")
        .select("*")
        .eq("correo_institucional", formData.correo.trim());

      if (error) throw error;

      // 2. Verificamos si encontramos algún registro
      if (!usuarios || usuarios.length === 0) {
        throw new Error("El correo ingresado no está registrado.");
      }

      // 3. Comparamos la contraseña del primer usuario encontrado
      const usuarioEncontrado = usuarios[0];

      // IMPORTANTE: Revisa si en tu tabla es 'contrasena' o 'contrasenia'
      if (usuarioEncontrado.contrasena !== formData.contrasenia) {
        throw new Error("La contraseña es incorrecta.");
      }

      // LOGIN EXITOSO
      alert(`¡Bienvenido de nuevo, ${usuarioEncontrado.nombre}!`);

      // Guardar sesión
      localStorage.setItem(
        "usuario",
      JSON.stringify(usuarioEncontrado)
      );

      // Redireccionar
      window.location.href =
        `/Alumno/${usuarioEncontrado.id_estudiante}`; 

    } catch (error: any) {
      alert("Error de acceso: " + error.message);
    } finally {
      setLoading(false);
    }
  };

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
              <p>Busco asesorías</p>
            </div>
            <div 
              className={`${styles.roleCard} ${role === 'asesor' ? styles.active : ''}`}
              onClick={() => setRole('asesor')}
            >
              <strong>Soy Asesor. 🧑‍🏫 </strong>
              <p>Quiero dar asesorías</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Correo Institucional</label>
              <div className={styles.inputWrapper}>
                <input 
                  type="email" 
                  name="correo"
                  placeholder="tu.correo@unam.mx" 
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Contraseña</label>
              <div className={styles.inputWrapper}>
                <input 
                  type="password" 
                  name="contrasenia"
                  placeholder="••••••••" 
                  value={formData.contrasenia}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formOptions}>
              <label>
                <input type="checkbox" /> Recordarme
              </label>
              <a href="#" className={styles.forgotPass}>¿Olvidaste tu contraseña?</a>
            </div>

            <button 
              type="submit" 
              className={styles.loginBtn}
              disabled={loading}
            >
              {loading ? "Verificando..." : "Iniciar Sesión →"}
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