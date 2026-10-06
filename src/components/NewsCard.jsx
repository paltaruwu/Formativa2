import React from 'react';

export const NewsCard = ({ news }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div 
        className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden position-relative news-card"
        style={{
          borderTop: '4px solid #8b0000',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          backgroundColor: '#ffffff'
        }}
      >
        <div className="card-body p-4 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span 
              className="badge px-3 py-2 text-white" 
              style={{ backgroundColor: '#8b0000', fontSize: '0.75rem', fontWeight: '600' }}
            >
              {news.category || 'Noticia'}
            </span>
            <small className="text-muted fw-semibold">
              📅 {news.date}
            </small>
          </div>

          <h5 className="card-title fw-bold text-dark mb-3" style={{ lineHeight: '1.4' }}>
            {news.title}
          </h5>

          <p className="card-text text-secondary mb-4 flex-grow-1" style={{ fontSize: '0.95rem' }}>
            {news.content}
          </p>

          <div className="pt-3 border-top d-flex justify-content-between align-items-center mt-auto">
            <small className="text-muted">
              ⏱️ {news.readTime || '3 min'}
            </small>
            <button 
              className="btn btn-sm btn-outline-dark fw-semibold"
              style={{ borderRadius: '20px' }}
              onClick={() => alert(`Visualizando noticia: "${news.title}"`)}
            >
              Leer nota →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
