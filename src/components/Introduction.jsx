import React from 'react';

export const Introduction = ({ name, bio, image, socialLinks }) => {
  // Estilos en línea para asegurar el fondo y botones cinemáticos
  const cinematicBgStyle = {
    background: 'linear-gradient(135deg, #0d0d0d 0%, #3a0d18 50%, #1a050b 100%)',
  };

  const cinematicBtnStyle = {
    backgroundColor: '#8b0000',
    borderColor: '#a00000',
    color: '#ffffff',
  };

  return (
    <section id="intro" className="text-white text-center py-5" style={cinematicBgStyle}>
      <div className="container">
        <img 
          src={image} 
          alt={`Foto de ${name}`} 
          className="rounded-circle mb-3 border border-3 border-white shadow"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <h1 className="fw-bold">{name}</h1>
        <p className="lead mx-auto" style={{ maxWidth: '600px' }}>{bio}</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          {socialLinks?.imdb && (
            <a 
              href={socialLinks.imdb} 
              target="_blank" 
              rel="noreferrer" 
              className="btn px-4 shadow-sm"
              style={cinematicBtnStyle}
            >
              IMDb
            </a>
          )}
          {socialLinks?.wikipedia && (
            <a 
              href={socialLinks.wikipedia} 
              target="_blank" 
              rel="noreferrer" 
              className="btn px-4 shadow-sm"
              style={cinematicBtnStyle}
            >
              Wikipedia
            </a>
          )}
        </div>
      </div>
    </section>
  );
};