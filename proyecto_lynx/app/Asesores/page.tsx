import AsesorAlumno from "./AsesorAlumno/AsesorAlumno";
import AsesorServicio from "./AsesorServicio/AsesorServicio";
import PanelAsesor from "./PanelAsesor/PanelAsesor";
import AsesorAgenda from "./AsesorAgenda/AsesorAgenda";
import AsesorCredenciales from "./AsesorCredenciales/AsesorCredenciales";
export default function AlumnoPage(){
    return(
        <>
        <PanelAsesor />
        <AsesorAlumno />
        <AsesorServicio />
        <AsesorAgenda />
        <AsesorCredenciales />
        </>
    );
}