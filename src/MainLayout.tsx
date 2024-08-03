import { Outlet } from 'react-router-dom';
import NavBar from './pages/navigation/NavBar';
import { CssBaseline } from '@mui/material';
const MainLayout: React.FC = () => {
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
