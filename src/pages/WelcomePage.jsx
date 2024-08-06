
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'; // Asegúrate de que este archivo contiene los estilos proporcionados

import logo from '../assets/logo1.jpg';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/homepage'); // Redirige a la página de productos
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <img src={logo} alt="SoftSolution Logo" className="logo" />
        <h1>Bienvenidos a SoftSolution</h1>
        <button className="btn btn-primary" onClick={handleClick}>
          Haga su compra
        </button>
      </div>
      <footer className="welcome-footer">
        <p>© Deyvis Cruz - Correo: deyvis_cruz@soy.sena.edu.co - Ciudad: Bucaramanga</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
