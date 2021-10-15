import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/react-fontawesome';
import './assets/css/home/General.css';
import './assets/css/home/Header.css';
import './assets/css/home/Home.css';
import './assets/css/home/Premium.css';
import './assets/css/home/Footer.css'

const Home = lazy(() => import('./pages/home/Index'))
const Estudiantes = lazy(() => import('./pages/home/Estudiantes'))
const Docentes = lazy(() => import('./pages/home/Docentes'))
const Acudientes = lazy(() => import('./pages/home/Acudientes'))
const Planes = lazy(() => import('./pages/home/Planes'))
const Contacto = lazy(() => import('./pages/home/Contacto'))
const Blog = lazy(() => import('./pages/home/Blog'))
const BlogInside = lazy(() => import('./pages/home/BlogInside'))


const IndexEst = lazy(() => import('./pages/estudiantes/IndexEstudiantes'))
const PerfilEstudiante = lazy(() => import('./pages/estudiantes/EditarPerfilEstudiante'))
const VideoTutorial = lazy(() => import('./pages/estudiantes/VideoTutorial'))
const GuiadeUso = lazy(() => import('./pages/estudiantes/Guia_de_Uso'))
const MisCursos = lazy(() => import('./pages/estudiantes/MisCursos'))
const VerCurso = lazy(() => import('./pages/estudiantes/VerCurso'))
const Foro = lazy(() => import('./pages/estudiantes/Foro'))
const PlandeMejoramiento = lazy(() => import('./pages/estudiantes/PlandeMejoramiento'))
const Estadisticas = lazy(() => import('./pages/estudiantes/Estadisticas'))
const CursoInterno = lazy(() => import('./pages/estudiantes/CursoInterno'))


function App() {
  return (
    <HashRouter basename="/">
      <Suspense fallback="">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/estudiantes" component={Estudiantes} />
          <Route exact path="/docentes" component={Docentes} />
          <Route exact path="/acudientes" component={Acudientes} />
          <Route exact path="/planes" component={Planes} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog-inside/:id" component={BlogInside} />
          <Route exact path="/estudiantes/index" component={IndexEst} />
          <Route exact path="/estudiantes/perfil" component={PerfilEstudiante} />
          <Route exact path="/estudiantes/videoTutorial" component={VideoTutorial} />
          <Route exact path="/estudiantes/Guiadeuso" component={GuiadeUso} />
          <Route exact path="/estudiantes/MisCursos" component={MisCursos} />
          <Route exact path="/estudiantes/VerCurso/:id" component={VerCurso} />
          <Route exact path="/estudiantes/VerCurso/:id/foro" component={Foro} />
          <Route exact path="/estudiantes/VerCurso/:id/plan" component={PlandeMejoramiento} />
          <Route exact path="/estudiantes/VerCurso/:id/Estadisticas" component={Estadisticas} />
          <Route exact path="/estudiantes/VerCurso/:id/interno" component={CursoInterno} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;