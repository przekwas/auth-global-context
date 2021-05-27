import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { apiService } from '../utils/api-service';

const Login = (props: LoginProps) => {
	const { push } = useHistory();
	const { login, loggedIn } = useAuth();
	const { state } = useLocation<string>();
	const [values, setValues] = useState<{ email?: string; password?: string }>({
		email: 'test@test.com',
		password: 'password123'
	});

	const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		apiService('/auth/login', 'POST', values)
			.then(token => login(token))
			.catch(() => alert('check your credentials, numbnuts'));
	};

	useEffect(() => {
		if (loggedIn) {
			push('/private', 'you already logged in idiot');
		}
	}, []);

	return (
		<main className="container my-5">
			<section className="row justify-content-center">
				<div className="col-12 col-md-6">
					<form className="p-4 border rounded shadow form-group">
						<input
							name="email"
							value={values.email || ''}
							onChange={handleChanges}
							className="mb-2 form-control"
						/>
						<input
							name="password"
							value={values.password || ''}
							onChange={handleChanges}
							className="mb-2 form-control"
						/>
						<button onClick={handleLoginClick} className="btn btn-primary">
							Login
						</button>
					</form>
				</div>
				{state && <div className="alert alert-danger">{state}</div>}
			</section>
		</main>
	);
};

interface LoginProps {}

export default Login;
