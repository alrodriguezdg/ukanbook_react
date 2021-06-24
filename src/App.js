import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { HashRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/react-fontawesome';
import './assets/css/home/General.css';
import './assets/css/home/Header.css';
import './assets/css/home/Home.css';
import './assets/css/home/Premium.css';
import './assets/css/home/Footer.css'

const Home = lazy(()=>import('./pages/home/Index'))
const Estudiantes = lazy(()=>import('./pages/home/Estudiantes'))
const IndexEst = lazy(()=>import('./pages/estudiantes/IndexEstudiantes'))
const Docentes = lazy(()=>import('./pages/home/Docentes'))
const Acudientes = lazy(()=>import('./pages/home/Acudientes'))
const Planes = lazy(()=>import('./pages/home/Planes'))

function App() {
  return (
    <HashRouter  basename="/">
      <Suspense fallback="">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/estudiantes" component={Estudiantes} />
          <Route exact path="/estudiantes/index" component={IndexEst} />
          <Route exact path="/docentes" component={Docentes} /> 
          <Route exact path="/acudientes" component={Acudientes} />   
          <Route exact path="/planes" component={Planes} />             
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;