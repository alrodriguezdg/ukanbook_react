import React from 'react';
import IconDocente from "../../assets/images/home/index/iconos-usuarios-ukanbook-12.png";
import IconEstudiantes from "../../assets/images/home/index/iconos-usuarios-ukanbook-13.png";
import IconAcudientes from "../../assets/images/home/index/iconos-usuarios-ukanbook-14.png";
import IconDirectivos from "../../assets/images/home/index/iconos-usuarios-ukanbook-15.png";
import IconDisponibilidad from "../../assets/images/home/index/iconos-beneficios-ukanbook-16.png";
import IconDesempeño from "../../assets/images/home/index/iconos-beneficios-ukanbook-17.png";
import IconPerfeccionamiento from "../../assets/images/home/index/iconos-beneficios-ukanbook-18.png";
import IconDiagnostico from "../../assets/images/home/index/iconos-beneficios-ukanbook-19.png";
import IconPreparacion from "../../assets/images/home/index/iconos-beneficios-ukanbook-20.png";
import IconAcompanamiento from "../../assets/images/home/index/iconos-beneficios-ukanbook-21.png";
import ImgFeatured from '../../assets/images/home/index/blog-ukanbook-60.jpg';
import IconEnglish from "../../assets/images/home/index/iconos-materias-ukanbook-22.png";
import IconLanguage from "../../assets/images/home/index/iconos-materias-ukanbook-23.png";
import IconMath from "../../assets/images/home/index/iconos-materias-ukanbook-25.png";
import IconSocials from "../../assets/images/home/index/iconos-materias-ukanbook-26.png";
import IconNatural from "../../assets/images/home/index/iconos-materias-ukanbook-24.png";
import IconCritic from "../../assets/images/home/index/iconos-materias-ukanbook-27.png";
import IconSexual from "../../assets/images/home/index/iconos-materias-ukanbook-28.png";
import Avatar from "../../assets/images/home/index/testimonio-59.png";
import Video from "../../assets/images/home/index/video-ukanbook-2021-63.jpg";

const IndexHome = () =>(
    <div className="wrapper">
        <section className="container-fluid main-banner pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 align-self-center">
                        <h3 className="text-banner">
                            <b>Ukanbook</b> es la plataforma de educación virtual donde podrás <b>mejorar tu rendimiento académico</b> y ser el <b>mejor en las pruebas saber.</b>
                        </h3>
                        <a href="#" className="btn btn-success support-whatsapp">
                            <i className="fab fa-whatsapp"></i>
                            Soporte Vía WhatsApp
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-12 align-self-center">
                        <div className="card login-form">
                            <h3>
                                <small>Si ya eres usuario registrado</small>
                                INICIA SESIÓN
                            </h3>
                            <form>
                                <input type="text" placeholder="Usuario" required />
                                <input type="password" placeholder="Contraseña" required />
                                <a href="#/estudiantes/index" className="btn btn-block btn-login btn-success">Iniciar Sesión</a>
                            </form>
                            <p>
                                ¿Aún no estás registrado? <a href="#">Regístrate Aquí</a>
                            </p>
                            <a href="#">¿Olvidaste tu contraseña?</a>
                            <a href="#" className="btn btn-warning">¿DESEA REALIZAR UNA DONACIÓN?</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container user-container pt-80">
            <div className="row">
                <h2>NUESTROS USUARIOS</h2>
                <div className="col-md-3 card users">
                    <img src={IconDocente} alt="Docentes" />
                    <h4>DOCENTES</h4>
                    <h3>2868</h3>
                </div>
                <div className="col-md-3 card users">
                    <img src={IconEstudiantes}  alt="Estudiantes" />
                    <h4>ESTUDIANTES</h4>
                    <h3>113863</h3>
                </div>
                <div className="col-md-3 card users">
                    <img src={IconAcudientes}  alt="Acudientes" />
                    <h4>ACUDIENTES</h4>
                    <h3>363</h3>
                </div>
                <div className="col-md-3 card users">
                    <img src={IconDirectivos}  alt="Directivos" />
                    <h4>DIRECTIVOS</h4>
                    <h3>364</h3>
                </div>
            </div>
        </div>
        <div className="container benefits-container pt-80">
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
        <section className="subjects pt-80">
            <div className="container">
                <h2>
                    NUESTRAS MATERIAS
                    <small>Descubre Algunos De Los Beneficios Que Te Brinda Ukanbook.</small>
                </h2>
                <div className="row subjects-container text-center">
                    <div className="card subject english">
                        <img src={IconEnglish}/>
                        <p>Inglés</p>
                    </div>
                    <div className="card subject language">
                        <img src={IconLanguage} />
                        <p>Lenguaje</p>
                    </div>
                    <div className="card subject natural">
                        <img src={IconNatural} />
                        <p>C. Naturales</p>
                    </div>
                    <div className="card subject math">
                        <img src={IconMath} />
                        <p>Matemáticas</p>
                    </div>
                    <div className="card subject socials">
                        <img src={IconSocials} />
                        <p>Sociales</p>
                    </div>
                    <div className="card subject critic">
                        <img src={IconCritic} />
                        <p>Lec. Crítica</p>
                    </div>
                    <div className="card subject sexual">
                        <img src={IconSexual} />
                        <p>Ed. Sexual</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonials-container back-gray pt-80">
            <div className="container">
                <div className="row">
                    <h2>
                        TESTIMONIOS
                    </h2>
                    <div className="testimonials">
                        <div>
                            <img src={Avatar} />
                            <div className="testimonial-text">
                                <p>
                                “Me parece una palaforma excelente por que me ayudo a aclarar muchos conceptos que no tenía claros”
                                </p>
                                <em>
                                    - Angie Natalia Ayala Garcia<br />
                                    Nacionalizado la Presentación
                                </em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid video back-gray pt-80">
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
        <section className="blog pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 article-container">
                        <img className="img-fluid imgFeatured" src={ImgFeatured} />
                        <div className="meta-blog">
                            <ul>
                                <li>
                                    <i className="fa fa-calendar"></i>
                                    17 Sep - 2021
                                </li>
                                <li>
                                    <i className="fa fa-user"></i>
                                    Admin
                                </li>
                            </ul>
                        </div>
                        <h3 className="title-article">
                            PREICFES VIRTUAL ONLINE
                        </h3>
                        <p>
                            Nuestro programa preicfes saber 11 virtual 2020, El Preicfes saber 11 virtual online, es un programa desarrollado de acuerdo a la estructura de las pruebas Icfes Saber 11°, donde nuestro equipo de docentes U. Nacional género estrategias a través de aulas virtuales, simulaciones y ponen a disposición
                        </p>
                        <a href="#">
                            Leer Más
                        </a>
                    </div>
                    <div className="col-md-4 article-container">
                        <img className="img-fluid imgFeatured" src={ImgFeatured} />
                        <div className="meta-blog">
                            <ul>
                                <li>
                                    <i className="fa fa-calendar"></i>
                                    17 Sep - 2021
                                </li>
                                <li>
                                    <i className="fa fa-user"></i>
                                    Admin
                                </li>
                            </ul>
                        </div>
                        <h3 className="title-article">
                            PREICFES VIRTUAL ONLINE
                        </h3>
                        <p>
                            Nuestro programa preicfes saber 11 virtual 2020, El Preicfes saber 11 virtual online, es un programa desarrollado de acuerdo a la estructura de las pruebas Icfes Saber 11°, donde nuestro equipo de docentes U. Nacional género estrategias a través de aulas virtuales, simulaciones y ponen a disposición
                        </p>
                        <a href="#">
                            Leer Más
                        </a>
                    </div>
                    <div className="col-md-4 article-container">
                        <img className="img-fluid imgFeatured" src={ImgFeatured} />
                        <div className="meta-blog">
                            <ul>
                                <li>
                                    <i className="fa fa-calendar"></i>
                                    17 Sep - 2021
                                </li>
                                <li>
                                    <i className="fa fa-user"></i>
                                    Admin
                                </li>
                            </ul>
                        </div>
                        <h3 className="title-article">
                            PREICFES VIRTUAL ONLINE
                        </h3>
                        <p>
                            Nuestro programa preicfes saber 11 virtual 2020, El Preicfes saber 11 virtual online, es un programa desarrollado de acuerdo a la estructura de las pruebas Icfes Saber 11°, donde nuestro equipo de docentes U. Nacional género estrategias a través de aulas virtuales, simulaciones y ponen a disposición
                        </p>
                        <a href="#">
                            Leer Más
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>

);

export default IndexHome;