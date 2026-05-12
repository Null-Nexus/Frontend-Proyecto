import AsesorAlumno from "./AsesorAlumno/AsesorAlumno";
import AsesorServicio from "./AsesorServicio/AsesorServicio";
import PanelAsesor from "./PanelAsesor/PanelAsesor";
import AsesorAgenda from "./AsesorAgenda/AsesorAgenda";
export default function AlumnoPage(){
    return(
        <>
        <PanelAsesor />
        <AsesorAlumno />
        <AsesorServicio />
        <AsesorAgenda />
        </>
    );
}