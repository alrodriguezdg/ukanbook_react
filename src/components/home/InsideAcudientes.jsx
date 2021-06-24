import React from 'react';
import AcudientesImg1 from '../../assets/images/home/inside/internas-ukanbook-50.png'
import AcudientesImg2 from '../../assets/images/home/inside/internas-ukanbook-51.png'

const InsideEstudiantes = () => (

    <div className="wrapper inside-ukanbook">
        <div class="inside-banner acudientes container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 align-self-center">
                        <h2>
                            ACUDIENTES
                            <small class="breadcrumb"> <a href="#">Home</a> - Acudientes</small>
                        </h2>
                    </div>
                </div>
            </div>
        </div> 
        <div class="container">
            <div class="row pt-80">
                <div class="col-md-6">
                    <h3>
                        DESEMPEÑO DEL ESTUDIANTE
                    </h3>
                    <p>
                        Ukanbook permite a los padres de familia y acudientes conocer los resultados de los estudiantes en las pruebas de cada una de las distintas materias y de esta forma, identificar las debilidades y las fortalezas de sus hijos. Asimismo, conocer el uso de la plataforma y cómo están aprovechando las herramientas que Ukanbook ofrece. De esta manera, los acudientes tienen la capacidad de monitorear y ser parte fundamental del éxito académico de sus hijos, al garantizar el aprovechamiento de los recursos de nuestra aula virtual.
                    </p>
                    <img src={AcudientesImg1} />
                </div>
                <div class="col-md-6 text-left">
                    <h3>
                        TUS PRUEBAS
                    </h3>
                   <p>
                    Los acudientes pueden ver el progreso que sus hijos logran en cada una de las materias o si por el contario, si los resultados de los estudiantes no mejoran sino que decaen. La plataforma cumple una doble función, por un lado diagnostica y puede alertar a los padres de familia acerca de altos y bajos en el rendimiento académico de sus hijos, y por otro lado, permite identificar las materias y las temáticas que presentan mayor dificultad al estudiante y también reforzar sus conocimientos gracias a las lecturas, las actividades interactivas y los videos explicativos que le proporciona Ukanbook para resolver sus dudas e inquietudes acerca de cada uno de los temas de las diferentes materias.
                    </p>
                    <img src={AcudientesImg2} />
                </div>
           </div>             
        </div>
    </div>
);

export default InsideEstudiantes;