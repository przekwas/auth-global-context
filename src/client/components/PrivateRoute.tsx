import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
    const { loggedIn } = useAuth();
 
	if (!loggedIn) {
		return <Redirect to={{ pathname: '/login', state: 'log in first bitchass' }} />;
	} else {
		return <Route {...rest}>{children}</Route>;
	}
};

interface PrivateRouteProps {
	path: string;
	children: React.ReactNode;
	exact?: boolean;
}

export default PrivateRoute;
