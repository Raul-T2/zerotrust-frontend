import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { authService } from './authService.js';
import { tokenStorage } from '../../api/httpClient.js';

const AuthContext = createContext(null);
const USER_KEY = 'zt_user';

function readUser() {
  try {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => (tokenStorage.get() ? readUser() : null));

  const login = useCallback(async (username, password) => {
    const { token, user: u } = await authService.login(username, password);
    tokenStorage.set(token);
    sessionStorage.setItem(USER_KEY, JSON.stringify(u));
    setUser(u);
  }, []);

  const logout = useCallback(() => {
    tokenStorage.clear();
    sessionStorage.removeItem(USER_KEY);
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, isAuthenticated: !!user, login, logout }), [user, login, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
