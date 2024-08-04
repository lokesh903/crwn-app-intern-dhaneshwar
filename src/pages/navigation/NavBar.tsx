import { Box } from '@mui/material';
import { ThemeToggleButton, NavBarLinks } from '../../components/nav';
import { Link } from 'react-router-dom';
import CartIcon from '../../components/nav/CartIcon';

const NavBar = () => {
	return (
		<>
			<div className="bg-slate-400 rounded-lg top-0 left-0 fixed w-full z-50 mt-1 px-10 max-sm:px-4 py-3">
				<div className="w-full flex justify-between items-center">
					<Link to="/">Logo</Link>
					<div>Search Bar</div>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<NavBarLinks />
						<CartIcon />
						<ThemeToggleButton />
					</Box>
				</div>
			</div>
		</>
	);
};

export default NavBar;
