import { Outlet } from 'react-router-dom';
import NavBar from '../pages/navigation/NavBar';
import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { asyncCurrentLoggedInUser } from '../utils/config/FirebaseAuthActions';
import {
	useCartDataContext,
	useProductContext,
	useUserDataContext,
} from '../context';
import { CartSidebar } from '../components/cart/CartSideBar.test';
import { CartItems } from '../components';
import { toast } from 'react-toastify';
// import { useProductContext } from '../context';

const MainLayout: React.FC = () => {
	const [mount, setMount] = useState<boolean>(false);
	const { state, setCurrentUser, setError } = useUserDataContext();
	const { error } = state;
	const { cartState, toggleDrawer } = useCartDataContext();
	const { isCartOpen, isMenuOpen, cartItems, cartItemCount, cartItemsTotal } =
		cartState;
	const { allProducts } = useProductContext();

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
		const showToastMessage = (error: any) => {
			toast.success(error);
			setError(null);
		};
		if (error) {
			showToastMessage(error);
		}
	}, [error]);

	useEffect(() => {
		setMount(true);
	}, []);
	if (!mount) return null;
	return (
		<>
			<div className="w-full">
				<CssBaseline />
				<NavBar />
				<Outlet context={{ allProducts }} />
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
