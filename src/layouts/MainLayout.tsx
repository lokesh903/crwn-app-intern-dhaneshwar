import { Outlet } from 'react-router-dom';
import NavBar from '../pages/navigation/NavBar';
import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { asyncCurrentLoggedInUser } from '../utils/config/FirebaseAuthActions';
import { useCartDataContext, useUserDataContext } from '../context';
import { CartSidebar } from '../components/cart/CartSideBar.test';
import { CartItems } from '../components';
// import { useProductContext } from '../context';

const MainLayout: React.FC = () => {
	const [mount, setMount] = useState<boolean>(false);
	const { state, setCurrentUser } = useUserDataContext();
	const { user, isAuth } = state;
	const { cartState, toggleDrawer } = useCartDataContext();
	const { isCartOpen, isMenuOpen, cartItems, cartItemCount, cartItemsTotal } =
		cartState;
	useEffect(() => {
		const fetchCurrentUser = async () => {
			const user = await asyncCurrentLoggedInUser();
			if (user) {
				setCurrentUser(user);
			}
		};
		fetchCurrentUser();
	}, []);

	useEffect(() => {
		// console.log(currentUser);
		// console.log(user);
		// console.log(isAuth);
	}, [user, isAuth]);

	useEffect(() => {
		setMount(true);
	}, []);
	if (!mount) return null;
	return (
		<>
			<div className="w-full">
				<CssBaseline />
				<NavBar />
				<Outlet />
				<CartSidebar
					isOpen={isCartOpen}
					toggleDrawer={toggleDrawer}
					type="cart"
				>
					<CartItems
						cartItems={cartItems}
						cartItemCount={cartItemCount}
						cartItemsTotal={cartItemsTotal}
					/>
				</CartSidebar>
				<CartSidebar
					isOpen={isMenuOpen}
					toggleDrawer={toggleDrawer}
					type="menu"
				>
					Menu itmenelssss
				</CartSidebar>
			</div>
		</>
	);
};

export default MainLayout;
