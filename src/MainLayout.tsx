import { Outlet } from 'react-router-dom';
import NavBar from './pages/navigation/NavBar';
import { CssBaseline } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { asyncCurrentLoggedInUser } from './utils/config/FirebaseAuthActions';
const MainLayout: React.FC = () => {
	const [currentUser, setCurrentUser] = useState<any>(null);

	useEffect(() => {
		const fetchCurrentUser = async () => {
			const user = await asyncCurrentLoggedInUser();
			setCurrentUser(user);
		};
		fetchCurrentUser();
	}, []);

	useEffect(() => {
		console.log(currentUser.uid);
	}, [currentUser]);

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
