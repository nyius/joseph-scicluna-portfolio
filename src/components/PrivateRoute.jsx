import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

function PrivateRoute({ children }) {
	const { loggedIn, checkingStatus } = useAuthStatus();

	if (checkingStatus) {
		return <Spinner />;
	}

	return loggedIn ? children : <Navigate to="/" />;
}

export default PrivateRoute;
