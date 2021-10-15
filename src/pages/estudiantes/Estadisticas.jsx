import React from 'react'
import HeaderEstudiante from '../../components/estudiantes/HeaderEstudiantes'
import SidebarEst from '../../components/estudiantes/SidebarEstudiantes';
import EstadisticasComponet from '../../components/estudiantes/Estadisticas'
function Estadisticas() {
    return (
        <div className="IndexEst">
            <HeaderEstudiante />
            <div className="row est">
                <SidebarEst />
                <EstadisticasComponet />
            </div>
        </div>
    )
}

export default Estadisticas
