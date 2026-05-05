import Image from "next/image";
import Header from "./header/header";
import Calendario from "./calendario/calendario";
import PanelAlumno from "./PanelAlumno/PanelAlumno";
import ProxAct from "./ProxAct/ProxAct";
import AsesoriasA from "./AsesoriasA/AsesoriasA";
import Tutores from "./Tutores/Tutores";
import Footer from "./Footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <PanelAlumno />
      <div className="cont">     
         <Calendario />
         <ProxAct />
      </div>
      <AsesoriasA />
    </>
  );
}
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

