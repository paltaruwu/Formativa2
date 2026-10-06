import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NewsCard } from './NewsCard';

describe('Componente NewsCard', () => {
  const mockNews = {
    id: 1,
    category: "Cine & Producción",
    title: "Jennifer Lawrence produce nuevos proyectos",
    date: "15 Mar 2024",
    content: "A través de su productora Excellent Cadaver...",
    readTime: "3 min de lectura"
  };

  it('debe renderizar el título, la categoría, la fecha y el contenido de la noticia', () => {
    render(<NewsCard news={mockNews} />);

    expect(screen.getByText('Cine & Producción')).toBeTruthy();
    expect(screen.getByText('Jennifer Lawrence produce nuevos proyectos')).toBeTruthy();
    expect(screen.getByText(/15 Mar 2024/i)).toBeTruthy();
    expect(screen.getByText(/A través de su productora Excellent Cadaver/i)).toBeTruthy();
  });

  it('debe contener un botón para leer la nota que responda a clics', () => {
    spyOn(window, 'alert');
    render(<NewsCard news={mockNews} />);

    const readButton = screen.getByRole('button', { name: /Leer nota →/i });
    expect(readButton).toBeTruthy();

    fireEvent.click(readButton);
    expect(window.alert).toHaveBeenCalledWith('Visualizando noticia: "Jennifer Lawrence produce nuevos proyectos"');
  });
});
