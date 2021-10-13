import React from 'react'
import HeaderEstudiante from '../../components/estudiantes/HeaderEstudiantes'
import SidebarEst from '../../components/estudiantes/SidebarEstudiantes';
import MiscursosComponent from '../../components/estudiantes/MisCursos'

function MisCursos() {
    return (
        <div className="IndexEst">
            <HeaderEstudiante />
            <div className="row est">
                <SidebarEst />
                <MiscursosComponent />
            </div>
        </div>
    )
}

export default MisCursos
