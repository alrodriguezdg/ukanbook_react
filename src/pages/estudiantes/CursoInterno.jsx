import React from 'react'
import HeaderEstudiante from '../../components/estudiantes/HeaderEstudiantes'
import SidebarEst from '../../components/estudiantes/SidebarEstudiantes';
import CuroInterno from '../../components/estudiantes/ursoInterno'
function CursoInterno() {
    return (
        <div className="IndexEst">
            <HeaderEstudiante />
            <div className="row est">
                <SidebarEst />
                <CuroInterno />
            </div>
        </div>
    )
}

export default CursoInterno
