import React from 'react';
import LogoBlanco from '../../assets/images/home/general/logo-blanco-ukanbook-64.png'
import Respaldo from '../../assets/images/home/index/Web-ukanbook-2021-31.png'

const Footer = () => (
    <div className="wrapper">
        <section className="back pt-80">
            <div className="container">
                <h2>
                    CON EL RESPALDO Y APOYO DE
                </h2>
                <img src={Respaldo} />
            </div>
        </section>
        <footer>
            <div className="container pt-80">
                <div className="row">
                    <div className="col-md-4">
                        <img src={LogoBlanco} />
                        <p>
                            Ukanbook es la plataforma educación virtual donde podrás mejorar tu rendimiento académico y ser el mejor en las pruebas saber
                        </p>
                        <div className="social-media">
                            <p>Síguenos en:</p>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook"></i>                              
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>                               
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>                                
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Nuestros Usuarios</a>                                
                                </li>
                                <li>
                                    <a href="#">Planes</a>
                                </li>
                                <li>
                                    <a href="#">Contacto</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-4">
                        <h4>Contáctenos</h4>
                        <ul>
                            <li>
                            <i class="fas fa-map-marker"></i>
                                Calle 95 # 13-55 of 414, Bogotá CO
                            </li>
                            <li>
                                <i className="fa fa-phone"></i>
                                (+57) 318 721 68 15<br />
                                (+57) 315 840 61 11<br />
                                (+57) 301 662 36 71<br />
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                info@ukanbook.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="colophon">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            Copyright © 2021 <b>Ukanbook by UKANSUKA.</b> ALL Rights Reserved.
                        </div>
                        <div className="col-md-6 text-right">
                            <a href="#">Política de Privacidad | Términos y condiciones de uso</a>
                        </div>
                    </div>
                </div>            
            </div>
        </footer>
    </div>
)

export default Footer;