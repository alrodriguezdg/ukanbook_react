import React from 'react'

function Estadisticas() {
    return (
        <div class="col-md-10">
            <div class="row">
                <div class="col-md-10 align-self-center info-course">
                    <ul>
                        <li class="subject english">

                        </li>
                        <li>
                            Curso
                            <span>
                                Inglés
                            </span>
                        </li>
                        <li>
                            Profesor
                            <span>
                                Usuario
                            </span>
                        </li>
                        <li>
                            Grado
                            <span>
                                7
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 align-self-center">
                    <a href="#" class="btn btn-block btn-md btn-danger">DESMATRICULAR</a>
                </div>
            </div>
            <div class="row detail-course">
                <div class="col-md-7 nav-course-inside">
                    <div class="content-detail">
                        <a href="#/estudiantes/VerCurso/1" >
                            Lecciones
                        </a>
                        <a href="#/estudiantes/VerCurso/1/foro" >
                            Foro
                        </a>
                        <a href="#/estudiantes/VerCurso/1/plan">
                            Plan de Mejoramiento
                        </a>
                        <a href="#/estudiantes/VerCurso/1/Estadisticas" class="active">
                            Estadísticas
                        </a>
                    </div>
                </div>
                <div class="col-md-5 align-self-center period-course-inside">
                    <div class="row">
                        <div class="col-md-6">
                            <h4>
                                Periodo Actual
                            </h4>
                            <ul>
                                <li class="current-period">
                                    1
                                </li>
                                <li>
                                    <a href="presentar-evaluacion.html" class="btn btn-block btn-success">Presentar Prueba</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h4>
                                Cambiar de periodo
                            </h4>
                            <ul class="periods">
                                <a href="#" class="active">
                                    1
                                </a>
                                <a href="#">
                                    2
                                </a>
                                <a href="#">
                                    3
                                </a>
                                <a href="#">
                                    4
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-content">
                <div class="col-md-12">
                    <h3>
                        Desempeño de la última evaluación presentada el 03-05-2021
                    </h3>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="statistics-bar">
                                <div class="row">
                                    <div class="col-md-8">
                                        Preguntas Correctas
                                    </div>
                                    <div class="col-md-4 text-right">
                                        <h2>50/100</h2>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="statistics-bar">
                                <div class="row">
                                    <div class="col-md-8">
                                        Preguntas Incorrectas
                                    </div>
                                    <div class="col-md-4 text-right">
                                        <h2>50/100</h2>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="statistics-bar">
                                <div class="row">
                                    <div class="col-md-8">
                                        Nivel de Desempeño
                                    </div>
                                    <div class="col-md-4 text-right">
                                        <h2>50/100</h2>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="statistics-bar">
                                <div class="row">
                                    <div class="col-md-8">
                                        Puntaje Global
                                    </div>
                                    <div class="col-md-4 text-right">
                                        <h2>500</h2>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-md-12 p-4 mt-4">
                    <h3>Desempeño por componentes</h3>
                    <div class="statistics-bar">
                        <div class="row mt-4">
                            <div class="col-md-4 align-self-center">
                                Lorem ipsum dolor sit amet consectetuer
                            </div>
                            <div class="col-md-8">
                                <div class="progress"  style={{height: "40px"}}>
                                    <div class="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-4 align-self-center">
                                Lorem ipsum dolor sit amet consectetuer
                            </div>
                            <div class="col-md-8">
                                <div class="progress" style={{height: "40px"}}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-4 align-self-center">
                                Lorem ipsum dolor sit amet consectetuer
                            </div>
                            <div class="col-md-8">
                                <div class="progress"  style={{height: "40px"}}>
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-md-12 p-4 mt-4">
                    <h3>Desempeño por competencias</h3>
                    <div class="statistics-bar">
                        <div class="row mt-4">
                            <div class="col-md-4 align-self-center">
                                Lorem ipsum dolor sit amet consectetuer
                            </div>
                            <div class="col-md-8">
                                <div class="progress"  style={{height: "40px"}}>
                                    <div class="progress-bar bg-info" role="progressbar"style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-4 align-self-center">
                                Lorem ipsum dolor sit amet consectetuer
                            </div>
                            <div class="col-md-8">
                                <div class="progress"  style={{height: "40px"}}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-4 align-self-center">
                                Lorem ipsum dolor sit amet consectetuer
                            </div>
                            <div class="col-md-8">
                                <div class="progress" style={{height: "40px"}}>
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Estadisticas
