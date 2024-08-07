import { Outlet } from 'react-router-dom';
import NavBar from '../pages/navigation/NavBar';
import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { asyncCurrentLoggedInUser } from '../utils/config/FirebaseAuthActions';
import { useUserDataContext } from '../context';
// import { useProductContext } from '../context';

const MainLayout: React.FC = () => {
	const [mount, setMount] = useState<boolean>(false);
	const { state, setCurrentUser } = useUserDataContext();
	const { user, isAuth } = state;
	// const { allProducts } = useProductContext();
	// console.log(state);
	// console.log(allProducts);

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
			</div>
		</>
	);
};

export default MainLayout;
