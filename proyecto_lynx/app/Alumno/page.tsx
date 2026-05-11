import Calendario from "./CalendarioA/calendario";
import PanelAlumno from "./PanelAlumno/PanelAlumno";
import ProxAct from "./ProxAct/ProxAct";
import AsesoriasA from "./AsesoriasA/AsesoriasA";
import Tutores from "./TutoresA/Tutores";

export default function Home() {
  return (
    <>   
      <PanelAlumno />
      <div className="cont">     
         <Calendario />
         <ProxAct />
      </div>
      <Tutores />
      <AsesoriasA />
    </>
  );
}
