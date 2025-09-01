import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './features/auth/context/AuthContext';
import LoginPage from './features/auth/pages/LoginPage';

function AgendaPlaceholder() { return <div style={{padding:16}}>Agenda…</div>; }

function Header() {
  const { user, logout } = useAuth();
  return (
    <header style={{display:'flex',gap:12,alignItems:'center',padding:12,borderBottom:'1px solid #eee'}}>
      <Link to="/conferencias/1">Agenda</Link>
      <Link to="/login">Login</Link>
      <div style={{marginLeft:'auto'}}>
        {user ? (<>{user.nombre} ({user.role}) <button onClick={logout} style={{marginLeft:8}}>Salir</button></>)
              : 'No has iniciado sesión'}
      </div>
    </header>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/conferencias/:id" element={<AgendaPlaceholder />} />
          <Route path="*" element={<div style={{padding:16}}>Ir a <Link to="/login">/login</Link></div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
