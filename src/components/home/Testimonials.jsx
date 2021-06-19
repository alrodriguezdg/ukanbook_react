import React from 'react';
import Avatar from "../../assets/images/home/index/testimonio-59.png";

const Testimonials = () => (
    <section className="testimonials-container back-gray">
        <div className="container">
            <div className="row">
                <h2>
                    TESTIMONIOS
                </h2>
                <div className="testimonials">
                    <div>
                        <img src={Avatar} />
                        <div className="testimonial-text">
                            <p>
                            “Me parece una palaforma excelente por que me ayudo a aclarar muchos conceptos que no tenía claros”
                            </p>
                            <em>
                                - Angie Natalia Ayala Garcia<br />
                                Nacionalizado la Presentación
                            </em>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Testimonials;