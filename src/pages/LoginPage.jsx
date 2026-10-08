import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext.jsx';
import LoginForm from '../features/auth/LoginForm.jsx';

export default function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  async function handleLogin(username, password) {
    await login(username, password);
    navigate('/dashboard', { replace: true });
  }

  return (
    <main className="login">
      <section className="panel">
        <h1>Acceso a la consola</h1>
        <p className="muted">Ninguna sesión es de confianza hasta verificarla.</p>
        <LoginForm onSubmit={handleLogin} />
      </section>
    </main>
  );
}
