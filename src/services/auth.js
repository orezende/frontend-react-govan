import api from './api';

export const TOKEN_KEY = "token";
export const isAuth = async (req, res) => await api.get('index');
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};
