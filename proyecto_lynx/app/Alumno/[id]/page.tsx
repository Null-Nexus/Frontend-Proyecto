"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Calendario from "../CalendarioA/calendario";
import PanelAlumno from "../PanelAlumno/PanelAlumno";
import ProxAct from "../ProxAct/ProxAct";
import AsesoriasA from "../AsesoriasA/AsesoriasA";
import Tutores from "../TutoresA/Tutores";
import SinSesion from "../SinSesion/SinSesion";
import { supabase } from "@/app/lib/supabase";

export default function Home() {
  const params = useParams();
  const id = params.id as string;

  const [estudiante, setEstudiante] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    // 1. Verificamos si hay una sesión guardada en localStorage
    const usuarioLocal = localStorage.getItem("usuario");
    
    if (!usuarioLocal) {
      setAutenticado(false);
      setLoading(false);
      return;
    }

    const usuario = JSON.parse(usuarioLocal);

    // Evitamos que un alumno vea el panel de otro alumno cambiando la URL
    if (usuario.id_estudiante.toString() !== id) {
      setAutenticado(false);
      setLoading(false);
      return;
    }

    setAutenticado(true);

    // 2. Si está autenticado, traemos sus datos de Supabase
    const fetchEstudiante = async () => {
      const { data, error } = await supabase
        .from("estudiante")
        .select("*")
        .eq("id_estudiante", Number(id))
        .single();

      if (data && !error) {
        setEstudiante(data);
      }
      setLoading(false);
    };

    fetchEstudiante();
  }, [id]);

  // Pantalla de carga mientras verificamos la sesión
  if (loading) {
    return (
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h2>Cargando tu panel...</h2>
      </main>
    );
  }

  // Si no hay sesión (o el ID no coincide), mostramos el componente SinSesion
  if (!autenticado) {
    return <SinSesion />;
  }

  // Si hay sesión pero el estudiante no existe en la BD
  if (!estudiante) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Alumno no encontrado en la base de datos</h1>
      </main>
    );
  }

  // Renderizamos el dashboard si todo está correcto
  return (
    <>
      <PanelAlumno estudiante={estudiante} />

      <div className="cont">
        <Calendario />
        <ProxAct />
      </div>

      <Tutores />
      <AsesoriasA />
    </>
  );
}