import React from 'react'
import Banner from '../Banner/banner'

function InsideContacto() {
    return (
        <div className="wrapper inside-ukanbook">
            <Banner Titulo="contacto" />

            <div class="container-fluid pt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7">
                            <h2>ESCRÍBENOS</h2>
                            <p>Si tienes dudas o deseas recibir informacion más detallada, de como ukanbook te puede ayudar, por favor completa los siguientes campos y en breve nos pondremos en contacto contigo.</p>
                            <form className="pt-3">
                                <div className="form-group">
                                    <input type="text" class="form-control" placeholder="Usuario" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" class="form-control" placeholder="Contraseña" required />
                                </div>
                                <div className="form-group">
                                    <textarea style={{ resize: "none" }} rows="5" class="form-control" placeholder="Contraseña" required />
                                </div>
                                <a href="#/estudiantes/index" className="btn text-white" style={{ background: "#E67F20" }}>Enviar</a>
                            </form>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="d-flex flex-column">
                                <div className="text-center">
                                    <h2>CONTACTO</h2>
                                    <p className="pt-2"><p>Calle 95# 13-55 of 414,Bogota CO</p></p>
                                    <p className="pt-2"><p>Calle 95# 13-55 of 414,Bogota CO</p></p>
                                    <p className="pt-2"><p>Calle 95# 13-55 of 414,Bogota CO</p></p>
                                    <p className="pt-2"><p>Calle 95# 13-55 of 414,Bogota CO</p></p>
                                    <p className="pt-2"><p>Calle 95# 13-55 of 414,Bogota CO</p></p>
                                </div>
                                <div>
                                    <div className="text-center">
                                    <h2>HORARIO DE ATENCIÓN</h2>
                                    <p className="pt-2"><p>Calle 95# 13-55 of 414,Bogota CO</p></p>
                                    <p className="pt-2"><p>Calle 95# 13-55 of 414,Bogota CO</p></p>
                                    <p className="pt-2"><p>Calle 95# 13-55 of 414,Bogota CO</p></p>
                                    <p className="pt-2"><p>Calle 95# 13-55 of 414,Bogota CO</p></p>
                                    <p className="pt-2"><p>Calle 95# 13-55 of 414,Bogota CO</p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InsideContacto
