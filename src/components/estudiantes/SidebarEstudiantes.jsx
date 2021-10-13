import React from 'react';

const Sidebar = () => (
<sidebar class="col-md-2">
    <div class="menu-side student">
        <ul>
            <li>
                <a href="#/estudiantes/MisCursos">
                    <i class="fa fa-book-open"></i>
                    Mis cursos
                </a>
            </li>
            <li>
                <a href="#/estudiantes/index">
                    <i class="fa fa-book"></i>
                    Cursos Disponibles
                </a>
            </li>
            <li>
                <a href="#/estudiantes/index">
                    <i class="fa fa-bookmark"></i>
                    Cursos Adquiridos
                </a>
            </li>
            <li>
                <a href="#/estudiantes/index">
                    <i class="fa fa-briefcase"></i>
                    Comprar Cursos
                </a>
            </li>
            <li>
                <a href="#/estudiantes/Guiadeuso">
                    <i class="fa fa-map"></i>
                    Guía de Uso
                </a>
            </li>
            <li>
                <a href="#/estudiantes/videoTutorial">
                    <i class="fa fa-play-circle"></i>
                    Videotutorial
                </a>
            </li>
            <li>
                <a href="#/estudiantes/perfil">
                    <i class="fa fa-user"></i>
                    Editar Perfil
                </a>
            </li>
            <li>
                <a href="#/estudiantes/index">
                    <i class="fa fa-cog"></i>
                    Cambiar Contraseña
                </a>
            </li>
            <li>
                <a href="#/estudiantes/index">
                    <i class="fa fa-door-open"></i>
                    Salir
                </a>
            </li>
        </ul>
    </div>
</sidebar>
);

export default Sidebar;
