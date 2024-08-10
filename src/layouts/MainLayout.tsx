import { Outlet } from 'react-router-dom';
import NavBar from '../pages/navigation/NavBar';
import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { asyncCurrentLoggedInUser } from '../utils/config/FirebaseAuthActions';
// import {
// 	useCartDataContext,
// 	useProductContext,
// 	useUserDataContext,
// } from '../context';
import { CartItems, CartSidebar } from '../components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddUser, asyncSetError } from '../utils/store/actions/action';
import { asyncGetAllProductsDataFromFirestore } from '../utils/config/FirebaseProductAction';
import { asyncGetAllProducts } from '../utils/store/actions/productAction';
import { RootState } from '../utils/types/types';
import { useSideDrawerContext } from '../context/SideBarDrawar.context';
// import { useProductContext } from '../context';

const MainLayout: React.FC = () => {
	const [mount, setMount] = useState<boolean>(false);

	/* Redux Data Code */
	const dispatch = useDispatch();
	const { error } = useSelector((state: RootState) => state.user);
	const { allProducts } = useSelector((state: RootState) => state.products);
	const { cartItems, cartItemsTotal, cartItemCount } = useSelector(
		(state: RootState) => state.cart
	);
	
	// console.log(allProducts);
	useEffect(() => {
		const fetchCurrentUser = async () => {
			const user = await asyncCurrentLoggedInUser();
			if (user) {
				// setCurrentUser(user);
				dispatch(asyncAddUser(user));
			}
		};
		fetchCurrentUser();
		const getAllData = async () => {
			try {
				const data = await asyncGetAllProductsDataFromFirestore();
				// console.log(data);
				dispatch(asyncGetAllProducts(data));
			} catch (error) {
				console.log(error);
			}
		};
		getAllData();
	}, []);

	/* Context DAtA Code ---- */
	const { sideDrawerState, toggleDrawer } = useSideDrawerContext();
	const { isCartOpen, isMenuOpen } = sideDrawerState;

	// const { cartState, toggleDrawer } = useCartDataContext();
	// const { isCartOpen, isMenuOpen, cartItems, cartItemCount, cartItemsTotal } =
	// 	cartState;

	//Context User Fetch ----
	// const { state, setCurrentUser, setError } = useUserDataContext();
	// const { error } = state;
	// const { allProducts } = useProductContext();

	// console.log(user);
	//Context User Fetch ----
	// useEffect(() => {
	// 	const fetchCurrentUser = async () => {
	// 		const user = await asyncCurrentLoggedInUser();
	// 		if (user) {
	// 			setCurrentUser(user);
	// 		}
	// 	};
	// 	fetchCurrentUser();
	// }, []);

	useEffect(() => {
		const showToastMessage = (error: any) => {
			toast.success(error);
			// setError(null);
			dispatch(asyncSetError(null));
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
