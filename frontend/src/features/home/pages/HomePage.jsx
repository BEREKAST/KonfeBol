import React from 'react';
import { Link } from 'react-router-dom';
import './home-page.css';


export default function HomePage() {
  return (
    <div className="home-wrap">
      {/* Hero principal */}
      <section className="home-hero">
        <h1>Bienvenido a <span className="highlight">Konfebol</span></h1>
        <p>Tu plataforma para conferencias, charlas y networking en Bolivia y LATAM.</p>
        <div className="hero-actions">
          <Link to="/conferencias/1" className="btn btn-primary">Ver Agenda</Link>
          <Link to="/login" className="btn btn-secondary">Ingresar</Link>
        </div>
      </section>

      {/* Bloques de información */}
      <section className="home-grid">
        <div className="card">
          <h2>📢 Noticias</h2>
          <p>Mantente al día con las últimas actualizaciones de Konfebol y el mundo tech.</p>
          <Link to="/noticias" className="link">Leer más</Link>
        </div>
        <div className="card">
          <h2>🎤 Próximas Conferencias</h2>
          <p>Descubre eventos que se vienen pronto y guarda tus favoritos.</p>
          <Link to="/conferencias/1" className="link">Explorar agenda</Link>
        </div>
        <div className="card">
          <h2>🤝 Comunidad</h2>
          <p>Conecta con oradores, organizadores y otros asistentes.</p>
          <Link to="/comunidad" className="link">Unirme</Link>
        </div>
      </section>
    </div>
  );
}
