import React from 'react';
import EstudiantesImg1 from '../../assets/images/home/inside/internas-ukanbook-42.png'
import EstudiantesImg2 from '../../assets/images/home/inside/internas-ukanbook-43.png'
import EstudiantesImg3 from '../../assets/images/home/inside/internas-ukanbook-44.png'
import EstudiantesImg4 from '../../assets/images/home/inside/internas-ukanbook-45.png'

const InsideEstudiantes = () => (

    <div className="wrapper inside-ukanbook">
        <div className="inside-banner estudiantes container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 align-self-center">
                        <h2>
                            ESTUDIANTES
                            <small className="breadcrumb"> <a href="#">Home</a> - Estudiantes</small>
                        </h2>
                    </div>
                </div>
            </div>
        </div> 
        <div className="container text-center pt-80">
           <div className="row">
                <div className="col-md-6 text-left align-self-center">
                    <h3>
                        HERRAMIENTAS DE ESTUDIO
                    </h3>
                    <p>
                        En Ukanbook podrás disponer de herramientas como videos, actividades lúdicas y lecturas que te permitirán entender de manera práctica muchas de las temáticas que podrían parecerte difíciles. Igualmente, podrás visualizar cómo progresan tus habilidades y las que necesitan fortalecerse. Así lograrás prepararte no solo para las evaluaciones escolares sino también para tu vida.
                    </p>
                </div>
                <div className="col-md-6 align-self-center">
                    <img src={EstudiantesImg1} />
                </div>
           </div>
        </div>
        <div className="container-fluid back-gray pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>
                            ¿CÓMO POTENCIALIZAS TUS HABILIDADES?
                        </h3>
                        <p>
                            Con las pruebas que ofrece Ukanbook conocerás tu desempeño, también encontrarás materiales de apoyo que te permitirán aprender a tu propia manera. Por ello, las pruebas están diseñadas para que en los resultados sea posible identificar cuáles son tus debilidades y fortalezas. Además, en el material de apoyo te divertirás con las actividades, reforzarás tus conocimientos acerca de los temas de las lecturas
                        </p>
                        <img src={EstudiantesImg2} />
                    </div>
                    <div className="col-md-6 text-left">
                        <h3>
                            TUS PRUEBAS
                        </h3>
                       <p>
                            Cada materia tiene un banco de preguntas que te permitirá acceder a múltiples opciones y elegir cuáles son las más adecuadas para mejorar tu desempeño. Asimismo, Ukanbook te brindará la oportunidad de aumentar tu nivel a través del material de apoyo y llevar un registro detallado de tu rendimiento, el de tus compañeros y otros estudiantes de diferentes regiones, con el fin de fortalecer tus conocimientos y mejorar tu proceso de aprendizaje.
                        </p>
                        <img src={EstudiantesImg3}/>
                    </div>
               </div>             
            </div>
        </div>
        <div className="container text-center pt-80">
            <div className="row">
                 <div className="col-md-6 align-self-center text-left">
                     <h3>
                        TUS CLASES
                     </h3>
                     <p>
                        Las video clases que ofrece Ukanbook están diseñadas para que puedas escoger la herramienta que más facilite tu aprendizaje. Para ello, existen diversas opciones como lecturas con temas completos e información de fácil acceso; actividades lúdicas que te permitan aprender jugando; y las pruebas evaluativas con múltiple respuesta para determinar lo que has aprendido en tu etapa escolar.
                     </p>
                 </div>
                 <div className="col-md-6 align-self-center">
                     <img src={EstudiantesImg4} />
                 </div>
            </div>
        </div>
    </div>
);

export default InsideEstudiantes;