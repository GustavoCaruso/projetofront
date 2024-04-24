import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Calculadora from './Componentes/Calculadora.js';  
// import Login from './Pages/Login';
// import Home from './Pages/Home/index.js';
// import CadCargo from './Pages/Cadastros/CadCargo.js';
// import CadDepentente from './Pages/Cadastros/CadDependente.js';
// import CadBeneficio from './Pages/Cadastros/CadBeneficio.js';
// import CadCargo from './Pages/Cadastros/CadCargo.js';
import MainRoutes from './Routes.js';
import { BrowserRouter } from 'react-router-dom';

import 'bootswatch/dist/cosmo/bootstrap.css';
import 'toastr/build/toastr.min.js';
import 'toastr/build/toastr.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <MainRoutes></MainRoutes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
