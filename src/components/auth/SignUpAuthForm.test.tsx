import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { asyncCreateUserWithEmailAndPassword } from '@src/utils/config/FirebaseAuthActions';
import { toast } from 'react-toastify';
import { asyncAddUser } from '@src/utils/store/actions/action';
import { useDispatch } from 'react-redux';

interface SignUpFormInputsVal {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const SingUpAuthForm: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm<SignUpFormInputsVal>();

	const onSubmit: SubmitHandler<SignUpFormInputsVal> = async data => {
		if (data.password !== data.confirmPassword) {
			alert('Password & Confirm Password not Matched !');
			return;
		}
		try {
			const { email, password } = data;
			const { user } = await asyncCreateUserWithEmailAndPassword(
				email,
				password
			);
			/* --- Redux State Set User ---  */
			dispatch(asyncAddUser(user));
			if (user) {
				navigate('/');
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl required>
				<FormLabel>Full Name</FormLabel>
				<Input type="text" {...register('displayName')} />
			</FormControl>
			<FormControl required>
				<FormLabel>Email</FormLabel>
				<Input type="email" autoComplete="email" {...register('email')} />
			</FormControl>
			<FormControl required>
				<FormLabel>Password</FormLabel>
				<Input
					type="password"
					autoComplete="current-password"
					{...register('password')}
				/>
			</FormControl>
			<FormControl required>
				<FormLabel>Confirm Password</FormLabel>
				<Input
					type="password"
					autoComplete="current-password"
					{...register('confirmPassword')}
				/>
			</FormControl>
			<Stack gap={4} sx={{ mt: 2 }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Checkbox size="sm" label="Remember me" name="persistent" />
				</Box>
				<Button type="submit" fullWidth>
					Create New Account
				</Button>
			</Stack>
		</form>
	);
};

export default SingUpAuthForm;
