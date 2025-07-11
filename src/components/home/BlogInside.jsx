import React from 'react'
import Banner from '../Banner/banner'
import cardImage from '../../assets/images/home/inside/blog-ukanbook-60.jpg'

function BlogInside() {
    return (
        <div className="wrapper inside-ukanbook">
            <Banner Titulo="blog" Narticulo="NOMBRE ARTÍCULO" />

            <div class="container-fluid pt-80 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 article-container pb-3 ">
                            <img className="img-fluid imgFeatured" src={cardImage} />
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
                            <p>
                                Nuestro programa preicfes saber 11 virtual 2020, El Preicfes saber 11 virtual online, es un programa desarrollado de acuerdo a la estructura de las pruebas Icfes Saber 11°, donde nuestro equipo de docentes U. Nacional género estrategias a través de aulas virtuales, simulaciones y ponen a disposición
                            </p>


                            <p>
                                Nuestro programa preicfes saber 11 virtual 2020, El Preicfes saber 11 virtual online, es un programa desarrollado de acuerdo a la estructura de las pruebas Icfes Saber 11°, donde nuestro equipo de docentes U. Nacional género estrategias a través de aulas virtuales, simulaciones y ponen a disposición
                            </p>

                            <div className="float-right social-media">
                                <h3 style={{ fontSize: "19px" }}>Compartir:</h3>

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


                        <div className="col-12 col-md-4">
                            <div className="d-flex flex-column">
                                <div className="text-center">
                                    <h2>Categorias</h2>
                                    <p className="pt-2"><p>CIENCIAS NATURALES</p></p>
                                    <p className="pt-2"><p>CIENCIAS NATURALES</p></p>
                                    <p className="pt-2"><p>CIENCIAS NATURALES</p></p>
                                    <p className="pt-2"><p>CIENCIAS NATURALES</p></p>
                                    <p className="pt-2"><p>CIENCIAS NATURALES</p></p>
                                    <p className="pt-2"><p>CIENCIAS NATURALES</p></p>
                                    <p className="pt-2"><p>CIENCIAS NATURALES</p></p>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogInside
