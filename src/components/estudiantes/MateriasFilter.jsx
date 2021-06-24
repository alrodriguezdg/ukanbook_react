import React from 'react';

import IconEnglish from "../../assets/images/home/index/iconos-materias-ukanbook-22.png";
import IconLanguage from "../../assets/images/home/index/iconos-materias-ukanbook-23.png";
import IconMath from "../../assets/images/home/index/iconos-materias-ukanbook-25.png";
import IconSocials from "../../assets/images/home/index/iconos-materias-ukanbook-26.png";
import IconNatural from "../../assets/images/home/index/iconos-materias-ukanbook-24.png";
import IconCritic from "../../assets/images/home/index/iconos-materias-ukanbook-27.png";
import IconSexual from "../../assets/images/home/index/iconos-materias-ukanbook-28.png";

const MateriasFilter = () => (
    <div className="row subjects-container inside text-center">
        <a href="#" className="card subject english">
            <img src={IconEnglish}/>
            <p>Inglés</p>
        </a>
        <a href="#" className="card subject language">
            <img src={IconLanguage} />
            <p>Lenguaje</p>
        </a>
        <a href="#" className="card subject natural">
            <img src={IconNatural} />
            <p>C. Naturales</p>
        </a>
        <a href="#" className="card subject math">
            <img src={IconMath} />
            <p>Matemáticas</p>
        </a>
        <a href="#" className="card subject socials">
            <img src={IconSocials} />
            <p>Sociales</p>
        </a>
        <a href="#" className="card subject critic">
            <img src={IconCritic} />
            <p>Lec. Crítica</p>
        </a>
        <a href="#" className="card subject sexual">
            <img src={IconSexual} />
            <p>Ed. Sexual</p>
        </a>
    </div>
);

export default MateriasFilter;