import React from 'react';

const TabCursosDisponibles = () => (
    <div className='wrapper' >
        <ul class="nav nav-tabs" id="tabUkanbook" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="ukanbook-tab" data-toggle="tab" href="#ukanbook" role="tab" aria-controls="ukanbook" aria-selected="true">Cursos en Ukanbook</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="institucion-tab" data-toggle="tab" href="#institucion" role="tab" aria-controls="institucion" aria-selected="false">Cursos en tus Institución</a>
            </li>
        </ul>
        <div class="tab-content" id="tabUkanbookContent">
            <div class="tab-pane fade show active" id="ukanbook" role="tabpanel" aria-labelledby="ukanbook-tab">
                <div className="row contentCourse">
                    <div className="col-md-2 card course text-center m-3">
                        <div className="courseHeader english">
                            <div className="courseGrade">
                                8
                            </div>
                        </div>
                        <div className="courseBody">
                            <h3 className="courseName">
                                CURSO DE LENGUAJE PARA GRADO 8
                            </h3>
                            <p className="courseTeacher">
                                Profesor: <span>Ukanbook</span>
                            </p>  
                        </div>
                        <div className="courseBtn">
                            <a href="#" className="btn btn-block btn-md btn-success">Matricular</a>
                            <a href="#" className="btn btn-block btn-md btn-warning">Contenidos</a>
                        </div>
                        <div className="CourseFooter">
                            <span className="tag english">
                                Inglés
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2 card course text-center m-3">
                        <div className="courseHeader language">
                            <div className="courseGrade">
                                8
                            </div>
                        </div>
                        <div className="courseBody">
                            <h3 className="courseName">
                                CURSO DE LENGUAJE PARA GRADO 8
                            </h3>
                            <p className="courseTeacher">
                                Profesor: <span>Ukanbook</span>
                            </p>                                                      
                        </div>
                        <div className="courseBtn">
                            <a href="#" className="btn btn-block btn-md btn-success">Matricular</a>
                            <a href="#" className="btn btn-block btn-md btn-warning">Contenidos</a>
                        </div>  
                        <div className="CourseFooter">
                            <span className="tag language">
                                Lenguaje
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2 card course text-center m-3">
                        <div className="courseHeader natural">
                            <div className="courseGrade">
                                8
                            </div>
                        </div>
                        <div className="courseBody">
                            <h3 className="courseName">
                                CURSO DE CIENCIAS NATURALES PARA GRADO 8
                            </h3>
                            <p className="courseTeacher">
                                Profesor: <span>Ukanbook</span>
                            </p>
                        </div>
                        <div className="courseBtn">
                            <a href="#" className="btn btn-block btn-md btn-success">Matricular</a>
                            <a href="#" className="btn btn-block btn-md btn-warning">Contenidos</a>
                        </div> 
                        <div className="CourseFooter">
                            <span className="tag natural">
                                Ciencias Naturales
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2 card course text-center m-3">
                        <div className="courseHeader math">
                            <div className="courseGrade">
                                8
                            </div>
                        </div>
                        <div className="courseBody">
                            <h3 className="courseName">
                                CURSO DE MATEMÁTICAS PARA GRADO 8
                            </h3>
                            <p className="courseTeacher">
                                Profesor: <span>Ukanbook</span>
                            </p>
                        </div>
                        <div className="courseBtn">
                            <a href="#" className="btn btn-block btn-md btn-success">Matricular</a>
                            <a href="#" className="btn btn-block btn-md btn-warning">Contenidos</a>
                        </div>  
                        <div className="CourseFooter">
                            <span className="tag math">
                                Matemáticas
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2 card course text-center m-3">
                        <div className="courseHeader sexual">
                            <div className="courseGrade">
                                8
                            </div>
                        </div>
                        <div className="courseBody">
                            <h3 className="courseName">
                                CURSO DE LENGUAJE PARA GRADO 8
                            </h3>
                            <p className="courseTeacher">
                                Profesor: <span>Ukanbook</span>
                            </p> 
                        </div>
                        <div className="courseBtn">
                            <a href="#" className="btn btn-block btn-md btn-success">Matricular</a>
                            <a href="#" className="btn btn-block btn-md btn-warning">Contenidos</a>
                        </div> 
                        <div className="CourseFooter">
                            <span className="tag sexual">
                                Educación Sexual
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="institucion" role="tabpanel" aria-labelledby="institucion-tab">
            <div className="row contentCourse">
                    <div className="col-md-2 card course text-center m-3">
                        <div className="courseHeader english">
                            <div className="courseGrade">
                                8
                            </div>
                        </div>
                        <div className="courseBody">
                            <h3 className="courseName">
                                CURSO DE LENGUAJE PARA GRADO 8
                            </h3>
                            <p className="courseTeacher">
                                Profesor: <span>Nombre Profesor</span>
                            </p>  
                        </div>
                        <div className="courseBtn">
                            <a href="#" className="btn btn-block btn-md btn-success">Matricular</a>
                            <a href="#" className="btn btn-block btn-md btn-warning">Contenidos</a>
                        </div>
                        <div className="CourseFooter">
                            <span className="tag english">
                                Inglés
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2 card course text-center m-3">
                        <div className="courseHeader language">
                            <div className="courseGrade">
                                8
                            </div>
                        </div>
                        <div className="courseBody">
                            <h3 className="courseName">
                                CURSO DE LENGUAJE PARA GRADO 8
                            </h3>
                            <p className="courseTeacher">
                                Profesor: <span>Nombre Profesor</span>
                            </p>                                                      
                        </div>
                        <div className="courseBtn">
                            <a href="#" className="btn btn-block btn-md btn-success">Matricular</a>
                            <a href="#" className="btn btn-block btn-md btn-warning">Contenidos</a>
                        </div>  
                        <div className="CourseFooter">
                            <span className="tag language">
                                Lenguaje
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2 card course text-center m-3">
                        <div className="courseHeader natural">
                            <div className="courseGrade">
                                8
                            </div>
                        </div>
                        <div className="courseBody">
                            <h3 className="courseName">
                                CURSO DE CIENCIAS NATURALES PARA GRADO 8
                            </h3>
                            <p className="courseTeacher">
                                Profesor: <span>Nombre Profesor</span>
                            </p>
                        </div>
                        <div className="courseBtn">
                            <a href="#" className="btn btn-block btn-md btn-success">Matricular</a>
                            <a href="#" className="btn btn-block btn-md btn-warning">Contenidos</a>
                        </div> 
                        <div className="CourseFooter">
                            <span className="tag natural">
                                Ciencias Naturales
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2 card course text-center m-3">
                        <div className="courseHeader math">
                            <div className="courseGrade">
                                8
                            </div>
                        </div>
                        <div className="courseBody">
                            <h3 className="courseName">
                                CURSO DE MATEMÁTICAS PARA GRADO 8
                            </h3>
                            <p className="courseTeacher">
                                Profesor: <span>Nombre Profesor</span>
                            </p>
                        </div>
                        <div className="courseBtn">
                            <a href="#" className="btn btn-block btn-md btn-success">Matricular</a>
                            <a href="#" className="btn btn-block btn-md btn-warning">Contenidos</a>
                        </div>  
                        <div className="CourseFooter">
                            <span className="tag math">
                                Matemáticas
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2 card course text-center m-3">
                        <div className="courseHeader sexual">
                            <div className="courseGrade">
                                8
                            </div>
                        </div>
                        <div className="courseBody">
                            <h3 className="courseName">
                                CURSO DE LENGUAJE PARA GRADO 8
                            </h3>
                            <p className="courseTeacher">
                                Profesor: <span>Nombre Profesor</span>
                            </p> 
                        </div>
                        <div className="courseBtn">
                            <a href="#" className="btn btn-block btn-md btn-success">Matricular</a>
                            <a href="#" className="btn btn-block btn-md btn-warning">Contenidos</a>
                        </div> 
                        <div className="CourseFooter">
                            <span className="tag sexual">
                                Educación Sexual
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default TabCursosDisponibles;