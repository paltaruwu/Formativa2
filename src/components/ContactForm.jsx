import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h3 className="card-title fw-bold mb-3 text-dark">Contacto / Representación</h3>
        <p className="text-muted mb-4">
          Envía un mensaje para consultas sobre prensa, prensa de películas o representación artística.
        </p>

        {submitted && (
          <div className="alert alert-success alert-dismissible fade show" role="alert" data-testid="success-alert">
            <strong>¡Mensaje enviado con éxito!</strong> Nos pondremos en contacto contigo a la brevedad.
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setSubmitted(false)}
              aria-label="Cerrar"
            ></button>
          </div>
        )}

        <form onSubmit={handleSubmit} data-testid="contact-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Nombre Completo</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: María García"
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Correo Electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-semibold">Mensaje</label>
            <textarea 
              className="form-control" 
              id="message" 
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn px-4 fw-bold shadow-sm text-white"
            style={{ backgroundColor: '#8b0000', borderColor: '#a00000' }}
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};
