import React from 'react';
import './agenda-filters.css';

export default function AgendaFilters({
  conferencia = 'Konfebol 2025',
  query, setQuery,
  modalidad, setModalidad,
  orden, setOrden,
  sala, setSala,
}) {
  return (
    <div className="af-wrap">
      <div className="af-row">
        <span className="chip chip-static">{conferencia}</span>

        <input
          className="af-search"
          placeholder="Buscar por charla, orador o tema"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        <select className="chip" value={modalidad} onChange={e => setModalidad(e.target.value)}>
          <option value="all">Todas las modalidades</option>
          <option value="presencial">Presencial</option>
          <option value="virtual">Virtual</option>
        </select>

        <select className="chip" value={sala} onChange={e => setSala(e.target.value)}>
          <option value="all">Todas las salas</option>
          <option value="Auditorio A">Auditorio A</option>
          <option value="Sala Virtual 1">Sala Virtual 1</option>
        </select>

        <select className="chip" value={orden} onChange={e => setOrden(e.target.value)}>
          <option value="popularidad">Ordenar: Popularidad</option>
          <option value="hora">Ordenar: Hora</option>
          <option value="duracion">Ordenar: Duración</option>
        </select>

        <button className="chip">Más filtros</button>
      </div>

      <div className="af-row af-sub">
        <div className="title">Programa de charlas</div>
        <div className="actions">
          <button className="btn">Hoy</button>
          <button className="btn">Mañana</button>
          <button className="btn">Ver mapa</button>
        </div>
      </div>
    </div>
  );
}
