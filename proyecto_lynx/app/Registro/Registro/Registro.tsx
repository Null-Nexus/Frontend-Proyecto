"use client";

import { useState } from "react";
import styles from "./Registro.module.css";
import { supabase } from "@/app/lib/supabase";

export default function Registro() {
  const [rol, setRol] = useState("alumno");

  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correo: "",
    numCuenta: "",
    semestre: "",
    contrasenia: "",
    descripcion: "",
  });

  // Variable para controlar si está cargando
  const [loading, setLoading] = useState(false);

  // Función para actualizar el estado cuando el usuario escribe
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función principal para guardar en Supabase al enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setLoading(true);

    // Mapeo para convertir el número seleccionado al texto exacto que tiene tu BD
    const opcionesSemestre: { [key: string]: string } = {
      "1": "Primero",
      "2": "Segundo",
      "3": "Tercero",
      "4": "Cuarto",
      "5": "Quinto",
      "6": "Sexto",
      "7": "Sétimo",
      "8": "Octavo",
      "9": "Noveno"
    };

    const semestreTexto = opcionesSemestre[formData.semestre] || "";

    try {
     
      const { data, error } = await supabase
        .from("estudiante") 
        .insert([
          {
            nombre: formData.nombre,
            apellido_paterno: formData.apellidoPaterno,
            apellido_materno: formData.apellidoMaterno,
            correo_institucional: formData.correo,
            numero_de_cuenta: formData.numCuenta,
            semestre: semestreTexto,
            descripcion: formData.descripcion,
            contrasena: formData.contrasenia, 
          },
        ]);

      if (error) {
        throw error;
      }

      alert("¡Cuenta creada exitosamente, bienvenido a Lynx!");
      
      // Limpiar el formulario tras un registro exitoso
      setFormData({
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        correo: "",
        numCuenta: "",
        semestre: "",
        contrasenia: "",
        descripcion: "",
      });

    } catch (error: any) {
      alert("Error al registrar: " + error.message);
    } finally {
      setLoading(false);
    }
  };

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
            <h2>Únete a la comunidad</h2>
            <p>Organiza tu vida académica, encuentra asesorías y conecta con estudiantes.</p>
          </div>

          <div className={styles.cards}>
            <div className={styles.infoCard}><span>🔒</span><p>Datos seguros</p></div>
            <div className={styles.infoCard}><span>🎓</span><p>100% Gratuito</p></div>
            <div className={styles.infoCard}><span>⭐</span><p>Asesorías reales</p></div>
          </div>
        </div>
      </section>

      {/* DERECHA */}
      <section className={styles.rightSection}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formHeader}>
            <h2>Crear Cuenta</h2>
            <p>Selecciona tu rol y completa tus datos</p>
          </div>

          {/* ROLES */}
          <div className={styles.roles}>
            <div
              className={`${styles.roleCard} ${rol === "alumno" ? styles.active : ""}`}
              onClick={() => setRol("alumno")}
            >
              <h3>🎓 Soy Alumno</h3>
              <p>Busco asesorías y organización</p>
            </div>

            <div
              className={`${styles.roleCard} ${rol === "asesor" ? styles.active : ""}`}
              onClick={() => setRol("asesor")}
            >
              <h3>👨‍🏫 Soy Asesor</h3>
              <p>Quiero ayudar estudiantes</p>
            </div>
          </div>

          {/* INPUTS */}
          <div className={styles.inputGroup}>
            <label>Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Juan" required />
          </div>

          <div className={styles.doubleInput}>
            <div className={styles.inputGroup}>
              <label>Apellido Paterno</label>
              <input type="text" name="apellidoPaterno" value={formData.apellidoPaterno} onChange={handleChange} placeholder="Pérez" required />
            </div>

            <div className={styles.inputGroup}>
              <label>Apellido Materno</label>
              <input type="text" name="apellidoMaterno" value={formData.apellidoMaterno} onChange={handleChange} placeholder="López" required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Correo Institucional</label>
            <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="usuario@unam.mx" required />
          </div>

          <div className={styles.inputGroup}>
            <label>Número de Cuenta</label>
            <input type="text" name="numCuenta" value={formData.numCuenta} onChange={handleChange} placeholder="123456789" maxLength={9} required />
          </div>

          <div className={styles.doubleInput}>
            <div className={styles.inputGroup}>
              <label>Semestre</label>
              <select name="semestre" value={formData.semestre} onChange={handleChange} required>
                <option value="">Selecciona</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Contraseña</label>
              <input type="password" name="contrasenia" value={formData.contrasenia} onChange={handleChange} placeholder="********" required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Descripción</label>
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Cuéntanos un poco sobre ti..."></textarea>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" required />
            <p>Acepto los términos y condiciones</p>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Cargando..." : "Crear Cuenta"}
          </button>

          <div className={styles.loginText}>
            <p>¿Ya tienes cuenta? <span> Iniciar Sesión</span></p>
          </div>
        </form>
      </section>
    </div>
  );
}