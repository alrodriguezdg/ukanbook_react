import React from 'react';
import LogoBlanco from '../../assets/images/home/general/logo-blanco-ukanbook-64.png'
import '../../assets/css/estudiantes/HeaderEst.css'
import '../../assets/css/estudiantes/GeneralEst.css'

const HeaderEstudiante = () => (
    <header>
        <div class="container-fluid back-orange">
            <div class="row">
                <div class="col-md-4 align-self-center">
                    <a href="#">
                        <img class="logo-inside" src={LogoBlanco} />
                    </a>                    
                </div>
                <div class="col-md-8 text-right align-self-center">
                    
                </div>
            </div>
        </div>
    </header>
);

export default HeaderEstudiante;