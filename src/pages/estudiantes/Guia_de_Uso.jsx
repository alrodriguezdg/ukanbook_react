import React from 'react'
import HeaderEstudiante from '../../components/estudiantes/HeaderEstudiantes'
import SidebarEst from '../../components/estudiantes/SidebarEstudiantes';
import GuiaDeUso from '../../components/estudiantes/GuiaDeUso'
function Guia_de_Uso() {
    return (
        <div className="IndexEst">
            <HeaderEstudiante />
            <div className="row est">
                <SidebarEst />
                <GuiaDeUso />
            </div>
        </div>
    )
}

export default Guia_de_Uso
