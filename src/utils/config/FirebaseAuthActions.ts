import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { auth, googleProvider } from './Firebase';

// --------------- Authetication Action ---------- //
export const asyncCurrentLoggedInUser = () => {
	return new Promise((resolve, reject) => {
		onAuthStateChanged(
auth,
			user => {
				if (user) {
					resolve(user);
				} else {
					resolve(null);
				}
			},
			reject
		);
	});
};

export const asyncSignInWithGoogle = async () => {
	return await signInWithPopup(auth, googleProvider);
};
export const asyncCreateUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const asyncSignInUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	return  signInWithEmailAndPassword(auth, email, password);
};

export const asyncLogOutUser = async () => {
	return await signOut(auth);
};
