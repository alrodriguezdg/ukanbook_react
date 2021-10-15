import React from 'react'

function ForoEstudiante() {
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
                        <a href="#/estudiantes/VerCurso/1/foro" class="active">
                            Foro
                        </a>
                        <a href="#/estudiantes/VerCurso/1/plan">
                            Plan de Mejoramiento
                        </a>
                        <a href="#/estudiantes/VerCurso/1/Estadisticas">
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
                    <div class="col-md-8">
                        <h3>Foro</h3>
                        <div class="forum-form">
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Compartir con el curso" rows="5"></textarea>
                                <div class="forum-send text-right">
                                    <label>Recuerda agregar una descripción a tu material compartido.</label>
                                    <button type="submit" class="btn  btn-primary">Publicar</button>
                                </div>
                            </div>
                        </div>
                        <div class="container bootstrap snippets bootdey">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="blog-comment">
                                        <ul class="comments">
                                        <li class="clearfix">
                                          <img src="https://bootdey.com/img/Content/user_1.jpg" class="avatar" alt=""/>
                                          <div class="post-comments">
                                              <p class="meta">Jul 18, 2021 <a href="usuario.html">Nombre Usuario</a> escribío: <i class="pull-right"><a href="#"><small>Responder</small></a></i></p>
                                              <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                  Etiam a sapien odio, sit amet
                                              </p>
                                          </div>
                                        </li>
                                        <li class="clearfix">
                                          <img src="https://bootdey.com/img/Content/user_2.jpg" class="avatar" alt=""/>
                                          <div class="post-comments">
                                            <p class="meta">Jul 18, 2021 <a href="usuario.html">Nombre Usuario</a> escribío: <i class="pull-right"><a href="#"><small>Responder</small></a></i></p>
                                            <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                  Etiam a sapien odio, sit amet
                                              </p>
                                          </div>
                                        
                                          <ul class="comments">
                                              <li class="clearfix">
                                                  <img src="https://bootdey.com/img/Content/user_3.jpg" class="avatar" alt=""/>
                                                  <div class="post-comments">
                                                        <p class="meta">Jul 18, 2021 <a href="usuario.html">Nombre Usuario</a> escribío: <i class="pull-right"><a href="#"><small>Responder</small></a></i></p>
                                                        <p>
                                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                          Etiam a sapien odio, sit amet
                                                        </p>
                                                  </div>
                                              </li>
                                          </ul>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h3>Estudiantes</h3>
                        <table class="table">
                            <tbody>
                              <tr>
                                <td>Nombre Estudiante</td>
                                <td class="text-right">
                                    <a href="#" class="btn btn-sm btn-outline-warning">ENVIAR MENSAJE</a>
                                </td>
                              </tr>
                              <tr>
                                <td>Nombre Estudiante</td>
                                <td class="text-right">
                                    <a href="#" class="btn btn-sm btn-outline-warning">ENVIAR MENSAJE</a>
                                </td>
                              </tr>
                              <tr>
                                <td>Nombre Estudiante</td>
                                <td class="text-right">
                                    <a href="#" class="btn btn-sm btn-outline-warning">ENVIAR MENSAJE</a>
                                </td>
                              </tr>
                              <tr>
                                <td>Nombre Estudiante</td>
                                <td class="text-right">
                                    <a href="#" class="btn btn-sm btn-outline-warning">ENVIAR MENSAJE</a>
                                </td>
                              </tr>
                              <tr>
                                <td>Nombre Estudiante</td>
                                <td class="text-right">
                                    <a href="#" class="btn btn-sm btn-outline-warning">ENVIAR MENSAJE</a>
                                </td>
                              </tr>
                              <tr>
                                <td>Nombre Estudiante</td>
                                <td class="text-right">
                                    <a href="#" class="btn btn-sm btn-outline-warning">ENVIAR MENSAJE</a>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                        <a href="estudiantes.html" class="btn btn-md btn-outline-primary">Ver todo</a>
                    </div>
                </div>

        </div>
    )
}

export default ForoEstudiante
