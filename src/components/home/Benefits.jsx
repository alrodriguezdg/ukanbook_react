import React from 'react';
import IconDisponibilidad from "../../assets/images/home/index/iconos-beneficios-ukanbook-16.png";
import IconDesempeño from "../../assets/images/home/index/iconos-beneficios-ukanbook-17.png";
import IconPerfeccionamiento from "../../assets/images/home/index/iconos-beneficios-ukanbook-18.png";
import IconDiagnostico from "../../assets/images/home/index/iconos-beneficios-ukanbook-19.png";
import IconPreparacion from "../../assets/images/home/index/iconos-beneficios-ukanbook-20.png";
import IconAcompanamiento from "../../assets/images/home/index/iconos-beneficios-ukanbook-21.png";

 const Benefits = () =>(
    <div className="container benefits-container">
            <div className="row">
                <h2>NUESTROS BENEFICIOS</h2>
                <div className="col-md-4 card benefits">
                    <div className="content-benefit">
                        <img src={IconDisponibilidad} alt="Disponibilidad"/>
                        <div className="text-benefit">
                            <h4>DISPONIBILIDAD</h4>
                            <p>Aula virtual de evaluación escolar disponible las 24 horas del día los 7 días de la semana.</p>
                        </div>
                    </div>                       
                </div>
                <div className="col-md-4 card benefits">
                    <div className="content-benefit">
                        <img src={IconDesempeño} alt="Desempeño"/>                        
                        <div className="text-benefit">
                            <h4>DESEMPEÑO</h4>
                            <p>Identifica tu nivel de desempeño con base en los más de 113863 usuarios a nivel nacional.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-4 card benefits">
                    <div className="content-benefit">
                        <img src={IconPerfeccionamiento} alt="Perfeccionamiento"/>
                        <div className="text-benefit">
                            <h4>PERFECCIONAMIENTO</h4>
                            <p>Los usuarios tienen acceso a contenidos en formatos diferentes que les permitirán mejorar su desempeño.</p>
                        </div>
                    </div>                      
                </div>
                <div className="col-md-4 card benefits">
                    <div className="content-benefit">
                        <img src={IconDiagnostico} alt="Diagnóstico" />
                        <div className="text-benefit">
                            <h4>DIAGNÓSTICO</h4>
                            <p>Conoceras detalles estadísticos de tu desempeño de manera individual.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-4 card benefits">
                    <div className="content-benefit">
                        <img src={IconPreparacion} alt="Preparación"/>
                        <div className="text-benefit">
                            <h4>PREPARACIÓN</h4>
                            <p>Cada grado de escolaridad tiene a la mano un aula virtual de evaluación.</p>
                        </div>
                    </div>                        
                </div>
                <div className="col-md-4 card benefits">
                    <div className="content-benefit">
                        <img src={IconAcompanamiento}alt="Acompañamiento"/>
                        <div className="text-benefit">
                            <h4>ACOMPAÑAMIENTO</h4>
                            <p>Docentes, padres y acudientes podrán acompañar a los estudiantes en el proceso de aprendizaje.</p>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </div>
 )

 export default Benefits;