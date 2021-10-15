import React from 'react'

function ursoInterno() {
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
                        <a href="#/estudiantes/VerCurso/1" class="active">
                            Lecciones
                        </a>
                        <a href="#/estudiantes/VerCurso/1/foro" >
                            Foro
                        </a>
                        <a href="#/estudiantes/VerCurso/1/plan">
                            Plan de Mejoramiento
                        </a>
                        <a href="#/estudiantes/VerCurso/1/Estadisticas" >
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

            <div class="row-content">
                <div class="row header-inside-course">
                    <div class="col-md-6 align-self-center">
                        <a href="#/estudiantes/VerCurso/1/">
                            ≤≤ Regresar al Plan de Mejoramiento
                        </a>
                    </div>
                    <div class="col-md-6 text-right bread">
                        Estudiar Lección / <span> PRESENT PERFECT TENSE</span>
                    </div>
                </div>
                <hr />
                <ul class="nav nav-tabs" id="tabLectura" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="lectura-tab" data-toggle="tab" href="#lectura" role="tab"
                            aria-controls="Lectura" aria-selected="true">Lectura</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="video-tab" data-toggle="tab" href="#video" role="tab"
                            aria-controls="video" aria-selected="false">Video</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="actividad-tab" data-toggle="tab" href="#actividad" role="tab"
                            aria-controls="actividad" aria-selected="false">Actividad</a>
                    </li>
                </ul>
                <div class="tab-content" id="tabLecturaContent">
                    <div class="tab-pane fade show active" id="lectura" role="tabpanel" aria-labelledby="lectura-tab">
                        <iframe src="https://s3.amazonaws.com/ukanbook2/LECTURAS_UKANBOOK/10/len/texto_narrativo_10.pdf"
                            frameborder="0" style={{ width: "100%", minHeight: "800px" }}></iframe>
                    </div>
                    <div class="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">
                        <iframe src="https://www.youtube.com/embed/HzZSh13dQVo" frameborder="0"
                            style={{ width: "100%", minHeight: "800px" }}> </iframe>
                    </div>
                    <div class="tab-pane fade" id="actividad" role="tabpanel" aria-labelledby="actividad-tab">
                        <iframe
                            src="https://s3.amazonaws.com/ukanbook2/LECCIONES_UKANBOOK/10/len/Texto_narrativo/actividad.html"
                            frameborder="0" style={{ width: "100%", minHeight: "800px" }}> </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ursoInterno
