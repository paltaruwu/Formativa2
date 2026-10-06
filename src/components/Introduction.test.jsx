import React from 'react';
import { render, screen } from '@testing-library/react';
import { Introduction } from './Introduction';

describe('Componente Introduction', () => {
  const mockProps = {
    name: "Jennifer Lawrence",
    bio: "Actriz ganadora del Oscar",
    image: "test.jpg",
    socialLinks: { 
      imdb: "https://imdb.com",
      wikipedia: "https://wikipedia.org"
    }
  };

  it('debe renderizar el nombre, la biografía y la foto con texto alternativo (alt)', () => {
    render(<Introduction {...mockProps} />);

    expect(screen.getByText(/Jennifer Lawrence/i)).toBeTruthy();
    expect(screen.getByText(/Actriz ganadora del Oscar/i)).toBeTruthy();
    
    const imageElement = screen.getByAltText(/Foto de Jennifer Lawrence/i);
    expect(imageElement).toBeTruthy();
    expect(imageElement.getAttribute('src')).toBe('test.jpg');
  });

  it('debe renderizar los enlaces sociales a IMDb y Wikipedia correctamente', () => {
    render(<Introduction {...mockProps} />);

    const imdbLink = screen.getByRole('link', { name: /IMDb/i });
    const wikiLink = screen.getByRole('link', { name: /Wikipedia/i });

    expect(imdbLink.getAttribute('href')).toBe('https://imdb.com');
    expect(wikiLink.getAttribute('href')).toBe('https://wikipedia.org');
  });
});