import { Provider, useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

function AuthProvider() {
	// const loggedIn =
	const initialState = {
		uid: '',
		user: {},
	};
	return <div>AuthContext</div>;
}

export default AuthContext;
