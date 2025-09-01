// frontend/src/App.js
import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { AuthProvider, useAuth } from './features/auth/context/AuthContext';
import AppRoutes from './app/router/AppRoutes.jsx';

// estilos globales y del header
import './shared/styles/base.css';
import './shared/styles/header.css';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="ic-header">
      {/* Marca / logo */}
      <div className="ic-brand">
        <NavLink to="/conferencias/1" className="ic-brand__link">
          <span className="ic-brand__logo">Konfe</span><span className="ic-brand__logo--light">bol</span>
          <span className="ic-brand__mark" aria-hidden>◻︎</span>
        </NavLink>
      </div>

      {/* Navegación */}
      <nav className="ic-nav">
        <NavLink to="/conferencias/1" className={({isActive}) => `ic-nav__link ${isActive?'is-active':''}`}>Agenda</NavLink>
        <NavLink to="/orador/mis-charlas" className={({isActive}) => `ic-nav__link ${isActive?'is-active':''}`}>Charlas</NavLink>
        <NavLink to="/conferencias/1" className={({isActive}) => `ic-nav__link ${isActive?'is-active':''}`}>Salas</NavLink>
        <NavLink to="/conferencias/1" className={({isActive}) => `ic-nav__link ${isActive?'is-active':''}`}>Organizadores</NavLink>
      </nav>

      {/* Acciones derecha */}
      <div className="ic-actions">
        <NavLink to="/conferencias/1" className="ic-actions__link">Publica tu charla</NavLink>

        {user ? (
          <>
            <span className="ic-user">{user.nombre} ({user.role})</span>
            <button className="ic-btn ic-btn--solid" onClick={logout}>Salir</button>
          </>
        ) : (
          <NavLink to="/login" className="ic-btn ic-btn--solid">Ingresar</NavLink>
        )}
      </div>
    </header>
  );
}


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main className="app-main">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}
