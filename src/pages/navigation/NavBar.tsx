import React from 'react';
import Box from '@mui/material/Box';
import {
	AppLogo,
	CartIconButton,
	NavBarLinkButtons,
	ThemeToggleButton,
} from '../../components';
import { NavigationContainer } from '../../containers';
// import { useCartDataContext } from '../../context';
import { MenuIcon } from '../../components/nav/nav-links';
import { useSideDrawerContext } from '../../context/SideBarDrawar.context';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/types/types';

const NavBar: React.FC = () => {
	// const { cartState, toggleDrawer } = useCartDataContext();
	// const { cartItemCount } = cartState;
	const { toggleDrawer } = useSideDrawerContext();
	const { cartItemCount } = useSelector((state: RootState) => state.cart);

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
