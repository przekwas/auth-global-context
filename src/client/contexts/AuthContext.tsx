import React, { useState, useEffect, createContext } from 'react';
import { apiService } from '../utils/api-service';

export const AuthContext = createContext<
	[
		{ loggedIn?: boolean; isChecking?: boolean },
		React.Dispatch<
			React.SetStateAction<{
				loggedIn: boolean;
				isChecking: boolean;
			}>
		>
	]
>([{}, () => {}]);

const AuthProvider = (props: AuthProviderProps) => {
	const [auth, setAuth] = useState({ loggedIn: false, isChecking: true });

	useEffect(() => {
		apiService('/auth/validate')
			.then(() => {
				setAuth({ loggedIn: true, isChecking: false });
			})
			.catch(() => {
				setAuth({ loggedIn: false, isChecking: false });
			});
	}, []);

	if (auth.isChecking) {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">LOADING ...</h1>
			</main>
		);
	}

	return <AuthContext.Provider value={[auth, setAuth]}>{props.children}</AuthContext.Provider>;
};

interface AuthProviderProps {
	children: React.ReactNode;
}

export default AuthProvider;
