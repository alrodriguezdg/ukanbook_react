import React from 'react'
import HeaderEstudiante from '../../components/estudiantes/HeaderEstudiantes'
import SidebarEst from '../../components/estudiantes/SidebarEstudiantes';
import Plan from '../../components/estudiantes/PlandeMejoramiento'

function PlandeMejoramiento() {
    return (
        <div className="IndexEst">
            <HeaderEstudiante />
            <div className="row est">
                <SidebarEst />
                <Plan />
            </div>
        </div>
    )
}

export default PlandeMejoramiento
