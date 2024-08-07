import React from 'react';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import { Typography } from '@mui/material';
import { CustomNavButton } from '../../button';

const CartIcon: React.FC = () => {
	return (
		<CustomNavButton
			sx={{ ml: 1, mr: 1 }}
			startIcon={<ShoppingBagTwoToneIcon fontSize="large" />}
		>
			<Typography>3</Typography>
		</CustomNavButton>
	);
};

export default CartIcon;
