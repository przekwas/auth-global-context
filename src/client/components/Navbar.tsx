import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Navbar = (props: NavbarProps) => {
	const { loggedIn, logout } = useAuth();
    
	return (
		<nav className="nav justify-content-end alig-items-center shadow p-3 mb-5">
			<NavLink exact to="/" className="btn btn-link">
				home
			</NavLink>
			{!loggedIn ? (
				<NavLink exact to="/login" className="btn btn-link">
					login
				</NavLink>
			) : (
				<button onClick={() => logout()} className="btn btn-link">
					logout
				</button>
			)}
			<NavLink exact to="/private" className="btn btn-link">
				private
			</NavLink>
		</nav>
	);
};

interface NavbarProps {}

export default Navbar;
