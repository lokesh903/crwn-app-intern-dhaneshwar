import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { asyncSignInUserWithEmailAndPassword } from '@src/utils/config/FirebaseAuthActions';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { asyncAddUser } from '@src/utils/store/actions/action';

interface IFormInput {
	email: string;
	password: string;
}
const SingInAuthForm: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		try {
			const { email, password } = data;
			const { user } = await asyncSignInUserWithEmailAndPassword(
				email,
				password
			);
			/* --- Redux State Set User ---  */
			toast.success('Sign In Successful ! ✅', {
				position: 'top-center',
			});
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
				<FormLabel>Email</FormLabel>
				<Input type="email" {...register('email')} autoComplete="email" />
			</FormControl>
			<FormControl required>
				<FormLabel>Password</FormLabel>
				<Input
					type="password"
					autoComplete="current-password"
					{...register('password')}
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
					<Link to="#forget-route-will-open">Forgot your password?</Link>
				</Box>
				<Button type="submit" fullWidth>
					Sign in
				</Button>
			</Stack>
		</form>
	);
};

export default SingInAuthForm;
