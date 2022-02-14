import { TOKEN_KEY } from './constants';

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isLogged = () => {
  if (localStorage.getItem(TOKEN_KEY)) return true;
  return false;
};
