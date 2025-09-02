// frontend/src/shared/components/CommunityBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './community-bar.css';

export default function CommunityBar() {
  return (
    <footer className="kf-footer kf-footer--dark">
      {/* Contenido en columnas */}
      <div className="kf-f__container">
        <div className="kf-f__grid">
          <div className="kf-f__col">
            <h4 className="kf-f__title">Recursos para</h4>
            <ul className="kf-f__list">
              <li><Link to="/conferencias/1">Organizadores</Link></li>
              <li><Link to="/orador/mis-charlas">Oradores</Link></li>
              <li><Link to="/">Asistentes</Link></li>
              <li><Link to="/">Sponsors</Link></li>
              <li><Link to="/">Prensa</Link></li>
            </ul>
          </div>

          <div className="kf-f__col">
            <h4 className="kf-f__title">Por qué Konfebol</h4>
            <ul className="kf-f__list">
              <li><Link to="/">Impacto social</Link></li>
              <li><Link to="/">Cultura e inclusión</Link></li>
              <li><Link to="/">Código de conducta</Link></li>
              <li><Link to="/">Ética y seguridad</Link></li>
              <li><Link to="/">Casos de éxito</Link></li>
            </ul>
          </div>

          <div className="kf-f__col">
            <h4 className="kf-f__title">Aprendizaje</h4>
            <ul className="kf-f__list">
              <li><Link to="/">Guía para oradores</Link></li>
              <li><Link to="/">Cómo enviar tu charla</Link></li>
              <li><Link to="/">Buenas prácticas</Link></li>
              <li><Link to="/">Voluntariado</Link></li>
              <li><Link to="/">Mentorías</Link></li>
            </ul>
          </div>

          <div className="kf-f__col">
            <h4 className="kf-f__title">Noticias y eventos</h4>
            <ul className="kf-f__list">
              <li><Link to="/">Noticias</Link></li>
              <li><Link to="/conferencias/1">Agenda</Link></li>
              <li><Link to="/">Call for Papers</Link></li>
              <li><Link to="/">Workshops</Link></li>
              <li><Link to="/">Eventos aliados</Link></li>
            </ul>
          </div>

          <div className="kf-f__col">
            <h4 className="kf-f__title">Ponte en contacto</h4>
            <ul className="kf-f__list">
              <li>BO +591 800 000 000</li>
              <li><a href="mailto:hola@konfebol.org">hola@konfebol.org</a></li>
              <li><Link to="/">Línea de integridad</Link></li>
              <li><Link to="/">Accesibilidad</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior legal + redes */}
      <div className="kf-f__bottom">
        <div className="kf-f__container kf-f__bottom-wrap">
          <div className="kf-f__legal">
            © {new Date().getFullYear()} Konfebol
            <span className="kf-f__sep">|</span>
            <Link to="/">Términos de uso y privacidad</Link>
            <span className="kf-f__sep">|</span>
            <Link to="/">Preferencias de cookies</Link>
            <span className="kf-f__sep">|</span>
            <Link to="/">Oportunidades laborales</Link>
          </div>

          <div className="kf-f__social">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="kf-f__icon"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="kf-f__icon"
              aria-label="YouTube"
              title="YouTube"
            >
              ▶
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="kf-f__icon"
              aria-label="Instagram"
              title="Instagram"
            >
              ◎
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
