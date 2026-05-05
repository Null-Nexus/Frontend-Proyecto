import Image from "next/image";
import Header from "./header/header";
import Calendario from "./calendario/calendario";
import PanelAlumno from "./PanelAlumno/PanelAlumno";
import ProxAct from "./ProxAct/ProxAct";
import Tutores from "./Tutores/Tutores";
import Footer from "./Footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <PanelAlumno />
      <Calendario />
      <ProxAct />
      <Tutores />
    </>
  );
}
      <Footer />
    </>
  );
}

