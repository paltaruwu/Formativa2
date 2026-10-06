import React from 'react';
import mockingjayLogo from '../assets/mockingjay_logo.png';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#intro">
          <img 
            src={mockingjayLogo} 
            alt="Sinsajo en llamas" 
            className="rounded-circle shadow-sm"
            style={{ 
              width: '38px', 
              height: '38px', 
              objectFit: 'cover',
              border: '2px solid #ffd700',
              boxShadow: '0 0 8px rgba(255, 69, 0, 0.7)'
            }} 
          />
          <span>JLaw Portfolio</span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#intro">Sobre Mí</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Películas</a></li>
            <li className="nav-item"><a className="nav-link" href="#news">Noticias</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};