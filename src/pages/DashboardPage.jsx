import { useEffect, useState } from 'react';
import { useAuth } from '../features/auth/AuthContext.jsx';
import { authService } from '../features/auth/authService.js';
import StatCard from '../features/dashboard/StatCard.jsx';
import Button from '../components/ui/Button.jsx';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    authService
      .getDashboard()
      .then(setData)
      .catch((err) => {
        if (err.status === 401) logout(); // token vencido o invalido
        else setError(err.message);
      });
  }, [logout]);

  return (
    <main className="dash">
      <header className="dash-head">
        <div>
          <h1>Dashboard</h1>
          <p className="muted">Sesión de {user?.username} · rol {user?.role}</p>
        </div>
        <Button variant="ghost" onClick={logout}>Cerrar sesión</Button>
      </header>

      {error && <p className="error" role="alert">{error}</p>}
      {!data && !error && <p className="muted">Cargando datos protegidos…</p>}

      {data && (
        <>
          <p className="welcome">{data.welcome}</p>
          <div className="stats">
            {data.stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
          <p className="muted small">Datos generados por el backend: {new Date(data.generatedAt).toLocaleString()}</p>
        </>
      )}
    </main>
  );
}
