import { Navigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext.jsx';

// El Dashboard solo es accesible con sesion. (El backend valida el token de todos modos.)
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
