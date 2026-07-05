import { useState, useCallback } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string; name: string } | null;
}

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>(() => {
    const stored = localStorage.getItem('zodex_auth');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return { isAuthenticated: false, user: null };
      }
    }
    return { isAuthenticated: false, user: null };
  });

  const login = useCallback((email: string, name: string) => {
    const newAuth = { isAuthenticated: true, user: { email, name } };
    localStorage.setItem('zodex_auth', JSON.stringify(newAuth));
    setAuth(newAuth);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('zodex_auth');
    setAuth({ isAuthenticated: false, user: null });
  }, []);

  return { ...auth, login, logout };
}
