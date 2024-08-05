import React from 'react';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import { Button, Typography } from '@mui/material';

const CartIcon: React.FC = () => {
	return (
		<Button
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'background.default',
				color: 'text.primary',
				borderColor: 'text.primary',
				border: '1px solid',
				borderRadius: 25,
				px: 2,
				py: 0.8,
				ml: .7,
				mr: 0.7,
				whiteSpace: 'nowrap',
				width: '100%',
				'&:hover': {
					bgcolor: 'text.primary',
					color: 'text.hover',
				},
			}}
			variant="contained"
			startIcon={<ShoppingBagTwoToneIcon fontSize="large" />}
		>
			<Typography>3</Typography>
		</Button>
	);
};
export default CartIcon;
