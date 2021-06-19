import React from 'react';
import IconEnglish from "../../assets/images/home/index/iconos-materias-ukanbook-22.png";
import IconLanguage from "../../assets/images/home/index/iconos-materias-ukanbook-23.png";
import IconMath from "../../assets/images/home/index/iconos-materias-ukanbook-25.png";
import IconSocials from "../../assets/images/home/index/iconos-materias-ukanbook-26.png";
import IconNatural from "../../assets/images/home/index/iconos-materias-ukanbook-24.png";
import IconCritic from "../../assets/images/home/index/iconos-materias-ukanbook-27.png";
import IconSexual from "../../assets/images/home/index/iconos-materias-ukanbook-28.png";


const Subjects = () => (
    <section className="subjects">
        <div className="container">
            <h2>
                NUESTRAS MATERIAS
                <small>Descubre Algunos De Los Beneficios Que Te Brinda Ukanbook.</small>
            </h2>
            <div className="row subjects-container text-center">
                <div className="card subject english">
                    <img src={IconEnglish}/>
                    <p>Inglés</p>
                </div>
                <div className="card subject language">
                    <img src={IconLanguage} />
                    <p>Lenguaje</p>
                </div>
                <div className="card subject natural">
                    <img src={IconNatural} />
                    <p>C. Naturales</p>
                </div>
                <div className="card subject math">
                    <img src={IconMath} />
                    <p>Matemáticas</p>
                </div>
                <div className="card subject socials">
                    <img src={IconSocials} />
                    <p>Sociales</p>
                </div>
                <div className="card subject critic">
                    <img src={IconCritic} />
                    <p>Lec. Crítica</p>
                </div>
                <div className="card subject sexual">
                    <img src={IconSexual} />
                    <p>Ed. Sexual</p>
                </div>
            </div>
        </div>
    </section>
)

export default Subjects;