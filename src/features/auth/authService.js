import { request } from '../../api/httpClient.js';

export const authService = {
  login: (username, password) => request('/auth/login', { method: 'POST', body: { username, password } }),
  getDashboard: () => request('/dashboard'),
};
