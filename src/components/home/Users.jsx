import React from 'react';
import IconDocente from "../../assets/images/home/index/iconos-usuarios-ukanbook-12.png";
import IconEstudiantes from "../../assets/images/home/index/iconos-usuarios-ukanbook-13.png";
import IconAcudientes from "../../assets/images/home/index/iconos-usuarios-ukanbook-14.png";
import IconDirectivos from "../../assets/images/home/index/iconos-usuarios-ukanbook-15.png";

const Users = () => (
    <div className="container user-container">
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
)

export default Users;