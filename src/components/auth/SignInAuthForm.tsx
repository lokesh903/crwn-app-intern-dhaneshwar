import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { Link, useNavigate } from 'react-router-dom';
import { asyncSignInUserWithEmailAndPassword } from '../../utils/config/FirebaseAuthActions';
// import { useUserDataContext } from '../../context';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { asyncAddUser } from '../../utils/store/actions/action';

interface FormElements extends HTMLFormControlsCollection {
	email: HTMLInputElement;
	password: HTMLInputElement;
	persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}
interface defaultFormFieldsValue {
	email: string;
	password: string;
}
const defaultFormFields: defaultFormFieldsValue = {
	email: '',
	password: '',
};

const SingInAuthForm: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const { setCurrentUser } = useUserDataContext();

	const [formDetails, setFormDetails] =
		React.useState<defaultFormFieldsValue>(defaultFormFields);

	const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
	};
	const handleFormSubmit = async (e: React.FormEvent<SignInFormElement>) => {
		e.preventDefault();
		try {
			const { email, password } = formDetails;
			const { user } = await asyncSignInUserWithEmailAndPassword(
				email,
				password
			);
			// console.log(user);
			/* --- Context Api Set User ---  */
			// setCurrentUser(user);

			/* --- Redux State Set User ---  */
			dispatch(asyncAddUser(user));

			setFormDetails({
				email: '',
				password: '',
			});
			if (user) {
				navigate('/');
			}
		} catch (error: any) {
			toast.error(error.message);
			// console.error(error?.message);
		}
	};
	return (
		<form onSubmit={handleFormSubmit}>
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
