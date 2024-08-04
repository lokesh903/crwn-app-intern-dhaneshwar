import React from 'react';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import { Box, Button, Typography } from '@mui/material';

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
				// px: 1,
				// py: 1,
				width: 'fit-content',
				position: 'relative',
				mr: 1,
				ml: 1,
			}}
		>
			<Button
				startIcon={
					<ShoppingBagTwoToneIcon
						fontSize="large"
						sx={{ color: 'text.primary' }}
					/>
				}
			>
				<Typography sx={{ color: 'text.primary' }}>3</Typography>
			</Button>
		</Box>
	);
};
export default CartIcon;
