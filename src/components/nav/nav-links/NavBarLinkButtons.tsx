import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { asyncLogOutUser } from '../../../utils/config/FirebaseAuthActions';
// import { useUserDataContext } from '../../../context';
import { CustomNavButton } from '../../button';
import { useDispatch, useSelector } from 'react-redux';
import { asyncRemoveUser } from '../../../utils/store/actions/action';
import { RootState } from '../../../utils/types/types';

const NavBarLinkButtons: React.FC = () => {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state: RootState) => state.user);
	// const { state, dispatch } = useUserDataContext();
	// const { isAuth } = state;

	const handleLogout = async () => {
		try {
			// await dispatch({ type: 'REMOVE_USER' });
			await asyncLogOutUser();
			dispatch(asyncRemoveUser());
		} catch (error) {
			console.log('logout');
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
					<CustomNavButton
						sx={{ display: { xs: 'none', md: 'flex' } }}
						endIcon={<ShoppingCartIcon fontSize="small" />}
					>
						{' '}
						Shop
					</CustomNavButton>
				</Link>
				{isAuth ? (
					<CustomNavButton
						sx={{ display: { xs: 'none', md: 'flex' } }}
						onClick={handleLogout}
						endIcon={<LogoutIcon fontSize="small" />}
					>
						{' '}
						Log out
					</CustomNavButton>
				) : (
					<Link to="/authentication">
						<CustomNavButton
							sx={{ display: { xs: 'none', md: 'flex' } }}
							endIcon={<AccountCircleIcon fontSize="small" />}
						>
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
