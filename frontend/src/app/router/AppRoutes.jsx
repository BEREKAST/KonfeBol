// frontend/src/app/router/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '../../features/auth/pages/LoginPage.jsx';
import ProtectedRoute from '../../features/auth/components/ProtectedRoute.jsx';
import AgendaPage from '../../features/agenda/pages/AgendaPage.jsx';
import HomePage from '../../features/home/pages/HomePage.jsx';
import NotFound from '../../shared/pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home informativa */}
      <Route path="/" element={<HomePage />} />

      {/* Alias a Home */}
      <Route path="/home" element={<Navigate to="/" replace />} />

      {/* Agenda por conferencia */}
      <Route path="/conferencias/:id" element={<AgendaPage />} />

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />

      {/* Área privada del orador */}
      <Route
        path="/orador/mis-charlas"
        element={
          <ProtectedRoute roles={['orador', 'organizador']}>
            <div style={{ padding: 16 }}>CRUD del orador (próximo paso)</div>
          </ProtectedRoute>
        }
      />

      {/* 404 elegante */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
