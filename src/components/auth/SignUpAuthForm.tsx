import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { useNavigate } from 'react-router-dom';
import { asyncCreateUserWithEmailAndPassword } from '../../utils/config/FirebaseAuthActions';
// import { useUserDataContext } from '../../context';
import { toast } from 'react-toastify';
import { asyncAddUser } from '../../utils/store/actions/action';
import { useDispatch } from 'react-redux';
interface FormElements extends HTMLFormControlsCollection {
	email: HTMLInputElement;
	password: HTMLInputElement;
	persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}
interface defaultFormFieldsValue {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: string;
}
const defaultFormFields: defaultFormFieldsValue = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SingUpAuthForm: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	// const { setCurrentUser } = useUserDataContext();
	const [formDetails, setFormDetails] =
		React.useState<defaultFormFieldsValue>(defaultFormFields);

	const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
	};
	const handleFormSubmit = async (e: React.FormEvent<SignInFormElement>) => {
		e.preventDefault();
		if (formDetails.password !== formDetails.confirmPassword) {
			alert('Password & Confirm Password not Matched !');
			return;
		}
		try {
			const { email, password } = formDetails;
			const { user } = await asyncCreateUserWithEmailAndPassword(
				email,
				password
			);
			/* --- Context Api Set User ---  */
			// setCurrentUser(user);

			/* --- Redux State Set User ---  */
			dispatch(asyncAddUser(user));

			setFormDetails(defaultFormFields);
			if (user) {
				navigate('/');
			}
		} catch (error: any) {
			toast.error(error.message);
			// console.error(error);
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<FormControl required>
				<FormLabel>Full Name</FormLabel>
				<Input
					type="text"
					name="displayName"
					onChange={handleOnchange}
					value={formDetails.displayName}
				/>
			</FormControl>
			<FormControl required>
				<FormLabel>Email</FormLabel>
				<Input
					type="email"
					name="email"
					autoComplete="email"
					onChange={handleOnchange}
					value={formDetails.email}
				/>
			</FormControl>
			<FormControl required>
				<FormLabel>Password</FormLabel>
				<Input
					type="password"
					autoComplete="current-password"
					name="password"
					onChange={handleOnchange}
					value={formDetails.password}
				/>
			</FormControl>
			<FormControl required>
				<FormLabel>Confirm Password</FormLabel>
				<Input
					type="password"
					autoComplete="current-password"
					name="confirmPassword"
					onChange={handleOnchange}
					value={formDetails.confirmPassword}
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
