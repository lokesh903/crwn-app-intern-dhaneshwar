import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { asyncLogOutUser } from '../../utils/config/FirebaseAuthActions';
import { useUserData } from '../../context/User.Context';

const NavBarLinks: React.FC = () => {
	const { state, dispatch } = useUserData();
	const { isAuth } = state;

	const handleLogout = async () => {
		try {
			await dispatch({ type: 'REMOVE_USER' });
			await asyncLogOutUser();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Box
				sx={{
					flexGrow: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 1,
				}}
			>
				<Link to="/shop">
					<Button
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							bgcolor: 'background.default',
							color: 'text.primary',
							borderColor: 'text.primary',
							border: '1px solid',
							borderRadius: 25,
							px: 2,
							py: 0.8,
							whiteSpace: 'nowrap',
							width: '100%',
							'&:hover': {
								bgcolor: 'text.primary',
								color: 'text.hover',
							},
						}}
						variant="contained"
						endIcon={<ShoppingCartIcon fontSize="small" />}
					>
						Shop
					</Button>
				</Link>
				{isAuth ? (
					<Button
						onClick={handleLogout}
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							bgcolor: 'background.default',
							color: 'text.primary',
							borderColor: 'text.primary',
							border: '1px solid',
							borderRadius: 25,
							px: 2,
							py: 0.8,
							whiteSpace: 'nowrap',
							width: '100%',
							'&:hover': {
								bgcolor: 'text.primary',
								color: 'text.hover',
							},
						}}
						variant="contained"
						endIcon={<LogoutIcon fontSize="small" />}
					>
						Log out
					</Button>
				) : (
					<Link to="/authentication">
						<Button
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								bgcolor: 'background.default',
								color: 'text.primary',
								borderColor: 'text.primary',
								border: '1px solid',
								borderRadius: 25,
								px: 2,
								py: 0.8,
								whiteSpace: 'nowrap',
								width: '100%',
								'&:hover': {
									bgcolor: 'text.primary',
									color: 'text.hover',
								},
							}}
							variant="contained"
							endIcon={<AccountCircleIcon fontSize="small" />}
						>
							{' '}
							Sign In
						</Button>
					</Link>
				)}
			</Box>
		</>
	);
};

export default NavBarLinks;
