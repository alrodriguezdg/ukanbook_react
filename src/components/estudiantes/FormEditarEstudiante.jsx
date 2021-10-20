import React, { useState } from 'react'

function FormEditarEstudiante() {
    let Cursos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]

    const [CursoActivo, setCursoActivo] = useState(8)

    return (
        <div class="col-md-10 row-content">
            <div class="row">
                <div class="col-md-8">
                    <form>
                        <div class="form-row">
                            <div class="col-md-2">
                                <div class="avatar-wrapper">
                                    <img class="profile-pic" src="https://www.bootdey.com/img/Content/user_1.jpg" />
                                    <div class="upload-button">
                                        <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                                    </div>
                                    <input class="file-upload" type="file" accept="image/*" />
                                </div>
                            </div>
                            <div class="form-group col-md-10">
                                <h3>
                                    Datos de Perfil
                                </h3>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress2">Nombre</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress2">Apellido</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <label for="inputEmail4">Correo Electrónico</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputAddress">Celular</label>
                                <input type='number' class="form-control" />
                            </div>
                            <div class="form-group col-md-4">
                                <label>Fecha de Nacimiento</label>
                                <input type='number' class="form-control" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Género</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Elegir...</option>
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                </select>
                            </div>
                            <div class="col-md-12 text-right">
                                <button type="submit" class="btn btn-success mt-3">Actualizar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-4">
                    <div class="form-group col-md-12">
                        <h3>
                            Cambiar Contraseña
                        </h3>

                        <label>Contraseña antigua</label>
                        <input type="password" class="form-control" />
                        <label>Contraseña nueva</label>
                        <input type="password" class="form-control" />
                        <label>Confirmar Contraseña</label>
                        <input type="password" class="form-control" />
                    </div>
                    <div class="col-md-12 text-right">
                        <button type="submit" class="btn btn-success mt-3">Actualizar</button>
                    </div>
                </div>
            </div>
            <div class="row grades">
                <div class="col-md-8">
                    <h3>
                        Grado Actual
                    </h3>
                    <span class="current-grade">
                        {CursoActivo + 1}
                    </span>

                    <h4>
                        Seleccionar Grado
                    </h4>
                    <ul>
                        {/* class="active" */}
                        {

                            Cursos.map((item, index) => (
                                <li>
                                    <a onClick={(e) => {
                                        e.preventDefault();
                                        setCursoActivo(index)
                                    }} className={index === CursoActivo && "active"}>
                                        {item}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div class="col-md-12 text-right">
                        <button type="submit" class="btn btn-success mt-3">Actualizar Grado</button>
                    </div>
                </div>
                <div class="col-md-4 current-institution">
                    <h3>Institución Actual</h3>
                    <h4>Ukanbook</h4>
                    <hr />
                    <div class="form-group col-md-12">
                        <label for="inputState">Seleccionar Institución</label>
                        <select id="inputState" class="form-control">
                            <option selected>Elegir...</option>
                            <option>Ukanbook</option>
                        </select>
                    </div>
                    <div class="col-md-12 text-right">
                        <button type="submit" class="btn btn-success mt-3">Actualizar Institución</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormEditarEstudiante
