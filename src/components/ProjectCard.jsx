import React from 'react';

export const ProjectCard = ({ project }) => {
  const cinematicBtnStyle = {
    backgroundColor: '#8b0000',
    borderColor: '#a00000',
    color: '#ffffff',
    fontWeight: '600'
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img src={project.image} className="card-img-top" alt={project.title} style={{ height: '240px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-dark">{project.title}</h5>
          <p className="card-text text-secondary">{project.description}</p>
          <div className="mb-3">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="badge bg-dark me-1">{tech}</span>
            ))}
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer" 
            className="btn mt-auto shadow-sm text-white"
            style={cinematicBtnStyle}
          >
            Ver detalles
          </a>
        </div>
      </div>
    </div>
  );
};