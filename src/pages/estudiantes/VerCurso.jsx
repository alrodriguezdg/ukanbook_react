import React from 'react'
import HeaderEstudiante from '../../components/estudiantes/HeaderEstudiantes'
import SidebarEst from '../../components/estudiantes/SidebarEstudiantes';
import VerCursoComponent from '../../components/estudiantes/VerCurso'

function VerCurso() {
    return (
        <div className="IndexEst">
            <HeaderEstudiante />
            <div className="row est">
                <SidebarEst />
                <VerCursoComponent />
            </div>
        </div>
    )
}

export default VerCurso
