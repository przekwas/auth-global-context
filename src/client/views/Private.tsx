import * as React from 'react';
import { useLocation } from 'react-router';

const Private = (props: PrivateProps) => {
	const { state } = useLocation<string>();
	return (
		<main className="container my-5">
			<h1 className="text-center text-primary">Private Page</h1>
			{state && <div className="alert alert-info">{state}</div>}
		</main>
	);
};

interface PrivateProps {}

export default Private;
