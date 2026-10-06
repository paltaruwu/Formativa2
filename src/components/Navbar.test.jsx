import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Componente Navbar', () => {
  it('debe renderizar la marca principal y todos los enlaces de navegación', () => {
    render(<Navbar />);

    expect(screen.getByText('JLaw Portfolio')).toBeTruthy();
    expect(screen.getByText('Sobre Mí')).toBeTruthy();
    expect(screen.getByText('Películas')).toBeTruthy();
    expect(screen.getByText('Noticias')).toBeTruthy();
    expect(screen.getByText('Contacto')).toBeTruthy();
  });

  it('debe tener las referencias href correctas para la navegación responsiva', () => {
    render(<Navbar />);

    expect(screen.getByText('Sobre Mí').getAttribute('href')).toBe('#intro');
    expect(screen.getByText('Películas').getAttribute('href')).toBe('#projects');
    expect(screen.getByText('Noticias').getAttribute('href')).toBe('#news');
    expect(screen.getByText('Contacto').getAttribute('href')).toBe('#contact');
  });
});
