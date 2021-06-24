import React from 'react';
import HeaderHome from '../../components/home/Header';
import InsideEstudiantes from '../../components/home/InsideEstudiantes'
import Footer from '../../components/home/Footer';

const Estudiantes = () => (
    <div className="App">
        <HeaderHome />
        <InsideEstudiantes />
        <Footer />
    </div>
);

export default Estudiantes;