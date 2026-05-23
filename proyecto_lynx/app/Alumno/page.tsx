"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SinSesion from "./SinSesion/SinSesion"; // Importamos tu componente

export default function AlumnoPage() {
  const router = useRouter();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Revisamos si hay un usuario guardado
    const usuarioLocal = localStorage.getItem("usuario");

    if (usuarioLocal) {
      try {
        const usuario = JSON.parse(usuarioLocal);
        
        // Si el usuario existe y tiene un id, lo mandamos a su panel
        if (usuario && usuario.id_estudiante) {
          router.push(`/Alumno/${usuario.id_estudiante}`);
          return; // Detenemos la ejecución aquí
        }
      } catch (error) {
        console.error("Error al leer la sesión", error);
      }
    }

    // Si el código llega hasta aquí, significa que NO hay sesión válida.
    // Apagamos el estado de carga para mostrar la pantalla de "Sin Sesión".
    setCargando(false);
  }, [router]);

  // Pantalla de carga muy breve mientras revisa el localStorage
  if (cargando) {
    return (
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h2>Verificando sesión...</h2>
      </main>
    );
  }

  // Si no hay sesión, mostramos tu componente para que el alumno sepa que debe loguearse
  return <SinSesion />;
}