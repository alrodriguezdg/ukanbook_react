import React from 'react';
import MateriasFilter from './MateriasFilter';
import TabCursosDisponibles from './TabCursosDisponibles';

const CursosDisponibles = () => (
    <div class="col-md-10">
        <div class="row-content">
            <h3 className="titleInside">Cursos Disponibles
            <small>Selecciona la materia de tu interes</small>
            </h3>            
            <MateriasFilter />
        </div>
        <div class="row-content">
            <h3 className="titleInside">Selecciona el curso al que te deseas matricular
            </h3>   
            <TabCursosDisponibles />
        </div>                
    </div>
); 

export default CursosDisponibles;