import Calendario from "../CalendarioA/calendario";
import PanelAlumno from "../PanelAlumno/PanelAlumno";
import ProxAct from "../ProxAct/ProxAct";
import AsesoriasA from "../AsesoriasA/AsesoriasA";
import Tutores from "../TutoresA/Tutores";
import { supabase } from "@/app/lib/supabase";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Home({ params }: Props) {

  // Esperar params
  const { id } = await params;

  // Buscar estudiante
  const { data: estudiante, error } = await supabase
    .from("estudiante")
    .select("*")
    .eq("id_estudiante", Number(id))
    .single();

  // Si no existe
  if (error || !estudiante) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Alumno no encontrado</h1>

        <p>ID recibido: {id}</p>

        <pre>
          {JSON.stringify(error, null, 2)}
        </pre>
      </main>
    );
  }

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