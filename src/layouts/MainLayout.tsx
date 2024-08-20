import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/navigation/NavBar';
import { CssBaseline } from '@mui/material';
// import {
// 	useCartDataContext,
// 	useProductContext,
// 	useUserDataContext,
// } from '../context';
import { CartItems, CartSidebar } from '../components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetError } from '../utils/store/actions/action';
import { RootState } from '../utils/types/types';
import { useSideDrawerContext } from '@src/context/SideBarDrawar.context';
import {
	getAllData,
	getAllCategories,
} from '@src/utils/store/reducers/productsReducer';
import { fetchCurrentUser } from '@src/utils/store/reducers/userReducer';
import { asyncAddCategoriesDataToFirestore } from '@src/utils/config/FirebaseProductAction';
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
	// const addAllCategoriesToDB = async () => {
	// 	const data = await asyncAddCategoriesDataToFirestore();
	// 	console.log(data);
	// };
	useEffect(() => {
		dispatch(fetchCurrentUser() as any);
		// dispatch(getAllData() as any);
		// dispatch(getAllCategories() as any);
		console.log('chalala');
		// addAllCategoriesToDB();
	}, [dispatch]);

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
