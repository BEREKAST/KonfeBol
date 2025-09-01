import React, { createContext, useContext, useEffect, useState } from 'react';
import { http } from '../../../shared/lib/http';

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {   // << export nombrado
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (!t) { setLoading(false); return; }
    http.get('/auth/me')
      .then(r => setUser(r.data.user))
      .catch(() => localStorage.removeItem('token'))
      .finally(() => setLoading(false));
  }, []);

  const loginDev = async (email) => {
    const { data } = await http.post('/auth/dev-login', { email });
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };

  const logout = () => { localStorage.removeItem('token'); setUser(null); };

  return <AuthCtx.Provider value={{ user, loading, loginDev, logout }}>{children}</AuthCtx.Provider>;
}

export const useAuth = () => useContext(AuthCtx);
