import Image from "next/image";
import Header from "./header/header";
import Calendario from "./calendario/calendario";
import PanelAlumno from "./PanelAlumno/PanelAlumno";
import ProxAct from "./ProxAct/ProxAct";
import AsesoriasA from "./AsesoriasA/AsesoriasA";
import Tutores from "./Tutores/Tutores";
import Footer from "./Footer/footer";
import Inicio from "./Inicio/Inicio{i}/Inicio";

export default function Home() {
  return (
    <>

      <Header />
     
      <Inicio />
      <PanelAlumno />
      <div className="cont">     
         <Calendario />
         <ProxAct />
      </div>
      <Tutores />
      <AsesoriasA />
      <Footer />
    </>
  );
}
