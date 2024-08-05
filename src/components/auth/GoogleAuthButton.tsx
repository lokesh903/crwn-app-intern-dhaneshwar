import React from 'react';
import Button from '@mui/joy/Button';
import GoogleIcon from './GoogleIcon';
import {
	asyncCurrentLoggedInUser,
	asyncSignInWithGoogle,
} from '../../utils/config/FirebaseAuthActions';
import { useUserData } from '../../context/User.Context';
import { useNavigate } from 'react-router-dom';

const GoogleAuthButton: React.FC = () => {
	const { state, setCurrentUser } = useUserData();
	const navigate = useNavigate();

	const hancleGoogleSignIn = async () => {
		try {
			const { user } = await asyncSignInWithGoogle();
			// 	console.log(user);
			if (user) {
				await asyncCurrentLoggedInUser();
				setCurrentUser(user);
				navigate('/');
			}
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
