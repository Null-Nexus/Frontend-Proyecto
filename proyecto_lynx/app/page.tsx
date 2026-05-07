import Image from "next/image";
import Header from "./header/header";
import Calendario from "./calendario/calendario";
import PanelAlumno from "./PanelAlumno/PanelAlumno";
import ProxAct from "./ProxAct/ProxAct";
import AsesoriasA from "./AsesoriasA/AsesoriasA";
import Tutores from "./Tutores/Tutores";
import Footer from "./Footer/footer";
import Registro from "./Registro/Registro";

export default function Home() {
  return (
    <>

      <Header />
      <Registro />
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
