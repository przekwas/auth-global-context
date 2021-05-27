import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from './utils/browser-history';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './views/Home';
import Login from './views/Login';
import Private from './views/Private';
import AuthProvider from './contexts/AuthContext';

const App = (props: AppProps) => {
	return (
		<Router history={history}>
			<AuthProvider>
				{/* <ToastContainer /> */}
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<PrivateRoute exact path="/private">
						<Private />
					</PrivateRoute>
					<Route exact path="/login">
						<Login />
					</Route>
				</Switch>
				{/* <Footer / */}
			</AuthProvider>
		</Router>
	);
};

interface AppProps {}

export default App;
