import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('Componente ContactForm', () => {
  it('debe renderizar el título y todos los campos del formulario', () => {
    render(<ContactForm />);

    expect(screen.getByText(/Contacto \/ Representación/i)).toBeTruthy();
    expect(screen.getByLabelText(/Nombre Completo/i)).toBeTruthy();
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeTruthy();
    expect(screen.getByLabelText(/Mensaje/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /Enviar Mensaje/i })).toBeTruthy();
  });

  it('debe permitir a los usuarios escribir en los campos de texto', () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Nombre Completo/i);
    const emailInput = screen.getByLabelText(/Correo Electrónico/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);

    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
    fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hola, me gustaría contactar.' } });

    expect(nameInput.value).toBe('Juan Pérez');
    expect(emailInput.value).toBe('juan@example.com');
    expect(messageInput.value).toBe('Hola, me gustaría contactar.');
  });

  it('debe mostrar una alerta de éxito al enviar el formulario con datos válidos', () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Nombre Completo/i);
    const emailInput = screen.getByLabelText(/Correo Electrónico/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);
    const submitButton = screen.getByRole('button', { name: /Enviar Mensaje/i });

    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
    fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hola, me gustaría contactar.' } });

    fireEvent.click(submitButton);

    // Verificación en el DOM del mensaje de confirmación
    const alertElement = screen.getByTestId('success-alert');
    expect(alertElement).toBeTruthy();
    expect(screen.getByText(/¡Mensaje enviado con éxito!/i)).toBeTruthy();

    // Verificación de que los campos se resetean
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');
  });
});
