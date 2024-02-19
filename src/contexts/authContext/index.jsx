import { auth } from "../../firebase/firebase";
import React, { useState, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

const authContext = React.createContext();

export function useAuth() {
	return useContext(authContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializer);

		return unsubscribe;
	}, []);

	async function initializer(user) {
		if (user) {
			setCurrentUser({ ...user });
			setUserLoggedIn(true);
		} else {
			setCurrentUser(null);
			setUserLoggedIn(false);
		}
		setLoading(false);
	}
	const value = {
		currentUser,
		userLoggedIn,
		loading,
	};

	return (
		<authContext.Provider value={value}>
			{!loading && children}
		</authContext.Provider>
	);
}
