import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { TOKEN_KEY } from '../utils/storage';
import { history } from '../utils/browser-history';

export const useAuth = () => {
	const [auth, setAuth] = useContext(AuthContext);

	const login = (payload: string) => {
		localStorage.setItem(TOKEN_KEY, payload);
		setAuth({ isChecking: false, loggedIn: true });
		history.push('/private');
	};

	const logout = () => {
		localStorage.removeItem(TOKEN_KEY);
		setAuth({ isChecking: false, loggedIn: false });
	};

	return {
		loggedIn: auth.loggedIn,
		logout,
		login
	};
};
