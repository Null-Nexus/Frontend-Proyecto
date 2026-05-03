import Image from "next/image";
import Header from "./header/header";
import Calendario from "./calendario/calendario";
import PanelAlumno from "./PanelAlumno/PanelAlumno";
import ProxAct from "./ProxAct/ProxAct";

export default function Home() {
  return (
    <>
      <Header />
      <Calendario />
      <PanelAlumno />
      <ProxAct />
    </>
  );
}
}
