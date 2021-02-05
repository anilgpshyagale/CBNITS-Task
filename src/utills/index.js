const TOKEN_KEY = 'jwt';

export const login = () => {
localStorage.setItem(TOKEN_KEY, 'CBNITS');
}

export const logout = () => {
localStorage.removeItem(TOKEN_KEY);
localStorage.clear()
sessionStorage.clear()
}

export const isLogin = () => {
if (localStorage.getItem(TOKEN_KEY)) {
return true;
}

return false;
}