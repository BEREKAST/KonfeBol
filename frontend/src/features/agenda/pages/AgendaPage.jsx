// frontend/src/features/agenda/pages/AgendaPage.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './agenda-page.css';

// ⚠️ Normalizamos imports para evitar "object" en lugar de función
import * as CharlaCardModule from '../components/CharlaCard.jsx';
import * as AgendaFiltersModule from '../components/AgendaFilters.jsx';

const CharlaCard = (CharlaCardModule && CharlaCardModule.default) ? CharlaCardModule.default : CharlaCardModule;
const AgendaFilters = (AgendaFiltersModule && AgendaFiltersModule.default) ? AgendaFiltersModule.default : AgendaFiltersModule;

// (opcional) debug; comenta si molesta
// console.log('TYPES =>', { CharlaCard: typeof CharlaCard, AgendaFilters: typeof AgendaFilters });

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000/api/v1',
});

API.interceptors.request.use(cfg => {
  const t = localStorage.getItem('token');
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg;
});

export default function AgendaPage() {
  const { id } = useParams();
  const [charlas, setCharlas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  const [query, setQuery] = useState('');
  const [modalidad, setModalidad] = useState('all');
  const [sala, setSala] = useState('all');
  const [orden, setOrden] = useState('popularidad');

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    API.get(`/conferencias/${id}/agenda`)
      .then(r => setCharlas(Array.isArray(r.data?.data) ? r.data.data : []))
      .catch(err => {
        console.error('Error cargando agenda:', err);
        setError('No se pudo cargar la agenda.');
      })
      .finally(() => setLoading(false));
  }, [id]);

  const votar = async (charlaId, voto) => {
    try {
      await API.put(`/charlas/${charlaId}/voto`, { voto });
      const r = await API.get(`/charlas/${charlaId}`);
      const actualizada = r.data?.data;
      if (!actualizada) return;
      setCharlas(prev => prev.map(c => (c.id === charlaId ? actualizada : c)));
    } catch (err) {
      console.error('Error al votar:', err);
      alert('No se pudo registrar tu voto.');
    }
  };

  const filtradas = useMemo(() => {
    const t = query.trim().toLowerCase();
    const base = charlas.filter(c => {
      const okTexto =
        !t ||
        c.titulo?.toLowerCase().includes(t) ||
        c.descripcion?.toLowerCase().includes(t) ||
        c.orador?.toLowerCase().includes(t);
      const okMod  = modalidad === 'all' || c.modalidad === modalidad;
      const okSala = sala === 'all' || c.sala === sala;
      return okTexto && okMod && okSala;
    });
    const arr = [...base];
    if (orden === 'popularidad') arr.sort((a,b) => (b.likes||0)-(a.likes||0));
    if (orden === 'hora')        arr.sort((a,b) => new Date(a.fecha)-new Date(b.fecha));
    if (orden === 'duracion')    arr.sort((a,b) => (a.duracion||0)-(b.duracion||0));
    return arr;
  }, [charlas, query, modalidad, sala, orden]);

  // fallback de seguridad: si por algún motivo sigue llegando "object", renderizamos un encabezado simple
  const FiltersSafe = (typeof AgendaFilters === 'function')
    ? AgendaFilters
    : (props) => (
        <div className="agenda-header" style={{padding:'12px 0'}}>
          <h1 className="agenda-title">Programa de charlas</h1>
        </div>
      );

  return (
    <div className="agenda-wrap">
      <FiltersSafe
        conferencia="Konfebol 2025"
        query={query} setQuery={setQuery}
        modalidad={modalidad} setModalidad={setModalidad}
        sala={sala} setSala={setSala}
        orden={orden} setOrden={setOrden}
      />

      {loading && <div style={{padding:16}}>Cargando agenda…</div>}
      {error && <div style={{padding:16, color:'#b00020'}}>{error}</div>}

      {!loading && !error && (
        <div className="grid">
          {filtradas.length === 0
            ? <div style={{padding:16}}>No hay charlas que coincidan con tu búsqueda.</div>
            : filtradas.map(c =>
                (typeof CharlaCard === 'function')
                  ? <CharlaCard key={c.id} charla={c} onVote={votar} />
                  : <div key={c.id} className="charla-card">{c.titulo}</div>
              )}
        </div>
      )}
    </div>
  );
}
