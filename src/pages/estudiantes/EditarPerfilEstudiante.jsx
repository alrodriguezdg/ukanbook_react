import React from 'react'
import HeaderEstudiante from '../../components/estudiantes/HeaderEstudiantes'
import SidebarEst from '../../components/estudiantes/SidebarEstudiantes';
import FormEditarEstudiante from '../../components/estudiantes/FormEditarEstudiante';


function EditarPerfilEstudiante() {
    return (
        <div className="IndexEst">
            <HeaderEstudiante />
            <div className="row est">
                <SidebarEst />
                <FormEditarEstudiante />
            </div>
        </div>
    )
}

export default EditarPerfilEstudiante
