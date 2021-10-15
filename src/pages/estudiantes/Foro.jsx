import React from 'react'
import HeaderEstudiante from '../../components/estudiantes/HeaderEstudiantes'
import SidebarEst from '../../components/estudiantes/SidebarEstudiantes';
import ForoEstudiante from '../../components/estudiantes/ForoEstudiante'
function Foro() {
    return (
        <div className="IndexEst">
            <HeaderEstudiante />
            <div className="row est">
                <SidebarEst />
                <ForoEstudiante/>
            </div>
        </div>
    )
}

export default Foro
