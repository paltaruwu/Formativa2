import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

describe('Componente ProjectCard', () => {
  const mockProject = {
    id: 1,
    title: "The Hunger Games",
    description: "Interpretación de Katniss Everdeen.",
    technologies: ["Acción", "Drama"],
    image: "https://example.com/image.jpg",
    link: "https://www.imdb.com/title/tt1392170/"
  };

  it('debe renderizar la información de la película recibida por props', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('The Hunger Games')).toBeTruthy();
    expect(screen.getByText('Interpretación de Katniss Everdeen.')).toBeTruthy();
    expect(screen.getByText('Acción')).toBeTruthy();
    expect(screen.getByText('Drama')).toBeTruthy();
  });

  it('debe contener el enlace correcto a la demo o información de la película', () => {
    render(<ProjectCard project={mockProject} />);

    const buttonLink = screen.getByRole('link', { name: /Ver detalles/i });
    expect(buttonLink.getAttribute('href')).toBe(mockProject.link);
  });
});
