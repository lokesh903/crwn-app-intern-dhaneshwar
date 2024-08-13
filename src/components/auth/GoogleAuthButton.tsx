import React from 'react';
import Button from '@mui/joy/Button';
import GoogleIcon from './GoogleIcon';
import {
	asyncCurrentLoggedInUser,
	asyncSignInWithGoogle,
} from '../../utils/config/FirebaseAuthActions';
// import { useUserDataContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/types/types';
import { asyncAddUser } from '../../utils/store/actions/action';

const GoogleAuthButton: React.FC = () => {
	const dispatch = useDispatch();
	// const { setCurrentUser } = useUserDataContext();
	const { user } = useSelector((state: RootState) => state.user);
	// console.log(user);

	const navigate = useNavigate();

	const hancleGoogleSignIn = async () => {
		try {
			const { user } = await asyncSignInWithGoogle();
			// 	console.log(user);
			dispatch(asyncAddUser(user));
			if (user) {
				await asyncCurrentLoggedInUser();
				// setCurrentUser(user);
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
