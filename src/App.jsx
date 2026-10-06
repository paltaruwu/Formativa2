import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Introduction } from './components/Introduction';
import { ProjectCard } from './components/ProjectCard';
import { NewsCard } from './components/NewsCard';
import { ContactForm } from './components/ContactForm';
import projectsData from './data/projects.json';
import newsData from './data/news.json';
import hungerGamesImg from './assets/hunger_games.png';
import silverLiningsImg from './assets/silver_linings.png';
import dontLookUpImg from './assets/dont_look_up.png';
import './App.css';

export const App = () => {
  const [projects, setProjects] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const posterMap = {
      1: hungerGamesImg,
      2: silverLiningsImg,
      3: dontLookUpImg
    };

    const updatedProjects = projectsData.map((project) => ({
      ...project,
      image: posterMap[project.id] || project.image
    }));

    setProjects(updatedProjects);
    setNews(newsData);
  }, []);

  const profileData = {
    name: "Jennifer Lawrence",
    bio: "Actriz ganadora del Premio de la Academia y productora de cine. Reconocida por sus papeles en The Hunger Games y Silver Linings Playbook.",
    image: "https://www.instyle.com/thmb/BbclsYbEE9w3SVCrW0NyrR7xebc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2249525116-9af6f4a4bfbb463e8f6d6887eb1b3504.jpg",
    socialLinks: {
      imdb: "https://www.imdb.com/name/nm2225369/",
      wikipedia: "https://es.wikipedia.org/wiki/Jennifer_Lawrence"
    }
  };

  return (
    <div className="bg-light min-vh-100 position-relative">
      <Navbar />
      <Introduction {...profileData} />

      <main className="container my-5">
        <section id="projects" className="mb-5">
          <h2 className="border-bottom pb-2 mb-4 fw-bold">Proyectos Cinematográficos</h2>
          <div className="row">
            {projects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </section>

        <section id="news" className="mb-5">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-4">
            <h2 className="fw-bold m-0">Últimas Noticias</h2>
            <span className="badge bg-dark px-3 py-2 fs-6">Prensa & Novedades</span>
          </div>
          <div className="row">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        </section>

        <section id="contact" className="mb-5">
          <h2 className="border-bottom pb-2 mb-4">Contacto</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;