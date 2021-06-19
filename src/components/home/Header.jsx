import React from 'react';
import Logo from "../../assets/images/home/general/logo-ukanbook-11.png";
import '../../assets/css/home/Header.css'

const HeaderHome = () => (
    <header>
        <div className="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fa fa-envelope"></i>
                                    <span>info@ukanbook.com</span>
                                </a>
                            </li>
                            <li>
                                <i className="fa fa-phone"></i>
                                (+57) 318 721 68 15 - (+57) 315 840 61 11 - (+57) 301 662 36 71
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 social-media text-right">
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
            </div>
        </div>
        <div className="container menu">
            <div className="row">
                <div className="col-md-4 align-self-center">
                    <a href="#">
                        <img src={Logo} alt="Ukanbook" />
                    </a>
                </div>
                <div className="col-md-8 text-right align-self-center">
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
                            <li>
                                <a href="#" className="btn btn-warning">Regístrate</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default HeaderHome;