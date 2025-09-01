import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function LoginPage() {
  const { loginDev, loading } = useAuth();
  const navigate = useNavigate();

  const doLogin = async (email) => {
    try {
      await loginDev(email);
      navigate('/conferencias/1');
    } catch (e) {
      alert('Error de login dev. ¿Tienes los seeds en la DB?');
      console.error(e);
    }
  };

  if (loading) return <div style={{padding:16}}>Cargando…</div>;

  return (
    <div style={{maxWidth:420, margin:'40px auto', display:'grid', gap:12}}>
      <h1>Login (modo dev)</h1>
      <button onClick={() => doLogin('orador@demo.com')}>Entrar como Orador</button>
      <button onClick={() => doLogin('org@demo.com')}>Entrar como Organizador</button>
      <button onClick={() => doLogin('asistente@demo.com')}>Entrar como Asistente</button>
    </div>
  );
}
