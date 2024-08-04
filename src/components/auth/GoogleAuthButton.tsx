import React from 'react';
import Button from '@mui/joy/Button';
import GoogleIcon from './GoogleIcon';
import { auth } from '../../utils/config/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { asyncSignInWithGoogle } from '../../utils/config/FirebaseAuthActions';

const GoogleAuthButton: React.FC = () => {
	console.log(auth?.currentUser?.email);

	onAuthStateChanged(auth, user => {
		if (user) {
			// console.log(user);
			const uid = user.uid;
			// console.log(uid);
		} else {
			// User is signed out
			// ...
		}
	});

	const hancleGoogleSignIn = async () => {
		try {
			await asyncSignInWithGoogle();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<Button
			variant="soft"
			color="neutral"
			fullWidth
			onClick={hancleGoogleSignIn}
			startDecorator={<GoogleIcon />}
		>
			Continue with Google
		</Button>
	);
};

export default GoogleAuthButton;
