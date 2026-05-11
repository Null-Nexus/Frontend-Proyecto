import AsesorAlumno from "./AsesorAlumno/AsesorAlumno";
import AsesorServicio from "./AsesorServicio/AsesorServicio";
import PanelAsesor from "./PanelAsesor/PanelAsesor";

export default function AlumnoPage(){
    return(
        <>
        <PanelAsesor />
        <AsesorAlumno />
        <AsesorServicio />
        </>
    );
}