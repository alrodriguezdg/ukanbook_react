import React from 'react';
import '../../assets/css/home/Index.css'

const BannerHome = () =>(
    <section className="container-fluid main-banner">
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
                            <button type="submit" className="btn btn-success">Iniciar Sesión</button>
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
);

export default BannerHome;