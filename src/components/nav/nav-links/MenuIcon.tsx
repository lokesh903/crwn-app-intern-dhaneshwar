import React from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Typography } from '@mui/material';
import { CustomNavButton } from '../../button';
import { MenuIconProps } from '../../../utils/types/types';

const MenuIcon: React.FC<MenuIconProps> = ({ toggleMenu }) => {
	return (
		<CustomNavButton
			sx={{
				ml: { xs: 0, md: 1 },
				mr: { xs: 1, md: 1 },
				width: '100%',
				px: 0,
				py: 0.5,
				display: { xs: 'block', md: 'none' },
			}}
			onClick={toggleMenu('menu', true)}
			// startIcon={<MenuOpenIcon fontSize="large" />}
		>
			{/* {null} */}
			<MenuOpenIcon fontSize="medium" />
		</CustomNavButton>
	);
};

export default MenuIcon;
