import React from 'react';
import Box from '@mui/material/Box';
import {
	AppLogo,
	CartIconButton,
	NavBarLinkButtons,
	ThemeToggleButton,
} from '../../components';
import { NavigationContainer } from '../../containers';
import { useCartDataContext } from '../../context';
import { MenuIcon } from '../../components/nav/nav-links';

const NavBar: React.FC = () => {
	const { cartState, toggleDrawer } = useCartDataContext();
	const { cartItemCount } = cartState;

	return (
		<NavigationContainer>
			<AppLogo />
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<NavBarLinkButtons />
				<CartIconButton toggleCart={toggleDrawer}>
					{cartItemCount}
				</CartIconButton>
				<MenuIcon toggleMenu={toggleDrawer} />
				<ThemeToggleButton />
			</Box>
		</NavigationContainer>
	);
};

export default NavBar;
