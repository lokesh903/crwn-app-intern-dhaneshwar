import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { asyncLogOutUser } from '../../../utils/config/FirebaseAuthActions';
import { useUserDataContext } from '../../../context';
import { CustomNavButton } from '../../button';

const NavBarLinkButtons: React.FC = () => {
	const { state, dispatch } = useUserDataContext();
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
				<Link to="/shop/all-products">
					<CustomNavButton endIcon={<ShoppingCartIcon fontSize="small" />}>
						{' '}
						Shop
					</CustomNavButton>
				</Link>
				{isAuth ? (
					<CustomNavButton
						onClick={handleLogout}
						endIcon={<LogoutIcon fontSize="small" />}
					>
						{' '}
						Log out
					</CustomNavButton>
				) : (
					<Link to="/authentication">
						<CustomNavButton endIcon={<AccountCircleIcon fontSize="small" />}>
							{' '}
							Sign In
						</CustomNavButton>
					</Link>
				)}
			</Box>
		</>
	);
};

export default NavBarLinkButtons;
