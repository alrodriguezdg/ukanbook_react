import React from 'react';
import CursosDisponibles from '../../components/estudiantes/CursosDisponibles';
import HeaderEst from '../../components/estudiantes/HeaderEstudiantes';
import SidebarEst from '../../components/estudiantes/SidebarEstudiantes';

const IndexEst = () => (
    <div className="IndexEst">
        <HeaderEst />
        <div className="row est">
            <SidebarEst />
            <CursosDisponibles />
        </div>
    </div>
);

export default IndexEst;