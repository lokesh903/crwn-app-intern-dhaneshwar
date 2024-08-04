import React from 'react';
import { SignInForm, SignUpForm } from '../../components/auth';
import { Container } from '@mui/material';

const AuthenticationPage: React.FC = () => {
	return (
		<Container sx={{ display: 'flex !important' }}>
			<SignInForm />
			<SignUpForm />
		</Container>
	);
};

export default AuthenticationPage;
