import React from 'react';
import Video from "../../assets/images/home/index/video-ukanbook-2021-63.jpg";

const VideoIndex = () =>(
    <section className="container-fluid video back-gray">
        <div className="container card">
            <div className="row">
                <div className="col-md-8 align-self-center">
                    <img className="img-fluid" src={Video} />
                </div>
                <div className="col-md-4 align-self-center advantage">
                    <h2>
                        VENTAJAS DE UKANBOOK
                    </h2>
                    <ul>
                        <li>
                            <b>Estadísticas de desempeño</b> por materia.
                        </li>
                        <li>
                            <b>Aula virtual 24 horas los 7 días de la semana</b> para que puedan estudiar en los horarios que mejor se les ajusten.
                        </li>
                        <li>
                            <b>Contenidos creados por docentes</b> para cada grado y materia.
                        </li>
                        <li>
                            <b>Plan de mejoramiento por materias.</b>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default VideoIndex;