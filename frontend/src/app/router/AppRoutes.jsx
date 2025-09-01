import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import LoginPage from '../../features/auth/pages/LoginPage.jsx';
import ProtectedRoute from '../../features/auth/components/ProtectedRoute.jsx';
import AgendaPage from '../../features/agenda/pages/AgendaPage.jsx';

// DEBUG: debe imprimir "function" en los 3
console.log('TYPES =>', {
  LoginPage: typeof LoginPage,
  ProtectedRoute: typeof ProtectedRoute,
  AgendaPage: typeof AgendaPage,
});

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/conferencias/:id" element={<AgendaPage />} />
      <Route
        path="/orador/mis-charlas"
        element={
          <ProtectedRoute roles={['orador','organizador']}>
            <div style={{padding:16}}>CRUD del orador (próximo paso)</div>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<div style={{padding:16}}>Ir a <Link to="/login">/login</Link></div>} />
    </Routes>
  );
}
