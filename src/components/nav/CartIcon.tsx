import React from 'react';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import { Box } from '@mui/material';

const CartIcon: React.FC = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'background.default',
				color: 'text.primary',
				borderColor: 'text.primary',
				border: '1px solid',
				borderRadius: 25,
				px: 1,
				py: 0.3,
				width: 'fit-content',
				position: 'relative',
				mr: 1,
			}}
		>
			<ShoppingBagTwoToneIcon fontSize="large" />
		</Box>
	);
};
export default CartIcon;
