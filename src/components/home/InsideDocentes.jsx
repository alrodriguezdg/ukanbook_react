import React from 'react';
import DocentesImg1 from '../../assets/images/home/inside/internas-ukanbook-46.png'
import DocentesImg2 from '../../assets/images/home/inside/internas-ukanbook-47.png'
import DocentesImg3 from '../../assets/images/home/inside/internas-ukanbook-48.png'
import DocentesImg4 from '../../assets/images/home/inside/internas-ukanbook-49.png'

const InsideEstudiantes = () => (

    <div className="wrapper inside-ukanbook">
        <div class="inside-banner docentes container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 align-self-center">
                        <h2>
                            DOCENTES
                            <small class="breadcrumb"> <a href="#">Home</a> - Docentes</small>
                        </h2>
                    </div>
                </div>
            </div>
        </div> 
        <div class="container text-center">
           <div class="row pt-80">
                <div class="col-md-6 text-left align-self-center">
                    <h3>
                        ESTADÍSTICAS
                    </h3>
                    <p>
                        Los datos numéricos permiten tener un panorama tanto general como particular de los resultados de sus estudiantes y, por ende, ayudan a identificar las fortalezas y debilidades en cada materia evaluada en las pruebas. De esta manera, al conocer los resultados promedio del grupo y de cada uno de los estudiantes ofrece la posibilidad de establecer continuamente planes de mejoramiento pertinentes y adecuados, los cuales están enfocados en las necesidades reales de sus estudiantes.
                    </p>
                </div>
                <div class="col-md-6 align-self-center">
                    <img src={DocentesImg1} />
                </div>
           </div>
        </div>
        <div class="container-fluid back-gray pt-80">
            <div class="container">
                <div class="row pt-80">
                    <div class="col-md-6">
                        <h3>
                            PLANES DE MEJORAMIENTO
                        </h3>
                        <p>
                            A través de las estadísticas y de los resultados generales e individuales de los estudiantes, se pueden identificar tanto las fortalezas como las debilidades de un grupo de alumnos y a su vez establecer una solución efectiva para aquellas debilidades. En eso consisten los planes de mejoramiento, en trabajar y superar de forma interactiva aquellos aspectos o temáticas que representan más dificultad para los estudiantes optimizando la labor del docente.
                        </p>
                        <img src={DocentesImg2} />
                    </div>
                    <div class="col-md-6 text-left">
                        <h3>
                            MATERIAL DE APOYO
                        </h3>
                        <p>
                            Ukanbook cuenta con un gran material académico el cual expone y explica la totalidad de los temas evaluados, en las distintas materias en cada uno de los grados escolares, además está compuesto por lecturas, pruebas estandarizadas y preguntas sobre temas específicos. Estas herramientas pueden ser utilizadas y aprovechadas por el docente en cualquier punto de la etapa escolar disminuyendo así la cantidad de tiempo que dedica para la planeación de sus clases y actividades extracurriculares.
                        </p>
                        <img src={DocentesImg3} />
                    </div>
               </div>             
            </div>
        </div>
        <div class="container text-center">
            <div class="row pt-80">
                 <div class="col-md-6 align-self-center text-left">
                     <h3>
                        CREAR PRUEBAS
                     </h3>
                     <p>
                        Ukanbook ha desarrollado un amplio banco de preguntas construidas acorde con los más altos estándares educativos. Los docentes pueden aprovechar esta herramienta para realizar pruebas y evaluar los puntos o temas específicos que deben ser reforzados, según sus requerimientos o las necesidades académicas propias de sus estudiantes. El contar con esto brinda a los docentes la posibilidad de aplicar pruebas las veces que ellos consideren necesario, obteniendo informes estadísticos del desempeño de cada uno de sus estudiantes.
                     </p>
                 </div>
                 <div class="col-md-6 align-self-center">
                     <img src={DocentesImg4} />
                 </div>
            </div>
        </div>
    </div>
);

export default InsideEstudiantes;