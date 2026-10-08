import { useState } from 'react';
import Button from '../../components/ui/Button.jsx';
import TextField from '../../components/ui/TextField.jsx';

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await onSubmit(username, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="stack">
      <TextField label="Usuario" value={username} onChange={setUsername} autoComplete="username" />
      <TextField label="Contraseña" type="password" value={password} onChange={setPassword} autoComplete="current-password" />
      {error && <p className="error" role="alert">{error}</p>}
      <Button type="submit" disabled={loading || !username || !password}>
        {loading ? 'Verificando…' : 'Iniciar sesión'}
      </Button>
    </form>
  );
}
